/**
 * @overview Component that allows toggle between SignIn and SignUp.
 * @author Valencia Arcega Luis Angel
 */
import { LandingPage } from "../views/initial/LandingPage"
import { Login } from "../views/initial/Login"
import { SignUp } from "../views/initial/SignUp"
import { Routes, Route } from "react-router-dom"

export function RouterInitial() {
  {/*const [isRegistering, setIsRegistering] = useState(false)

  return <>
    {!isRegistering
      ? <Login setIsRegistering={setIsRegistering} />
      : <SignUp setIsRegistering={setIsRegistering} />}
  </>*/}

  return <Routes>
    <Route path="/fare" Component={LandingPage} />
    <Route path="/fare/Login" Component={Login} />
    <Route path="/fare/SignUp" Component={SignUp} />
  </Routes>
}