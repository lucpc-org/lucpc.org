"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "../service/FirebaseService";

export default function Footer(props) {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="w-full absolute bottom-0 left-0 flex flex-row justify-center items-center bg-background_lighter text-xs md:text-sm">
      <Link href="/contact/">
        <button className="px-2 py-4 sm:p-4 font-bold hover:text-neutral-500">
          Contact Us
        </button>
      </Link>
      <a href="https://www.liberty.edu/">
        <div className="p-2 sm:p-4 font-bold hover:text-neutral-500">
          Liberty University
        </div>
      </a>
      {currentUser === null || currentUser === undefined ? (
        <>
          <Link href="/auth/login">
            <button className="p-2 sm:p-4 font-bold hover:text-neutral-500">
              Login
            </button>
          </Link>
        </>
      ) : (
        <button
          type="button"
          className="p-2 sm:p-4 font-bold hover:text-neutral-500"
          onClick={() => auth.signOut()}
        >
          <Link href="/">Sign Out</Link>
        </button>
      )}
      {!(currentUser === null || currentUser === undefined) &&
        !currentUser.emailVerified && (
          <button
            type="button"
            className="p-2 sm:p-4 font-bold hover:text-neutral-500"
            onClick={() => currentUser.sendEmailVerification()}
          >
            <Link href="/">Verify Email</Link>
          </button>
        )}
    </div>
  );
}
