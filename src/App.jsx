import './App.css'
import { auth } from "./credentials"
import { Sign } from "./components/pages/Sign"
import { Home } from "./components/pages/Home"
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

export function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) setUser(firebaseUser)
    else setUser(false)
  })

  return <>{user ? <Home /> : <Sign />}</>
}
