"use client";

import React, { useState, useEffect } from "react";

import { db } from "../../service/FirebaseService";
import { ref, get } from "firebase/database";

function getLastSunday() {
  var date = new Date();
  date.setDate(date.getDate() - date.getDay());
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed, so add 1; pad with leading zero if needed
  const day = date.getDate().toString().padStart(2, "0"); // Pad with leading zero if needed

  return `${year}-${month}-${day}`;
}

export default function Leaderboard() {
  const [boardStats, setBoardStats] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "/users");

    get(usersRef)
      .then((snapshot) => {
        setBoardStats(
          Object.entries(snapshot.val())
            .map(([uid, userObject]) => {
              let numEasy = 0;
              let numMedium = 0;
              let numHard = 0;

              if ("problems" in userObject) {
                let predicate = (value) => {
                  return value === getLastSunday();
                };

                if ("easy" in userObject.problems) {
                  numEasy = Object.keys(userObject.problems.easy).filter(
                    predicate
                  ).length;
                }

                if ("medium" in userObject.problems) {
                  numMedium = Object.keys(userObject.problems.medium).filter(
                    predicate
                  ).length;
                }

                if ("hard" in userObject.problems) {
                  numHard = Object.keys(userObject.problems.hard).filter(
                    predicate
                  ).length;
                }
              }

              let points = numEasy + 2 * numMedium + 3 * numHard;

              let order = [];
              if ("order" in userObject) {
                order = Object.values(userObject.order).slice(-3);
              } else {
                order = ["a"]; // Always larger than the year
              }

              return {
                name: userObject.name,
                username: userObject.leetname,
                imageURL: userObject.imageURL,
                points: points,
                onLeaderboard: userObject.onLeaderboard,
                order: order,
              };
            })
            .filter((user) => user.onLeaderboard && user.points > 0)
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
