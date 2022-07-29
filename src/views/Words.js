import React from "react";
import { Link } from "react-router-dom";

import AuthProvider from "../components/auth/AuthProvider";
import NavBar from "../components/NavBar";

function Words() {
  
  return (
    <div className="h-full w-full">
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </div>
  );
}

export default Words;
