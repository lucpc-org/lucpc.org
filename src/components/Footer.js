import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";
import firebaseConfig from "../config.js";


export default function Footer(props) {

  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-full mt-auto flex flex-col sm:flex-row justify-center items-center text-shadow bg-neutral-200 text-xs md:text-sm">
      <Link to="/contact/">
        <button className="p-2 sm:p-4 font-bold hover:text-neutral-500">Contact Us</button>
      </Link>
      <a href="https://www.liberty.edu/">
        <div className="p-2 sm:p-4 font-bold hover:text-neutral-500">Liberty University</div>
      </a>
      {
        (currentUser === null || currentUser === undefined) ?
        <>
          <Link to="/auth/login">
          <button className="p-2 sm:p-4 font-bold hover:text-neutral-500">Login</button>
          </Link>
          <Link to="/auth/register">
          <button className="p-2 sm:p-4 font-bold hover:text-neutral-500">Register</button>
          </Link>
        </> :
        <button type="button" className="p-2 sm:p-4 font-bold hover:text-neutral-500" onClick={ () => firebaseConfig.auth().signOut()}>
          <Link to="/">Sign Out</Link>
        </button>
      }
    </div>
  );

}

