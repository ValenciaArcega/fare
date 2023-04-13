import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from "./credentials";

const auth = getAuth(firebaseApp);

export function App() {
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (fU) => {
    if (fU) setGlobalUser(fU);
    else setGlobalUser(false);
  });

  return <>{globalUser ? <Home userMail={globalUser.email} /> : <Login />}</>;
}
