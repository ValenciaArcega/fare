/**
 * @overview Component that allows toggle between SignIn and SignUp.
 * @author Valencia Arcega Luis Angel
 */
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import { useState } from "react"

export function Sign() {
  const [isRegistering, setIsRegistering] = useState(false)

  return <>
    {!isRegistering
      ? <SignIn setIsRegistering={setIsRegistering} />
      : <SignUp setIsRegistering={setIsRegistering} />}
  </>
}
