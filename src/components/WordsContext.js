import React, { useEffect, useState } from "react";
import firebaseConfig from "../config.js"
import { useNavigate } from "react-router-dom"

import { 
  getDatabase,
  ref,
  set,
  push,
  onValue 
} from "firebase/database";

export const WordsContext = React.createContext();

export const WordsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [wordsList, updateWordsList] = useState(null);
  const history = useNavigate();

  useEffect(() => {

    const wordListString = localStorage.getItem('wordlist');
    if (wordListString === null || wordListString === undefined) {

      const db = getDatabase(firebaseConfig);

      onValue(ref(db, 'words'), (snapshot) => {
        const data = snapshot.val();
        updateWordsList(data);
        setLoading(false);
      });
    }
  }, [history]);

  if (loading) {
    return <p>Loading...</p>
  }

  const value = { wordsList };

  return (
    <WordsContext.Provider value={ value }>
      { !loading && children }
    </WordsContext.Provider>
  );
};

export default WordsProvider;