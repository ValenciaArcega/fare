/**
 * @overview Component that allows toggle between SignIn and SignUp.
 * @author ValenciaArcega
 */
import { LandingPage } from "../views/initial/LandingPage"
import { Login } from "../sign/views/Login"
import { SignUp } from "../sign/views/SignUp"
import { Routes, Route } from "react-router-dom"

export function RouterInitial() {
  {/*const [isRegistering, setIsRegistering] = useState(false)

  return <>
    {!isRegistering
      ? <Login setIsRegistering={setIsRegistering} />
      : <SignUp setIsRegistering={setIsRegistering} />}
  </>*/}

  return <Routes>
    <Route path="/fare/" Component={LandingPage} />
    <Route path="/fare/Login" Component={Login} />
    <Route path="/fare/SignUp" Component={SignUp} />
  </Routes>
}
