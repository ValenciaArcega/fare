import './App.css'
import { auth } from "./credentials"
import { Sign } from "./components/pages/Sign"
import { Home } from "./components/pages/Home"
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

export function App() {
  const [globalUser, setGlobalUser] = useState(null)

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) setGlobalUser(firebaseUser)
    else setGlobalUser(false)
  })

  return <>{globalUser ? <Home userMail={globalUser.email} /> : <Sign />}</>
}
