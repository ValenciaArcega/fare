import './App.css';
import firebaseApp from "./credentials";
import { Sign } from "./components/pages/Sign";
import { Home } from "./components/pages/Home";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(firebaseApp);

export function App() {
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (fU) => {
    if (fU) setGlobalUser(fU);
    else setGlobalUser(false);
  });

  return <>{globalUser ? <Home userMail={globalUser.email} /> : <Sign />}</>;
}
