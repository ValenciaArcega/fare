/**
 * @overview Component that allows toggle between SignIn and SignUp.
 * @author Valencia Arcega Luis Angel
 */
import { SignIn } from "../forms/SignIn"
import { SignUp } from "../forms/SignUp"
import { useEffect, useState } from "react"

export function Sign() {
  const [isRegistering, setIsRegistering] = useState(false)

  return <>
    {!isRegistering
      ? <SignIn setIsRegistering={setIsRegistering} />
      : <SignUp setIsRegistering={setIsRegistering} />}
  </>
}
