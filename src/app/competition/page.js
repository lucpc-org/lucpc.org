"use client";

import React, { useContext, useState, useEffect } from "react";
import { ref, set, get } from "firebase/database";
import { auth, db } from "../../service/FirebaseService";

import Leaderboard from "../../component/Leaderboard";

export default function Problems() {
  const [currentUser, setCurrentUser] = useState(null);
  const [solvedStates, setSolvedStates] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
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

  function getDifficulty(e) {
    return dbProblems.find(item => item.diffName === e.target.id).difficulty; 
  }


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

            const difficulty = getDifficulty(e);
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
            const difficulty = getDifficulty(e);
            userData.totalScore = difficulty;
            userData.weeklyScore = difficulty;
          }
        } else {
          // Case where the problem is unchecked
          // These cases do not require any action if the data does not exist
          if ("problems" in userData) {
            userData.problems[e.target.id].state = false;
            userData.problems[e.target.id].time = null;

            // Remove the problem value from their score
            const difficulty = getDifficulty(e);
            userData.weeklyScore -= difficulty;
            userData.totalScore -= difficulty;
          }
        }

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
    <div className="flex flex-col w-full items-center font-sans pb-[4rem] bg-background">
      <div className="flex flex-col w-[95%] lg:w-[85%] xl:w-[80%]">
        <div className="pb-10">
          <h1 className="pb-1">Competition</h1>
          <p className="text-lg text-text_hover2">Weekly Problems are posted here. Check off each problem you solve</p>
        </div>
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

              <div className="flex items-center space-x-5 text-4xl">
                {!(currentUser === null || currentUser === undefined) && (
                  <label className="swap">
                    <input
                      onClick={completeProblem}
                      type="checkbox"
                      id={item.diffName}
                      defaultChecked={solvedStates[item.diffName]}
                    />
                    <i className="swap-on text-easy fa-solid fa-circle-check" />
                    <i className="swap-off text-text_hover2 fa-regular fa-circle-check" />
                  </label>
                )}
                <button className="btn btn-accent btn-square">
                  <i class="fa-lg fa-solid fa-arrow-up-right-from-square" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[4rem]">
          {!(currentUser === null || currentUser === undefined) ?
            <Leaderboard solvedStates={solvedStates} uid={currentUser.uid}/>
            :
            <Leaderboard/>
          }
        </div>
      </div>
      <div className="invisible text-easy text-medium text-hard"></div>
    </div>
  );
}
