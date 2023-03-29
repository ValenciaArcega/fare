import './App.css';
import React, { useState } from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
//  google can say our app that user is login with
import firebaseApp from "./credentials";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export function App() {
  // create a global state
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setGlobalUser(firebaseUser);
    } else {
      setGlobalUser(null);
    }
  });
  return (
    <>
      {globalUser
        ? <Home userMail={globalUser.email} />
        : <Login />
      }
    </>
  );
}
