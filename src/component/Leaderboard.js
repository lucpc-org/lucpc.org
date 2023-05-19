"use client";

import React, { useState, useEffect } from "react";

import { db } from "../service/FirebaseService";
import { ref, get } from "firebase/database";

import RedLink from "./RedLink";

export default function Leaderboard({
  userUID="",
  solvedStates=""
}) {
  const [boardStats, setBoardStats] = useState([]);
  const [sortByTotal, setSortByTotal] = useState(false);

  useEffect(() => {
    const usersRef = ref(db, "/users");
    get(usersRef)
      .then((snapshot) => {
        const data = snapshot.val();
        setBoardStats(
          Object.entries(data)
            .map(([uid, userObject]) => {
              let weeklyScore = 0;
              let totalScore = 0;

              if (userUID === uid) {
                // TODO
              }

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
            .filter((user) => sortByTotal ? (user.totalScore > 0) : (user.weeklyScore > 0))
        );
      })
      .catch((e) => {
        console.error("Error getting user information.");
        console.error(e);
      });
  }, [sortByTotal]);

  const changeSortingMethod = (e) => {
    setSortByTotal(e.target.value === "Total")
  };

  return (
    <div className="flex flex-col w-full items-center text-xs md:text-sm lg:text-base">
      <div className="text-center pb-6">
        <h2 className="pb-1">Leaderboard</h2>
        <p className="text-text_hover">Current rankings of club members (Total Score is per semester)</p>
      </div>
      <div className="form-control w-3/4 pb-4">
        <div className="input-group justify-end">
          <span>Sort By</span>
          <select 
            className="select select-bordered"
            onChange={changeSortingMethod}
          >
            <option>Weekly</option>
            <option defaultValue>Total</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center overflow-x-auto w-full">
        <table className="table w-3/4">
          <thead className="text-text_hover ">
            <tr className="">
              <th></th>
              <th className="text-lg pl-0">User</th>
              <th className="text-lg text-center">Total Score</th>
              <th className="text-lg text-center">Weekly Score</th>
            </tr>
          </thead>
          <tbody>
            {boardStats
              .sort((item1, item2) => {
                item1.lastSubmitted.sort();
                let minDate1 = item1.lastSubmitted[0];
                item2.lastSubmitted.sort();
                let minDate2 = item2.lastSubmitted[0];
                let scoreDiff = 0;
                if (sortByTotal) {
                  scoreDiff = item2.totalScore - item1.totalScore;
                } else {
                  scoreDiff = item2.weeklyScore - item1.weeklyScore;
                }
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
                  <tr key={item.username + "-" + i} >
                    <th className="pl-8 pr-0">
                      <h3 className={rankColors[pos]}>{pos}</h3>
                    </th>
                    <td className="flex items-center pl-6">
                      {pos === 1 ?
                        (
                          <div className="relative inline-block">
                            <img src={item.imageURL} alt="Profile" className="w-[55px] h-[55px] mask mask-squircle" referrerPolicy="no-referrer"/>
                            <i className="fa-solid fa-crown text-2xl text-yellow-400 absolute top-1 left-0 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></i>
                          </div>
                        )
                        :
                          <img src={item.imageURL} alt="Profile" className="w-[55px] h-[55px] mask mask-squircle" referrerPolicy="no-referrer"/>
                      }
                      <div className="flex flex-col ml-4">
                        <h3 className="text-xl">{item.name}</h3>
                        {item.kattisLink &&
                          <RedLink to={item.kattisLink} label="Kattis Profile" extraStyles="font-normal text-sm text-blue underline-offset-2" />
                        }
                      </div>
                    </td>
                    <td className="text-center">
                      <h3>{item.totalScore}</h3>
                    </td>
                    <td className="text-center">
                      <h3>{item.weeklyScore}</h3>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      

    </div>
  );
}
