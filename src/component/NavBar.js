"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { AuthContext } from "./auth/AuthProvider";
import GlowButton from "./GlowButton";
import { auth } from "../service/FirebaseService";
import RedLink from "./RedLink";

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
      name: "Competition",
      path: "/problems",
    },
  ];
  return (
    <div className="w-full flex justify-center font-mono sm:text-base md:text-lg">
      <div className="w-[95%] md:w-[90%] h-[70px] mt-2 flex flex-col md:flex-row justify-center md:justify-between lg:items-end sm:items-center">
        <Link href="/">
          <div className="flex justify-center items-center space-x-3 font-bold text-2xl md:text-3xl border-b-2 border-dotted border-background hover:border-gray-400 hover:text-gray-400 transition-all duration-150">
            <i className="fa-solid fa-code"></i>
            <p>CPC</p>
          </div>
        </Link>

        <div className="flex flex-row items-center justify-center text-sm md:text-base lg:text-lg space-x-5 lg:space-x-7">
          {navLinks.map(({ name, path }) => (
            <Link href={path} key={name}>
              <div className="text-text_color underline decoration-dotted decoration-background hover:decoration-gray-400 hover:text-gray-400 transition-all duration-150">
                {name}
              </div>
            </Link>
          ))}
          {currentUser ? (
            <RedLink to="/profile" label="Profile" extraStyles="decoration-2"/>
          ) : (
            <GlowButton
              to="/profile"
              boxClassnames="bg-accent hover:shadow-accent_hover hover:border-white"
              iconClassNames="fa-solid fa-user"
              label="Log in"
            />
          )}
        </div>
      </div>
    </div>
  );
}
