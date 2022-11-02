import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/auth/AuthProvider";

import firebaseConfig from "../config";
import { 
  getDatabase,
  ref,
  set,
  get 
} from "firebase/database";

export default function Profile() {

  const { currentUser } = useContext(AuthContext);

  if (currentUser === null || currentUser === undefined) {
    window.location.replace("/auth/login");
  }

  const [name, setName] = useState('');
  const [leetname, setLeetname] = useState('');
  const [onLeaderboard, setOnLeaderboard] = useState(false);

  const db = getDatabase(firebaseConfig);

  const userRef = ref(db, 'users/' + currentUser.uid);

  useEffect(() => {
    get(userRef).then((snapshot) => {

      let userData;
      
      if (snapshot.exists()) {
        userData = snapshot.val();
      } else {
  
        userData = {
          name: currentUser.providerData[0].displayName,
          imageURL: currentUser.providerData[0].photoURL,
          leetname: '',
          onLeaderboard: false
        };
  
        set(userRef, userData);
      }
  
      setName(userData.name);
      setLeetname(userData.leetname);
      setOnLeaderboard(userData.onLeaderboard);
  
    }).catch(() => {
      console.error('Error getting user information.')
    });
  
  },[]);
  
  const handleSubmit = (e) => {

    console.log(onLeaderboard);

    e.preventDefault();

    if (name.length >= 20 || leetname >= 20) {

      document.getElementById('alert').style.color='#FF375F';
      document.getElementById('alert').innerHTML='Name must be less than 20 characters';
      document.getElementById('alert').style.visibility='visible';
      setTimeout(() => {
        document.getElementById('alert').style.visibility='hidden';
      }, 3000);

    } else {

      get(userRef).then((snapshot) => {

        let userData;
        
        if (snapshot.exists()) {
  
          userData = snapshot.val();
          userData.name = name;
          userData.leetname = leetname;
          userData.onLeaderboard = onLeaderboard;
  
        } else {
    
          userData = {
            name: name,
            imageURL: currentUser.providerData[0].photoURL,
            leetname: leetname,
            onLeaderboard: onLeaderboard
          };
        }
  
        set(userRef, userData);

        document.getElementById('alert').style.color='#43a047';
        document.getElementById('alert').innerHTML='Profile Saved';
        document.getElementById('alert').style.visibility='visible';
        setTimeout(() => {
          document.getElementById('alert').style.visibility='hidden';
        }, 3000);
      });
    }

    
    
  };

  return (
    <div className="min-h-full h-fit sm:px-16 flex flex-col justify-center items-center lg:min-h-[600px] lg:h-full w-full text-neutral-200 ">
      { 
        (!(currentUser === null || currentUser === undefined) &&
        <div className="w-full md:w-96">
          <form onSubmit={ handleSubmit }>
            <div className="flex flex-row items-center ml-2 md:mx-4 m-4">
              <label htmlFor="name" className="basis-1/3 text-right font-bold text-sm md:text-base">
                Name 
              </label>
              <input type="text" placeholder="Name" 
                className="placeholder:text-neutral-500 text-center grow ml-4 md:ml-8 h-8 rounded-lg bg-shadow"
                onChange={e => setName(e.target.value)}
                value={name}/>
            </div>
            <div className="flex flex-row items-center ml-2 md:mx-4 m-4">
              <label htmlFor="leetname" className="basis-1/3 text-right font-bold text-sm md:text-base">
                LeetCode Username
              </label>
              <input type="text" placeholder="LeetCode Username" name="leetname"
                className="placeholder:text-neutral-500 text-center grow ml-4 md:ml-8 h-8 rounded-lg bg-shadow"
                onChange={e => setLeetname(e.target.value)}
                value={leetname}/>
            </div>
            <div className="flex flex-row items-center justify-center select-none">
              <span class="font-bold m-4 text-sm md:text-base">Appear on Leaderboard</span>
              <label for="onLeaderboard" class="inline-flex relative items-center cursor-pointer">
                <input onClick={e => setOnLeaderboard(e.target.checked)} checked={onLeaderboard} type="checkbox" value="" id="onLeaderboard" name="onLeaderboard" class="sr-only peer"/>
                <div class="w-11 h-6 bg-shadow peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-neutral-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="mt-32 mx-auto bg-neutral-200 hover:bg-neutral-500 text-center text-shadow font-bold w-fit p-2 rounded-lg">
              <button type="submit">
                Update
              </button>
            </div>
          </form>
          
        </div>)
      }   
      <div id="alert" className="relative mt-4 text-easy font-bold text-lg bg-shadowhover p-2 rounded-xl invisible">Profile Saved</div>
    </div>
       
  );
  }