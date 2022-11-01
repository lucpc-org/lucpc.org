import React, { useEffect, useState } from "react";
import firebaseConfig from "../../config.js"
import { useNavigate } from "react-router-dom"

import { 
  getDatabase,
  ref,
  set,
  push,
  get 
} from "firebase/database";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);

      if (!(currentUser === null || currentUser === undefined)) {
        const db = getDatabase(firebaseConfig);
        const userRef = ref(db, 'users/' + currentUser.uid);
  
        get(userRef).then((snapshot) => {
  
          
          let userData;
          
          if (snapshot.exists()) {
            userData = snapshot.val();
  
            userData.imageURL = currentUser.providerData[0].photoURL;
  
          } else {
      
            userData = {
              name: currentUser.providerData[0].displayName,
              imageURL: currentUser.providerData[0].photoURL,
              leetname: ''
            };
          }
          
          set(userRef, userData);
        }); 
      }
    });
  }, [currentUser, history]);

  if (loading) {
    return <p>Loading...</p>
  }

  const value = { currentUser };

  return (
    <AuthContext.Provider value={ value }>
      { !loading && children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;