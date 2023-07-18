/**
 * @overview Component that allows toggle between SignIn and SignUp.
 * @author Valencia Arcega Luis Angel
 */
import { SignIn } from "../forms/SignIn"
import { SignUp } from "../forms/SignUp"
import { useEffect, useState } from "react"
import { LoaderBar } from '../interface/Loader'

export function Sign() {
  const [isRegistering, setIsRegistering] = useState(false)
  const [timer, setTimer] = useState(true)

  useEffect(function () {
    setTimeout(() => setTimer(false), 1000)
  }, [])

  return <>
    {timer
      ? <LoaderBar />
      : !isRegistering
        ? <SignIn setIsRegistering={setIsRegistering} />
        : <SignUp setIsRegistering={setIsRegistering} />}
  </>
}
