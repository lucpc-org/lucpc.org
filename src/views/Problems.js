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

function MondayDate() {

  const today = new Date();
  const first = today.getDate() - today.getDay() + 1;

  const monday = new Date(today.setDate(first));
  return (monday.getFullYear() + '-' + (monday.getMonth() + 1) + '-' + monday.getDate())
}

export default function Problems() {

  const { currentUser } = useContext(AuthContext);
  const db = getDatabase(firebaseConfig);

  const [solvedStates, setSolvedStates] = useState([]);

  const completeProblem = (e) => {

    const mondayDate = MondayDate();
    const today = new Date();
    const userRef = ref(db, 'users/' + currentUser.uid);

    let newSolvedStates = solvedStates;
    newSolvedStates[e.target.id] = !e.target.checked;
    setSolvedStates(newSolvedStates);

    Promise.all([
      get(userRef)
    ]).then((snapshots) => {

      

      if (snapshots[0].exists()) {

        let userData = snapshots[0].val();

        if (e.target.checked) {

          if ('problems' in userData) {

            if (e.target.id in userData.problems) {
              userData.problems[e.target.id][mondayDate] = today.toISOString();
            } else {
              userData.problems[e.target.id] = {};
              userData.problems[e.target.id][mondayDate] = today.toISOString()
            }
  
          } else {
  
            userData.problems = {};
            userData.problems[e.target.id] = {};
            userData.problems[e.target.id][mondayDate] = today.toISOString();
          }

        } else {

          if ('problems' in userData) {

            if (e.target.id in userData.problems) {
              userData.problems[e.target.id][mondayDate] = null;
            } 
          } 

        }


        set(userRef, userData);
        
      } else {

        let problems = {};

        problems[e.target.id] = {};
        problems[e.target.id][mondayDate] =  [(e.target.checked) ? today.toISOString() : null]

        let userData = {
          name: currentUser.providerData[0].displayName,
          imageURL: currentUser.providerData[0].photoURL,
          leetname: '',
          problems: problems
        };

        set(userRef, userData);

      }
      
    });
    
  };

  const [problems, setProblems] = useState([]);

  useEffect(() => {

    const mondayDate = MondayDate();
    const problemsRef = ref(db, 'problems/' + mondayDate);

    get(problemsRef).then((snapshot) => {

      let rawProblems = snapshot.val();

      let easy = rawProblems.easy;
      easy.difficulty = 'easy';

      let medium = rawProblems.medium;
      medium.difficulty = 'medium';

      let hard = rawProblems.hard;
      hard.difficulty = 'hard';

      setProblems([easy, medium, hard]);
    });

    const userRef = ref(db, 'users/' + currentUser.uid);

    get(userRef).then((snapshot) => {
      setSolvedStates({
        easy: snapshot.hasChild('problems/easy/' + mondayDate),
        medium: snapshot.hasChild('problems/medium/' + mondayDate),
        hard: snapshot.hasChild('problems/hard/' + mondayDate)
      });
    });

  },[]);
  
  return (
    <div className="select-none md:px-16 min-h-full h-fit flex flex-col justify-center lg:min-h-[600px] lg:h-full w-full">
        <div className="flex flex-col w-full justify-around items-center mt-8 mb-48 lg:mb-0 lg:m-0">
          {problems.map((item, i) => 
              <div key={item.difficulty} className="w-full md:w-fit lg:m-0">
                <div className="flex flex-row items-center bg-shadow rounded-2xl p-4 xl:p-8 m-4 xl:mx-16 h-fit">
                    <div>
                      <div className="w-fit h-fit"><h1 className= {"bg-" + item.difficulty + " hidden sm:flex h-fit w-fit flex-row justify-center font-bold text-base md:text-lg xl:text-2xl rounded-lg p-2 sm:px-4 mx-auto"}>{item.difficulty}</h1></div>
                      <div className={"bg-" + item.difficulty + " flex sm:hidden h-10 rounded-lg p-2 sm:px-4 mx-auto"}></div>
                    </div>
                    <h1 className="font-bold text-sm lg:text-lg xl:text-xl mr-auto w-fit px-4 sm:px-8">{item.name}</h1>
                    <a target="_blank" rel="noreferrer" href={item.url}><div className="mx-auto bg-neutral-200 hover:bg-neutral-500 text-center text-shadow font-bold w-fit p-2 rounded-lg">
                      <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                    </div></a>
                    {
                      (!(currentUser === null || currentUser === undefined) && 
                      <>
                        <input onChange={completeProblem} type="checkbox" id={item.difficulty} value="" defaultChecked={solvedStates[item.difficulty]} className="hidden peer" />
                        <label htmlFor={item.difficulty} className="text-neutral-500 hover:text-neutral-800 peer-checked:text-easy cursor-pointer">
                          <svg className="h-8 lg:h-10 p-1 pl-3" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg>
                        </label>
                      </>)
                    }
                   
                </div>
              </div>
            )}
        </div>
        <div className="invisible bg-easy bg-medium bg-hard"></div>
    </div>
      
  );
}