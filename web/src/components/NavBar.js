import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";

export default function NavBar(props) {
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
        <Link to="/">
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl px-2 sm:px-4 text-white hover:text-gray-400 transition-all duration-200">
            LUCPC
          </h1>
        </Link>

        <div className="flex flex-row items-center space-x-7">
          {navLinks.map(({ name, path }) => (
            <Link to={path}>
              <div className="text-md text-white hover:text-gray-400 transition-all duration-150">
                {name}
              </div>
            </Link>
          ))}
          {!(currentUser === null || currentUser === undefined) && (
            <Link className="my-auto" to="/profile/">
              <div className="flex flex-row items-center bg-accent border-background border-[1px] hover:border-accent_hover shadow-none px-3 py-1 rounded-lg font-bold ease-out transition-all duration-150 hover:shadow-accent hover:shadow-lg">
                <i class="fa-solid fa-user"></i>
                <p className="mt-[.2rem] pl-3">Profile</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
