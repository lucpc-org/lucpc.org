"use client";

import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../component/AuthProvider";
import { ref, set, get } from "firebase/database";
import { db } from "../../service/FirebaseService";
import { Icon } from "@iconify/react";


export default function ProgrammingCompetition() {
  const { currentUser, loading } = useContext(AuthContext);

  const [usersWhoCheckedOut, setUsersWhoCheckedOut] = useState([]);
  const [userCheckedOut, setUserCheckedOut] = useState(false);

  useEffect(() => {
    const usersRef = ref(db, "users/");

    get(usersRef).then((snapshot) => {
      let users = snapshot.val();
      let usersWhoCheckedOut_local = [];
      // loop through user map
      for (const [uid, user] of Object.entries(users)) {
        if (currentUser) {
          if (uid === currentUser.uid) {
            setUserCheckedOut(user.checked_out_book);
          }
        }
        if (user.checked_out_book) {
          usersWhoCheckedOut_local.push(user);
        }
      }
      setUsersWhoCheckedOut(usersWhoCheckedOut_local);
    });
  }, [userCheckedOut]);

  const handle_checkout = () => {
    if (currentUser === null || currentUser === undefined) {
      return;
    }
    const userRef = ref(db, "users/" + currentUser.uid);
    get(userRef).then((snapshot) => {
      let user = snapshot.val();
      if (user.checked_out_book) {
        return;
      }
      user.checked_out_book = true;
      set(userRef, user);
      //reload page
      setUserCheckedOut(true);
    });
  }

  const handle_return = () => {
    if (currentUser === null || currentUser === undefined) {
      return;
    }
    const userRef = ref(db, "users/" + currentUser.uid);
    get(userRef).then((snapshot) => {
      let user = snapshot.val();
      if (!user.checked_out_book) {
        return;
      }
      user.checked_out_book = false;
      set(userRef, user);
      if (!userCheckedOut) {
        window.location.reload();
      }
      setUserCheckedOut(false);
    });
  }

  return (
    <div className="flex flex-col w-full  font-sans pb-[4rem] bg-background">
      <div className="pb-4">
        <h1>Checkout </h1>
        <p className="pt-2 md:text-xl text-foreground/80">We keep track of who has checked out a book</p>
      </div>
      {!(currentUser === null || currentUser === undefined) && (
        <div className="flex gap-6">
          <button onClick={handle_checkout} className="btn-green btn btn-lg !text-xl !font-semibold">
            <Icon icon="material-symbols:shopping-cart-checkout" className="pr-1" fontSize={30} />
            Checkout
          </button>
          <button onClick={handle_return} className="btn-dark-blue btn btn-lg !text-xl !font-semibold">
            Return
            <Icon icon="material-symbols:keyboard-return-rounded" className=" " fontSize={30} />
          </button>
        </div>
        )}
      <div className="mt-8">
        <h2>Users with books checked out:</h2>
        <div className="flex flex-wrap w-full gap-8 mt-4">
          {usersWhoCheckedOut.map((user, index) => {
            return (
              <div key={index} className="flex items-center gap-3 text-xl">
                <img src={user.imageURL} alt="User's profile picture" className="w-16 h-16 rounded-full" />
                <p>{user.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div> 
  );
}