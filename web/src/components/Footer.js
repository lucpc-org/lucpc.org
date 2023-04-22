import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";
import firebaseConfig from "../config.js";


export default function Footer(props) {

  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-full absolute bottom-0 left-0 flex flex-row justify-center items-center bg-background_lighter text-xs md:text-sm">
      <Link to="/contact/">
        <button className="px-2 py-4 sm:p-4 font-bold hover:text-neutral-500">Contact Us</button>
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
        </> :
        <button type="button" className="p-2 sm:p-4 font-bold hover:text-neutral-500" onClick={ () => firebaseConfig.auth().signOut()}>
          <Link to="/">Sign Out</Link>
        </button>
      }
      {
        (!(currentUser === null || currentUser === undefined) && !currentUser.emailVerified && 
          <button type="button" className="p-2 sm:p-4 font-bold hover:text-neutral-500" onClick={ () => currentUser.sendEmailVerification()}>
            <Link to="/">Verify Email</Link>
          </button>
        )
      }
    </div>
  );

}

