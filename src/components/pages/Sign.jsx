import { SignIn } from "../forms/SignIn"
import { SignUp } from "../forms/SignUp"
import { useEffect, useState } from "react"
import { Loader } from '../loader/Loader'

export function Sign() {
  const [isRegistering, setIsRegistering] = useState(false)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoad(false), 3000)
  }, [])

  return (
    <>
      {load
        ? <Loader />
        : !isRegistering
          ? <SignIn setIsRegistering={setIsRegistering} />
          : <SignUp setIsRegistering={setIsRegistering} />}
    </>
  )
};
