import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/auth/AuthProvider";

import NavBar from "../components/NavBar";

function Game() {

  const { currentUser } = useContext(AuthContext);

  const submitWord = (e) => {
    alert("Nice one! I'll consider it.");
  };

  return(
    
    <div className="h-full w-full flex justify-center items-center">
      {
        (currentUser === null || currentUser === undefined) ?
          
          <></> :
          <form onSubmit={ submitWord } autocomplete="off">
            <input className="text-center p-1 bg-neutral-900 focus:bg-neutral-900 active:bg-neutral-900 rounded border-none focus:outline-none" 
              type="text" name="word"/>
          </form>
      }
    </div>
    
  );
}

function Words() {
  
  return (
    <div className="h-full w-full">
      <NavBar />
      <Game />
    </div>
  );
}

export default Words;
