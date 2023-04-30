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
      name: "Leaderboard",
      path: "/leaderboard",
    },
    {
      name: "Problem",
      path: "/problems",
    },
  ];

  return (
    <div className="w-full fixed backdrop-blur text-sm sm:text-base md:text-lg ">
      <div className="h-20 flex flex-row justify-between items-center font-bold px-2 md:px-4">
        <Link to="/">
          <h1 className=" text-lg sm:text-xl md:text-2xl px-2 sm:px-4">
            LUCPC
          </h1>
        </Link>

        <div className="flex">
          {navLinks.map(({ name, path }) => (
            <Link to={path}>
              <div className="py-2.5 px-3.5 md:px-4  mx-2 rounded-md bg-background_light1 hover:bg-background_lighter transition-all duration-200">
                {name}
              </div>
            </Link>
          ))}
          {!(currentUser === null || currentUser === undefined) && (
            <Link className="my-auto" to="/profile/">
              <img
                className="rounded-full h-12 lg:h-16 hover:ring-2 hover:ring-neutral-200"
                src={currentUser.providerData[0].photoURL}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
