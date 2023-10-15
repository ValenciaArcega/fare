import './App.css'
import { auth } from "./credentials"
import { Sign } from "./components/Sign"
import { Home } from "./components/Home"
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { LoaderBar } from "./components/Loader"

export function App() {
  const [user, setUser] = useState(null)
  const [hasSession, setHasSession] = useState(false)
  const [loader, setLoader] = useState(true)

  onAuthStateChanged(auth, function (firebaseUser) {
    if (firebaseUser) {
      setUser(firebaseUser)
      setHasSession(true)
    } else {
      setUser(null)
    }
  })

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 4000)
  }
    , [])

  return <>{
    loader
      ? <LoaderBar />
      : user
        ? <Home />
        : <Sign />
  }</>
}

//
