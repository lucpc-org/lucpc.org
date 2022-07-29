import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import firebaseConfig from "../../config";

import { AuthContext } from "../../components/auth/AuthProvider";

export default function Register() {

  // const [currentUser, setCurrentUser] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {

    e.preventDefault();
    const { email, password } = e.target.elements
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
      // setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    console.log('test')
    return <Navigate to="/words" />
  } else {
    console.log('not test')
  }

  return (
    <>
      <button>Google</button>
      <small>Or with email</small>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="grid-password">
            Name 
          </label>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="grid-password">
            Email
          </label>
          <input type="email" placeholder="Email" name="email"/>
        </div>
        <div>
          <label htmlFor="grid-password">
            password
          </label>
          <input type="password" placeholder="Password" name="password"/>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>I agree with the{" "} 
              <a href="#temp">Privacy Policy</a>
            </span>
          </label>
        </div>
        <div>
          <button type="submit">
            Create Account
          </button>
        </div>
      </form>
    </>
  );
}