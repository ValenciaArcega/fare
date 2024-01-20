import './App.css'
import { auth } from "../dal/credentials"
import { Sign } from "./components/Sign"
import { Home } from "./components/Home"
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { LoaderBar } from "./components/Loader"

export function App() {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
    // original ==> }, 4000)
    onAuthStateChanged(auth, function (firebaseUser) {
      if (firebaseUser) {
        setUser(firebaseUser)
      } else {
        setUser(null)
      }
    })
  }, [])

  return <>{
    loader
      ? <LoaderBar />
      : user
        ? <Home />
        : <Sign />
  }</>
}
