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
      router.push("/profile");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/profile");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="flex flex-col w-full items-center font-sans pb-[4rem]">
      <div className="flex flex-col items-center w-[95%] lg:w-[85%] xl:w-[80%]">
        <h1 className="pb-8">Sign in</h1>
        <button
          type="button"
          onClick={handleSignInWithGoogle}
          className="text-xl bg-[#4285F4] hover:bg-[#4285F4]/90 rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        >
          <i className="mr-4 mb-[.15rem] fa-brands fa-google"></i>
            Sign in with Google
        </button>

      </div>
    </div>
  );
};

export default Login;
