import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";

export default function NavBar(props) {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-full fixed backdrop-blur text-sm sm:text-base md:text-lg">

      <div className="flex flex-row justify-between items-center font-bold px-2 md:px-4">
        <Link to="/">
          <h1 className=" text-lg sm:text-xl md:text-2xl px-2 sm:px-4 py-6 md:py-8">LUCPC</h1>
        </Link>

        <div className="flex">
          <Link to="/about/"><div className="mx-2 rounded-md bg-background_lighter md:px-3 my-6 md:py-1.5 hover:bg-background_lightest transition-all duration-200">About</div></Link>
          <Link to="/leaderboard/"><div className="mx-2 rounded-md bg-background_lighter md:px-3 my-6 md:py-1.5 hover:bg-background_lightest transition-all duration-200">Leaderboard</div></Link>
          <Link to="/problems/"><div className="mx-2 rounded-md bg-background_lighter md:px-3 my-6 md:py-1.5 hover:bg-background_lightest transition-all duration-200">Problems</div></Link>
          {
            (!(currentUser === null || currentUser === undefined) && 
            <Link className="my-auto" to="/profile/"><img className="rounded-full h-12 lg:h-16 hover:ring-2 hover:ring-neutral-200" src={currentUser.providerData[0].photoURL} alt="Profile"/></Link>)
          }
        </div>
      </div>
    </div>
  );
}