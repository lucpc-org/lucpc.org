"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "./AuthProvider";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);

  const currentPath = usePathname();
  // if (currentPath.endsWith("/")) {
  //   currentPath = currentPath.slice(0, -1);
  // }

  const navLinks = [
    {
      name: "About",
      path: "/about/",
    },
    {
      name: "Humans",
      path: "/humans/",
    },
    {
      name: "Competition",
      path: "/competition/",
    },
    ...(currentUser
      ? [
          {
            name: "Profile",
            path: "/profile/",
          },
        ]
      : [
          {
            name: "Log In",
            path: "/auth/login/",
          },
        ]),
  ];
  return (
    <div className="w-full flex justify-between items-center pb-12 md:pb-[6rem] sm:text-base md:text-lg mt-4">
      <Link href="/">
        <h1 className="text-3xl">🧑‍💻 <span className="hidden sm:inline">CPC</span></h1>
      </Link>
      <div className="flex gap-3 sm:gap-6 text-lg">
        {navLinks.map(({ name, path }) => {
          const text_color = path === currentPath ? 'text-white' : 'text-foreground/60';
          return (
            <a href={path} key={name} className={clsx("hover:text-foreground/80 transition-colors", text_color)}>{name}</a>
          );
        })}
      </div>
    </div>
  );
}
