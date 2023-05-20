"use client"

import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "./AuthProvider";
import RedLink from "./RedLink";

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);
  
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
      path: "/competition",
    },
  ];
  return (
    <div className="w-full flex justify-center pb-12 md:pb-[6rem] sm:text-base md:text-lg">
      <div className="w-[95%] md:w-[90%] h-[70px] mt-2 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <Link href="/">
          <p className="flex justify-center font-bold text-2xl md:text-3xl border-b-2 border-dotted border-background hover:border-text_color">🧑‍💻 CPC</p>
        </Link>

        <div className="flex flex-row items-center justify-center text-sm md:text-base lg:text-lg xl:text-xl xl:space-x-10 space-x-5 lg:space-x-7">
          {navLinks.map(({ name, path }) => (
            <Link href={path} key={name}>
              <div className="text-text_color underline decoration-dotted decoration-background hover:decoration-gray-400 hover:text-text_hover transition-all duration-150">
                {name}
              </div>
            </Link>
          ))}
          {currentUser ?
            <RedLink to="/profile" label="Profile" extraStyles="text-green decoration-2"/>
           : 
            <RedLink to="/auth/login" label="Log In" extraStyles="text-green decoration-2"/>
          }
        </div>
      </div>
    </div>
  );
}
