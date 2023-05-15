"use client";

import React, { useState, useEffect } from "react";

import { db } from "../service/FirebaseService";
import { ref, get } from "firebase/database";

import RedLink from "./RedLink";

export default function Leaderboard() {
  const [boardStats, setBoardStats] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "/users");
    get(usersRef)
      .then((snapshot) => {
        setBoardStats(
          Object.entries(snapshot.val())
            .map(([uid, userObject]) => {
              let weeklyScore = 0;
              let totalScore = 0;

              if ("totalScore" in userObject) {
                totalScore = userObject.totalScore;
                // We can assume if they have a total score then the weekly score is also available
                weeklyScore = userObject.weeklyScore;
              }

              let submissionTimes = []
              if ("problems" in userObject) {
                
                if ("easy" in userObject.problems) {
                  submissionTimes.push(userObject.problems.easy.time);
                }
                if ("medium" in userObject.problems) {
                  submissionTimes.push(userObject.problems.medium.time);
                }
                if ("hard" in userObject.problems) {
                  submissionTimes.push(userObject.problems.hard.time);
                }
              } 

              return {
                name: userObject.name,
                kattisLink: userObject.kattisURL,
                imageURL: userObject.imageURL,
                totalScore: totalScore,
                weeklyScore: weeklyScore,
                lastSubmitted: submissionTimes,
              };
            })
            .filter((user) => user.totalScore > 0)
        );
      })
      .catch((e) => {
        console.error("Error getting user information.");
        console.error(e);
      });
  }, []);

  return (
    <div className="flex flex-col w-full items-center text-xs md:text-sm lg:text-base">
      <h2 className="pb-5">
        Leaderboard
      </h2>
      <div className="flex flex-col w-3/4">
        <div className="flex flex-row text-xl px-4 md:px-8 py-2 font-bold text-text_hover">
          <p>#</p>
          <p className="ml-12 flex-grow">User</p>
          <div className="flex justify-between flex-grow">
            <p className="">Total Points</p>
            <p className="">Weekly Points</p>
          </div>
        </div>
        <div className="flex flex-col border border-background4 rounded-xl">
          {boardStats
            .sort((item1, item2) => {
              item1.lastSubmitted.sort();
              let minDate1 = item1.lastSubmitted[0];
              item2.lastSubmitted.sort();
              let minDate2 = item2.lastSubmitted[0];
              const scoreDiff = item2.totalScore - item1.totalScore;
              if (scoreDiff === 0) {
                return minDate1 < minDate2 ? -1 : 1;
              } else {
                return scoreDiff;
              }
            })
            .map((item, i) => {
              let pos = i + 1;
              let rankColors = {
                1: "text-yellow-400",
                2: "text-slate-400",
                3: "text-yellow-800",
              };
              return (
                <div key={item.username + "-" + i} className={`flex justify-between items-center px-4 md:px-8 py-3 ${i % 2 ? `bg-background3` : `bg-background2`} ${i === 0 ? `rounded-t-xl` : (i === boardStats.length-1 ? `rounded-b-xl` : ``)}`}>
                  { pos < 4 ?
                      <h2 className={rankColors[pos]}>{pos}</h2>
                      :
                      <h3 className={rankColors[pos]}>{pos}</h3>
                  }
                  <div className="flex flex-row flex-grow items-center ml-12">
                    {pos === 1 ? 
                      (
                        <div class="relative inline-block">
                          <img src={item.imageURL} alt="Profile" className="w-[50px] h-[50px] rounded-full" />
                          <i class="fa-solid fa-crown text-2xl text-yellow-400 absolute top-1 left-0 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></i>
                        </div>
                      )
                      :
                        <img src={item.imageURL} alt="Profile" className="w-[50px] h-[50px] rounded-full" />
                    }
                    <div className="flex flex-col ml-4">
                      <h3>{item.name}</h3>
                      {item.kattisLink &&
                        <RedLink to={item.kattisLink} label="Kattis Profile" extraStyles="font-normal text-blue underline-offset-2" />
                      }
                    </div>
                  </div>
                  <div className="">
                    <h3>{item.totalScore}</h3>
                  </div>

                  <div className="">
                    <h3>{item.weeklyScore}</h3>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
