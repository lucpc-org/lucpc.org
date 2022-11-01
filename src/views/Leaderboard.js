import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/auth/AuthProvider";

import firebaseConfig from "../config";
import { 
  getDatabase,
  ref,
  set,
  push,
  get 
} from "firebase/database";

export default function Leaderboard() {

  const { currentUser } = useContext(AuthContext);
  const db = getDatabase(firebaseConfig);

  const [boardStats, setBoardStats] = useState([]);

  useEffect(() => {

    const usersRef = ref(db, '/users');

    get(usersRef).then((snapshot) => {

      setBoardStats(
        Object.entries(snapshot.val()).map(([uid, userObject]) => {

          let numEasy = 0;
          let numMedium = 0;
          let numHard = 0;

          if ('problems' in userObject) {

            if ('easy' in userObject.problems) {
              numEasy = Object.keys(userObject.problems.easy).length;
            }

            if ('medium' in userObject.problems) {
              numMedium = Object.keys(userObject.problems.medium).length;
            }

            if ('hard' in userObject.problems) {
              numHard = Object.keys(userObject.problems.hard).length;
            }
          }

          let points = numEasy + numMedium + numHard;

          return {
            name: userObject.name,
            username: userObject.leetname,
            imageURL: userObject.imageURL,
            points: points,
            onLeaderboard: userObject.onLeaderboard
          };
        }).filter(user => user.onLeaderboard)
      );
    }).catch((e) => {
      console.error('Error getting user information.')
      console.error(e);
    });
  },[]);

  return (
    <div className="sm:px-16 py-32 min-h-full h-fit w-full flex flex-col items-center text-xs md:text-sm lg:text-base">
        <div className="px-4 md:px-8 py-2 flex flex-row justify-between content-center font-bold text-neutral-500 w-full lg:w-3/4 xl:w-1/2">
          <h1>#</h1>
          <div className="w-12 ml-4"></div>
          <h1 className="px-4 w-1/3">Name</h1>
          <h1 className="shrink flex-grow ">Username</h1>
          <h1>Points</h1>
        </div>
        {
          boardStats.sort((item1, item2) => {return item2.points - item1.points}).map((item, i, array) => {

            let pos = array.filter(fItem => fItem.points > item.points).length + 1;

            let rankColors = {
              1: "text-yellow-400",
              2: "text-slate-400",
              3: "text-yellow-800"
            };

            return (
              <div key={item.username + '-' + i} className="w-full lg:w-3/4 xl:w-1/2">
                <div className={((i % 2 === 0) ? "bg-shadow" : "") + " rounded-2xl py-2 px-4 md:px-8  h-full"}>
                  <div className="flex flex-row justify-between items-center font-bold w-full">
                    <h1 className={rankColors[pos]}>{pos}</h1>
                    <img className="ml-4 rounded-full w-12" src={item.imageURL} alt="Profile"/>
                    <h1 className="px-4 w-1/3">{item.name}</h1>
                    <h1 className="shrink flex-grow">{item.username}</h1>
                    <h1>{item.points}</h1>
                  </div>
                </div>
              </div> 
            );
          })}
    </div>
  );
}