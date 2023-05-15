"use client";

import React, { useState, useEffect } from "react";

import { db } from "../../service/FirebaseService";
import { ref, get } from "firebase/database";

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

              let lastSubmitted = 0;
              if ("lastSubmitted" in userObject) {
                lastSubmitted = userObject.lastSubmitted;
              } else {
                lastSubmitted = "a"; // Always larger than the year
              }

              return {
                name: userObject.name,
                kattisLink: userObject.kattisURL,
                imageURL: userObject.imageURL,
                totalScore: totalScore,
                weeklyScore: weeklyScore,
                lastSubmitted: lastSubmitted,
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
    <div className="sm:px-16 py-32 min-h-full h-fit w-full flex flex-col items-center text-xs md:text-sm lg:text-base">
      <h1 className="mt-48 lg:mt-0 md:text-3xl text-center font-serif pb-2">
        Weekly Leaderboard
      </h1>
      <h1 className="pb-8">⚠️ Under Construction ⚠️</h1>
      <div className="px-4 md:px-8 py-2 flex flex-row justify-between content-center font-bold text-neutral-500 w-full lg:w-3/4 xl:w-1/2">
        <h1>#</h1>
        <div className="w-12 ml-4"></div>
        <h1 className="shrink flex-grow">Name</h1>
        <h1>Points</h1>
      </div>
      {boardStats
        .sort((item1, item2) => {
          item1.order.sort();
          let minDate1 = item1.order.reverse()[0];

          item2.order.sort();
          let minDate2 = item2.order.reverse()[0];

          return (
            item2.points - item1.points || minDate1.localeCompare(minDate2)
          );
        })
        .map((item, i) => {
          let pos = i + 1;
          let rankColors = {
            1: "text-yellow-400",
            2: "text-slate-400",
            3: "text-yellow-800",
          };

          return (
            <div
              key={item.username + "-" + i}
              className="w-full lg:w-3/4 xl:w-1/2"
            >
              <div
                className={
                  (i % 2 === 0 ? "bg-shadow" : "") +
                  " rounded-2xl py-2 px-4 md:px-8  h-full"
                }
              >
                <div className="flex flex-row justify-between items-center font-bold w-full ">
                  <h1 className={rankColors[pos]}>{pos}</h1>
                  <img
                    className="ml-4 rounded-full w-12"
                    src={item.imageURL}
                    alt="Profile"
                  />
                  <h1 className="flex flex-col shrink flex-grow px-4 w-1/3 text-ellipsis overflow-hidden">
                    {item.name}
                    <span className="text-sm text-gray-500 font-normal">
                      {item.username}
                    </span>
                  </h1>
                  <h1>{item.points}</h1>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
