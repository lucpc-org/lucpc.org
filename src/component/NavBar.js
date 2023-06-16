"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "./AuthProvider";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);

  const currentPath = usePathname();

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
    ...(currentUser
      ? [
          {
            name: "Profile",
            path: "/profile",
          },
        ]
      : [
          {
            name: "Log In",
            path: "/auth/login",
          },
        ]),
  ];
  return (
    <div className="w-full flex justify-center pb-12 md:pb-[6rem] sm:text-base md:text-lg">
      <div className="w-[95%] md:w-[90%] md:h-[70px] mt-2 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <Link href="/" className="flex pb-2">
          <p className="flex justify-center font-bold text-2xl md:text-3xl btn btn-ghost">
            🧑‍💻 CPC
          </p>
        </Link>

        <div className="flex flex-row items-center justify-center text-sm md:text-base lg:text-lg xl:text-xl xl:space-x-10 space-x-5 lg:space-x-7">
          {navLinks.map(({ name, path }) => {
            const extraStyles =
              currentPath === path
                ? "text-green decoration-2 font-bol underline cursor-default"
                : "text-text_color underline decoration-dotted decoration-background hover:decoration-gray-400 hover:text-text_hover transition-all duration-150";
            return (
              <Link href={path} key={name}>
                <div className={`${extraStyles} `}>{name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
