"use client";

import React, { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../../components/auth/AuthProvider";

import { db } from "../../service/FirebaseService";
import { getDatabase, ref, set, get } from "firebase/database";
import { auth } from "../../service/FirebaseService";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        router.push("/");
      }
    });
    return unsubscribe;
  }, []);

  // if (currentUser === null || currentUser === undefined) {
  //   window.location.replace("/auth/login");
  // }

  const [profileURL, setProfileURL] = useState("https://placehold.co/300");
  const [kattisURL, setKattisURL] = useState("");
  const [name, setName] = useState("");

  const userRef = ref(db, "users/" + currentUser?.uid);

  useEffect(() => {
    if (currentUser === null || currentUser === undefined) {
      return;
    }

    get(userRef)
      .then((snapshot) => {
        let userData;

        // If the user exists then use the data from the database
        if (snapshot.exists()) {
          userData = snapshot.val();
        } else {
          // Otherwise make data for them and set it in the database
          userData = {
            name: currentUser.providerData[0].displayName,
            // We remove the last 6 characters so that the photo is full resolution
            imageURL: currentUser.providerData[0].photoURL.slice(0, -6),
            kattisURL: "",
          };

          // Update the database
          set(userRef, userData);
        }

        setName(userData.name);
        setProfileURL(userData.imageURL);
        setKattisURL(userData.kattisURL);
      })
      .catch((e) => {
        console.error("Error getting user information.", e);
      });

      // Don't add `userRef` here. For some reason it messes up the text box
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length >= 28) {
      document.getElementById("alert").style.background = "#FF375F";
      document.getElementById("alert").innerHTML =
        `<i class="mr-2 fa-solid fa-triangle-exclamation"></i>Name must be less than 28 characters`;
      document.getElementById("alert").style.visibility = "visible";
      setTimeout(() => {
        document.getElementById("alert").style.visibility = "hidden";
      }, 3000);
    } else {
      get(userRef).then((snapshot) => {
        let userData;

        if (snapshot.exists()) {
          userData = snapshot.val();
          userData.name = name;
          // We remove the last 6 characters so that the photo is full resolution
          userData.imageURL = currentUser.providerData[0].photoURL.slice(0, -6);
          userData.kattisURL = kattisURL;
        } else {
          userData = {
            name: name,
            imageURL: currentUser.providerData[0].photoURL.slice(0, -6),
            kattisURL: kattisURL,
          };
        }

        set(userRef, userData);

        document.getElementById("alert").style.background = "#43a047";
        document.getElementById("alert").innerHTML = `<i class="mr-2 fa-solid fa-check"></i>Profile Saved`;
        document.getElementById("alert").style.visibility = "visible";
        setTimeout(() => {
          document.getElementById("alert").style.visibility = "hidden";
        }, 3000);
      });
    }
  };

  const signOut = () => {
    auth.signOut();
    window.location.reload(false);
  };

  return (
    <div className="flex flex-col w-full items-center font-sans pb-[4rem] bg-background">
      <div className="flex flex-col w-[95%] lg:w-[90%] xl:w-[80%]">
        {!(currentUser === null || currentUser === undefined) && (
          <div className="flex flex-col items-center md:items-start md:flex-row w-full">

            <img src={profileURL} alt="Placeholder User" className="rounded-full w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]" referrerPolicy="no-referrer"/>

            <form onSubmit={handleSubmit} className="md:ml-8 lg:ml-12 mt-6 lg:mt-12 w-full">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12"> 
                <div className="flex flex-col grow">
                  <label htmlFor="name" className="font-bold text-xl md:text-2xl lg:text-4xl mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="placeholder:text-text_hover2 text-text_color h-12 ext-base lg:text-lg p-3 rounded-lg border border-background4 bg-background3"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div className="flex flex-col grow">
                  <label htmlFor="kattis" className="font-bold text-xl md:text-2xl lg:text-4xl mb-2">
                    Kattis Profile
                  </label>
                  <input
                  type="text"
                    placeholder="https://open.kattis.com/users/john-doe"
                    className="placeholder:text-text_hover2 text-text_color h-12 text-base lg:text-lg p-3 grow rounded-lg border border-background4 bg-background3"
                    onChange={(e) => setKattisURL(e.target.value)}
                    value={kattisURL}
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row text-xl mt-[4rem] space-y-8 md:space-y-0 md:space-x-12">
                <button type="submit" className="btn btn-lg btn-secondary gap-5">
                  Save Changes
                  <i className="fa-solid fa-floppy-disk"></i>
                </button>
                <button 
                  type="button" 
                  className="btn btn-lg gap-5"
                  onClick={signOut}
                >
                  Sign Out
                  <i className="fa-solid fa-right-to-bracket"></i>
                </button>
              </div>

            </form>
          </div>
        )}
        <div
          id="alert"
          className="w-fit mt-12 text-text_color font-bold text-base lg:text-lg pt-2 pb-1 px-2 rounded-lg invisible"
        >
          Profile Saved
        </div>
        
        <div className="flex flex-col justify-center items-center space-x-2 mt-12">
          <h1>Statistics</h1>
          <p className="text-xl">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
