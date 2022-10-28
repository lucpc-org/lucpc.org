import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";
import firebaseConfig from "../config.js";


export default function Footer(props) {

  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-full py-4 mt-auto flex flex-row justify-center items-center text-shadow bg-white">
      {[
        {url: "jthoffman@liberty.edu", title: "Contact Us"},
        {url: "https://www.liberty.edu/", title: "Liberty University"},
      ].map((link) => {return <a href={link.url}><div className="px-4 text-sm font-bold hover:text-shadowhover">{link.title}</div></a>})}
      {
        (currentUser === null || currentUser === undefined) ?
        <>
          <Link to="/words/auth/login">
          <button className="px-4 text-sm font-bold hover:text-shadowhover">Login</button>
          </Link>
          <Link to="/words/auth/register">
          <button className="px-4 text-sm font-bold hover:text-shadowhover">Register</button>
          </Link>
        </> :
        <div className="flex">
          <button type="button" onClick={ () => firebaseConfig.auth().signOut()}>
          <Link to="/words/">Sign Out</Link>
          </button>
        </div>
      }
    </div>
  );

}

