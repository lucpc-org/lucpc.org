import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";

export default function NavBar(props) {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-full fixed bg-background font-bold text-base md:text-lg">

      <div className="flex flex-row justify-between items-center px-2 md:px-4">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl px-4 py-6 md:py-8">LUCPC</h1>
        </Link>

        <div className="flex">
          <Link to="/about/"><div className="px-2 md:px-4 py-6 md:py-8 hover:text-neutral-500">About</div></Link>
          <Link to="/leaderboard/"><div className="px-2 md:px-4 py-6 md:py-8  hover:text-neutral-500">Leaderboard</div></Link>
          <Link to="/problems/"><div className="px-2 md:px-4 py-6 md:py-8  hover:text-neutral-500">Problems</div></Link>
          {
            (!(currentUser === null || currentUser === undefined) && 
            <Link className="my-auto" to="/profile/"><img className="rounded-full h-12 lg:h-16 hover:border" src={currentUser.providerData[0].photoURL} alt="Profile"/></Link>)
          }
        </div>
      </div>
    </div>
  );
}