"use client";

import React, { useContext, useState, useEffect } from "react";
import { ref, set, get } from "firebase/database";
import { auth, db } from "../../service/FirebaseService";

import Link from "next/link"

import Leaderboard from "../../component/Leaderboard";

export default function Problems() {
  const [currentUser, setCurrentUser] = useState(null);
  const [solvedStates, setSolvedStates] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        const userRef = ref(db, "users/" + user.uid);

        get(userRef).then((snapshot) => {
          const data = snapshot.val();
          setSolvedStates({
            easy: data.problems.easy ? data.problems.easy.state : false ,
            medium: data.problems.medium ? data.problems.medium.state : false,
            hard: data.problems.hard ? data.problems.hard.state : false,
          });
        });
      }
    });
    return unsubscribe;
  }, []);

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


  const completeProblem = (e) => {
    const currentTime = new Date().getTime();
    const userRef = ref(db, "users/" + currentUser.uid);

    let newSolvedStates = solvedStates;
    newSolvedStates[e.target.id] = !e.target.checked;
    setSolvedStates(newSolvedStates);

    Promise.all([get(userRef)]).then((snapshots) => {
      if (snapshots[0].exists()) {
        let userData = snapshots[0].val();

        // Check if being checked or unchecked
        if (e.target.checked) {
          // If problems have been solved by this user, totalScore and weeklyScore should exist
          if ("problems" in userData) {
            //If the problem type exists in the db
            if (e.target.id in userData.problems) {
              // If the user has not solved the problem before then we update the time for that problem
              
              userData.problems[e.target.id].time = currentTime;
              // e.target.id is either 'easy', 'medium', or 'hard'
              userData.problems[e.target.id].state = true;
            } else {
              // If the problem type does not exist in the db
              userData.problems[e.target.id] = {}
              userData.problems[e.target.id].state = true;
              userData.problems[e.target.id].time = currentTime;
            }

            const difficulty = dbProblems.find(item => item.diffName === e.target.id).difficulty;
            // Add to the total score
            userData.totalScore += difficulty;
            userData.weeklyScore += difficulty;
          } else {
            // Case where 'problems' not in user data
            userData.problems = {};
            userData.problems[e.target.id] = {};
            userData.problems[e.target.id].state = true;
            userData.problems[e.target.id].time = currentTime;

            // Create the total score
            const difficulty = dbProblems.find(item => item.diffName === e.target.id).difficulty;
            userData.totalScore = difficulty;
            userData.weeklyScore = difficulty;
          }
        } else {
          // Case where the problem is unchecked
          // These cases do not require any action if the data does not exist
          if ("problems" in userData) {
            userData.problems[e.target.id].state = false;
            userData.problems[e.target.id].time = null;
          }
        }

        console.log(userData);

        set(userRef, userData);
      } else {
        // Case where the snapshot does not exist
        let problems = {};
        problems[e.target.id].state = e.target.checked;
        problems[e.target.id].time = currentTime;
        const difficulty = dbProblems.find(item => item.diffName === e.target.id).difficulty;

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
    <div className="flex flex-col w-full items-center font-sans pb-[4rem]">
      <div className="flex flex-col w-[95%] lg:w-[85%] xl:w-[80%]">
        <h1 className="pb-10">Competition</h1>
        <div className="flex flex-row gap-5">
          {dbProblems.map((item, i) => (
            <div key={item.difficulty} className="flex flex-row grow rounded-lg border border-background3 bg-background2 p-5 items-center">
              <div className="flex flex-col mr-auto">
                <h3 className={`text-${item.diffName}`}>{item.name}</h3>
                <p className="text-text_hover text-lg">
                  <strong>{item.difficulty} </strong>
                  <span>points</span>
                </p>
              </div>

              <div className="space-x-5 text-4xl">
                <Link href={item.url} className="transition-opacity ease-in-out duration-150 hover:opacity-80">
                  <i className="fa-solid fa-square-arrow-up-right"></i>
                </Link>
                {!(currentUser === null || currentUser === undefined) && (
                  <>
                    <input
                      onClick={completeProblem}
                      type="checkbox"
                      id={item.diffName}
                      value=""
                      defaultChecked={solvedStates[item.diffName]}
                      className="hidden peer"
                    />
                    <label htmlFor={item.diffName} className="text-text_hover cursor-pointer opacity-30 group transition-all ease-in-out duration-150 peer-checked:peer-hover:opacity-75 peer-hover:opacity-40 peer-checked:text-easy peer-checked:opacity-100">
                      <i className="fa-solid fa-circle-check" />
                    </label>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[4rem]">
          <Leaderboard />
        </div>
      </div>
      <div className="invisible text-easy text-medium text-hard"></div>
    </div>
  );
}
