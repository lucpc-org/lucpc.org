"use client";

// import React, { useContext } from "react";

// import { AuthContext } from "../../component/auth/AuthProvider";
// import firebase from "firebase/compat/app";
// import firebase from "firebase/app";
import { useRouter } from "next/navigation";
import { auth } from "../../../service/FirebaseService";
import { GoogleAuthProvider } from "firebase/auth";

import signInWithGoogle from "../signin";
import { useEffect, useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();
  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    setError(null);

    const { result, error } = await signInWithGoogle();

    setIsLoading(false);

    if (error) {
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center content-center items-center">
      <div className="w-fit flex flex-row items-center mb-4">
        <h1>Sign in with</h1>
        <button
          type="button"
          onClick={handleSignInWithGoogle}
          className="ml-2 bg-neutral-200 hover:bg-neutral-500 text-center text-shadow font-bold w-fit p-2 rounded-lg"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
