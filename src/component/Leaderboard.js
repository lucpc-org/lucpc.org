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
      <div className="flex justify-center relative w-full rounded-xl">
        <table className="w-3/4 text-sm text-left rounded-xl">
          <thead className="text-xl text-text_hover">
            <tr>
              <th scope="col" className="px-6 py-3">
                  #
              </th>
              <th scope="col" className="px-6 py-3">
                  User
              </th>
              <th scope="col" className="text-center px-6 py-3">
                  Total Score
              </th>
              <th scope="col" className="text-center px-6 py-3">
                  Weekly Score
              </th>
            </tr>
          </thead>
          <tbody className="rounded-xl overflow-hidden">
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
                  <tr key={item.username + "-" + i} className="bg-background2 rounded-xl">
                    <th scope="row" className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      { pos < 4 ?
                        <h2 className={rankColors[pos]}>{pos}</h2>
                        :
                        <h3 className={rankColors[pos]}>{pos}</h3>
                      }
                    </th>
                    <td className="flex items-center px-6 py-4">
                      {pos === 1 ?
                        (
                          <div className="relative inline-block">
                            <img src={item.imageURL} alt="Profile" className="w-[50px] h-[50px] rounded-full" referrerPolicy="no-referrer"/>
                            <i className="fa-solid fa-crown text-2xl text-yellow-400 absolute top-1 left-0 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></i>
                          </div>
                        )
                        :
                          <img src={item.imageURL} alt="Profile" className="w-[50px] h-[50px] rounded-full" referrerPolicy="no-referrer"/>
                      }
                      <div className="flex flex-col ml-4 ">
                        <h3>{item.name}</h3>
                        {item.kattisLink &&
                          <RedLink to={item.kattisLink} label="Kattis Profile" extraStyles="font-normal text-blue underline-offset-2" />
                        }
                      </div>
                    </td>
                    <td className="text-center px-6 py-4">
                      <h3>{item.totalScore}</h3>
                    </td>
                    <td className="text-center px-6 py-4">
                      <h3>{item.weeklyScore}</h3>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">
                White
              </td>
              <td class="px-6 py-4">
                Laptop PC
              </td>
              <td class="px-6 py-4">
                $1999
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">
                Black
              </td>
              <td class="px-6 py-4">
                Accessories
              </td>
              <td class="px-6 py-4">
                $99
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>

    </div>
  );
}
