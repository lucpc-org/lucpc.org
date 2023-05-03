"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
// import { AuthContext } from "./auth/AuthProvider";
import GlowButton from "./GlowButton";
import { auth } from "../service/FirebaseService";

export default function NavBar(props) {
  // const { currentUser } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const navLinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Humans",
      path: "/humans",
    },
    {
      name: "Leaderboard",
      path: "/leaderboard",
    },
    {
      name: "Problems",
      path: "/problems",
    },
  ];

  return (
    <div className="w-full flex justify-center sm:text-base md:text-lg">
      <div className="w-10/12 h-[70px] flex flex-row justify-between items-center">
        <Link href="/">
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl px-2 sm:px-4 text-white hover:text-gray-400 transition-all duration-200">
            LUCPC
          </h1>
        </Link>

        <div className="flex flex-row items-center space-x-7">
          {navLinks.map(({ name, path }) => (
            <Link href={path} key={path}>
              <div className="text-md text-white hover:text-gray-400 transition-all duration-150">
                {name}
              </div>
            </Link>
          ))}
          {currentUser ? (
            <GlowButton
              to="/profile"
              color="accent"
              borderColor="accent_hover"
              iconClassNames="fa-solid fa-user"
              label="Profile"
            />
          ) : (
            <GlowButton
              to="/profile"
              color="red-500"
              borderColor="red-500"
              iconClassNames="fa-solid fa-user"
              label="Log in"
            />
          )}
        </div>
      </div>
    </div>
  );
}
