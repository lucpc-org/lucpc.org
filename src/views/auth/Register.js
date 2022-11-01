import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import firebaseConfig from "../../config";
import firebase from "firebase/compat/app";

import { AuthContext } from "../../components/auth/AuthProvider";

export const auth = firebaseConfig.auth();
export default function Register() {

  // const [currentUser, setCurrentUser] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    try {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(googleProvider);
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    return <Navigate to="/" />
  }

  return (
    <div className="w-full h-full flex flex-col justify-center content-center items-center">
      <div className="w-fit flex flex-row items-center mb-4">
        <h1>Sign in with</h1>
        <button type="button" onClick={ () => handleGoogleLogin() }
          className="ml-2 bg-neutral-200 hover:bg-neutral-500 text-center text-shadow font-bold w-fit p-2 rounded-lg">Google</button>
      </div>
    </div>
  );
}