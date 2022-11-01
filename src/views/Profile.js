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



export default function Profile() {

  const { currentUser } = useContext(AuthContext);

  if (currentUser === null || currentUser === undefined) {
    window.location.replace("/auth/login");
  }

  const [name, setName] = useState('');
  const [leetname, setLeetname] = useState('');

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
          leetname: ''
        };
  
        set(userRef, userData);
      }
  
      setName(userData.name);
      setLeetname(userData.leetname);
  
    }).catch(() => {
      console.error('Error getting user information.')
    });
  
  },[]);
  
  const handleSubmit = (e) => {

    e.preventDefault();

    let userData = {
      name: name,
      leetname: leetname
    };

    set(userRef, userData);
    
  };

  return (
    <div className="min-h-full h-fit sm:px-16 flex flex-col justify-center items-center lg:min-h-[600px] lg:h-full w-full">
      { 
        (!(currentUser === null || currentUser === undefined) &&
        <div className="w-2/3 lg:w-2/3">
          <form onSubmit={ handleSubmit }>
            <div className="flex flex-row items-center m-4">
              <label for="name" className="basis-1/3 text-right font-bold">
                Name 
              </label>
              <input type="text" placeholder="Name" 
                className="text-neutral-200 placeholder:text-neutral-500 text-center grow ml-8 h-8 rounded-lg bg-shadow"
                onChange={e => setName(e.target.value)}
                value={name}/>
            </div>
            <div className="flex flex-row items-center m-4">
              <label for="leetname" className="basis-1/3 text-right font-bold">
                LeetCode Username
              </label>
              <input type="text" placeholder="LeetCode Username" name="leetname"
                className="text-neutral-200 placeholder:text-neutral-500 text-center grow ml-8 h-8 rounded-lg bg-shadow"
                onChange={e => setLeetname(e.target.value)}
                value={leetname}/>
            </div>
            <div className=" mt-32 mx-auto bg-neutral-200 hover:bg-neutral-500 text-center text-shadow font-bold w-fit p-2 rounded-lg">
              <button type="submit">
                Update
              </button>
            </div>
          </form>
        </div>)
      }   
    </div>
       
  );
  }