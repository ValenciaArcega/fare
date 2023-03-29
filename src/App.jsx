import './App.css';
import { useState } from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import firebaseApp from "./credentials";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export function App() {

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
