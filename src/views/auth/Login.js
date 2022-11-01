import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import { AuthContext } from "../../components/auth/AuthProvider";
import firebaseConfig from "../../config";
import firebase from "firebase/compat/app";



export const auth = firebaseConfig.auth();
const Login = () => {

  const handleGoogleLogin = () => {
    try {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(googleProvider);
  
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/" />;
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

export default Login;