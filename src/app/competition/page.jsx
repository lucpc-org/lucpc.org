"use client";

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../component/AuthProvider";
import { ref, set, get } from "firebase/database";
import { db } from "../../service/FirebaseService";

import Leaderboard from "../../component/Leaderboard";
import Link from "next/link";
import { Icon } from "@iconify/react";


export default function Problems() {
  const [solvedStates, setSolvedStates] = useState({
    'easy': false,
    'medium': false,
    'hard': false
  });

  const { currentUser, loading } = useContext(AuthContext);

  const [dbProblems, setDBProblems] = useState([]);

  useEffect(() => {
    const problemsRef = ref(db, "problems/");

    get(problemsRef).then((snapshot) => {
      let rawProblems = snapshot.val();

      let easy = rawProblems.easy;
      easy.diffName = "easy";

      let medium = rawProblems.medium;
      medium.diffName = "medium";

      let hard = rawProblems.hard;
      hard.diffName = "hard";

      setDBProblems([easy, medium, hard]);
    });
  }, []);

  useEffect(() => {
    if (!(currentUser === null || currentUser === undefined)) {
      const userRef = ref(db, "users/" + currentUser.uid);

      get(userRef).then((snapshot) => {
        const data = snapshot.val();
        if (data.problems){
          setSolvedStates({
            easy: data.problems.easy ? data.problems.easy.state : false,
            medium: data.problems.medium ? data.problems.medium.state : false,
            hard: data.problems.hard ? data.problems.hard.state : false,
          });
        }
      });
    }
  }, [currentUser]);

  function getDifficulty(e) {
    return dbProblems.find((item) => item.diffName === e.target.id).difficulty;
  }

  const completeProblem = (e) => {
    const currentTime = new Date().getTime();
    const userRef = ref(db, "users/" + currentUser.uid);

    let newSolvedStates = Object.assign({}, solvedStates);
    newSolvedStates[e.target.id] = e.target.checked;
    setSolvedStates(newSolvedStates);
    
    Promise.all([get(userRef)]).then((snapshots) => {
      if (snapshots[0].exists()) {
        let userData = snapshots[0].val();
        const difficulty = getDifficulty(e);

        // Check if being checked or unchecked (We use opposite value cause it's not updated yet)
        if (e.target.checked) {
          // If problems have been solved by this user, totalScore and weeklyScore should exist
          if ("problems" in userData) {
            //If the problem type exists in the db
            if (e.target.id in userData.problems) {
              // This is because sometimes the checkmark won't update so they can click it again
              // We don't want to update the database if they have already solved it
              if (!userData.problems[e.target.id].state) {
                userData.problems[e.target.id].time = currentTime;
                // e.target.id is either 'easy', 'medium', or 'hard'
                userData.problems[e.target.id].state = true;

                // Add to the total score
                userData.totalScore += difficulty;
                userData.weeklyScore += difficulty;
              }
            } else {
              // If the problem type does not exist in the db
              userData.problems[e.target.id] = {};
              userData.problems[e.target.id].state = true;
              userData.problems[e.target.id].time = currentTime;

              // Add to the total score
              userData.totalScore += difficulty;
              userData.weeklyScore += difficulty;
            }
          } else {
            // Case where 'problems' not in user data
            userData.problems = {};
            userData.problems[e.target.id] = {};
            userData.problems[e.target.id].state = true;
            userData.problems[e.target.id].time = currentTime;

            // Create the total score
            userData.totalScore = difficulty;
            userData.weeklyScore = difficulty;
          }
        } else {

          // Case where the problem is unchecked
          // These cases do not require any action if the data does not exist
          if ("problems" in userData) {
            // We need to make sure that something with the website did not go wrong first (They unchecked when it was already supposed to be unchecked)
            // Only change things if the state is set to true
            if (userData.problems[e.target.id].state) {
              userData.problems[e.target.id].state = false;
              userData.problems[e.target.id].time = null;
  
              // Remove the problem value from their score and make sure its only one decimal place
              const newScore = Math.round((userData.weeklyScore - difficulty) * 10) / 10;
  
              userData.weeklyScore = Math.max(0, newScore);
              userData.totalScore = Math.max(0, newScore);
            }
          }
        }
        
        // Round scores to one decimal place
        userData.totalScore = Math.round(userData.totalScore * 10) / 10;
        userData.weeklyScore = Math.round(userData.weeklyScore * 10) / 10;
        
        set(userRef, userData);
      } else {
        // Case where the snapshot does not exist
        let problems = {};
        problems[e.target.id].state = e.target.checked;
        problems[e.target.id].time = currentTime;
        const difficulty = getDifficulty(e);

        let userData = {
          name: currentUser.providerData[0].displayName,
          imageURL: currentUser.providerData[0].photoURL.slice(0, -6),
          kattisURL: "",
          totalScore: difficulty,
          weeklyScore: difficulty,
          problems: problems,
        };

        set(userRef, userData);
      }
    });
  };

  return (
    <div className="flex flex-col w-full font-sans pb-12 bg-background">
      <div className="pb-10">
        <h1 className="pb-1">Competition 🏃</h1>
        <p className="md:text-lg text-foreground/80">
          Weekly Problems are posted here. Check off each problem you solve
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-5">
        {dbProblems.map((item, i) => (
          <div
            key={item.difficulty}
            className="flex flex-row grow rounded-lg border border-background-700 bg-background-800 p-5 items-center"
          >
            <div className="flex flex-col mr-auto">
              <h3 className={`text-${item.diffName}`}>{item.name}</h3>
              <p className="text-foreground/80 text-lg">
                <strong>{item.difficulty} </strong>
                <span>points</span>
              </p>
            </div>

            <div className="flex items-center space-x-5 text-4xl">
              {!(currentUser === null || currentUser === undefined) && (
                <label htmlFor={item.diffName} className="swap">
                  <input
                    onChange={completeProblem}
                    type="checkbox"
                    id={item.diffName}
                    checked={solvedStates[item.diffName]}
                    readOnly={false}
                  />
                  <svg className="fill-easy swap-on" xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                  </svg>
                  <svg className="fill-foreground/30 swap-off" xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 512 512">
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                  </svg>
                </label>
              )}
              <Link href={item.url} target="_blank">
                <Icon icon="fa6-solid:square-arrow-up-right" className="transition-colors text-foreground/40 hover:text-foreground/20" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[4rem]">
        <Leaderboard />
      </div>
      <div className="invisible text-easy text-medium text-hard"></div>
    </div>
  );
}
