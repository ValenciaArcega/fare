/**
 * @overview The following component Log the user in or allows go to sign up
 * @author Valencia Arcega Luis Angel
 */
import BadCredentials from "../messages/BadCredentials"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { IconAt, IconCheck, IconKey } from "../svg/SignIn"
import { ClSignIn } from "../../classes/cl-signIn"
import { useState } from "react"
import { auth } from '../../credentials'
import { LandingPage } from "../interface/LandingPage"

/**
 * @param {Object: state} setIsRegistering Change between forms in Sign.jsx
 */
export function SignIn({ setIsRegistering }) {
  const [isLoginWrong, setIsLoginWrong] = useState(false)
  const [bannerError, setBannerError] = useState('Las credenciales no coinciden')
  const cl = new ClSignIn()

  /**
   * @param {Object} e Get the event itself and stored to can
   * prevent the default behavior in a submit action form
   */
  async function submitLogIn(e) {
    e.preventDefault()
    try {
      const m = e.target.inputMail.value
      const p = e.target.inputPassword.value
      await signInWithEmailAndPassword(auth, m, p)
    } catch (error) {
      /**
      * @throws {error} Handle possible error that firebase
      can throw and set custom message for the user
      */
      if (error.message === 'Firebase: Error (auth/internal-error).') {
        setBannerError('Las credenciales no coinciden')
      }
      if (error.message === 'Firebase: Error (auth/user-not-found).') {
        setBannerError('El usuario no existe')
      }
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        setBannerError('La contraseña es incorrecta')
      }
      if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setBannerError('Campo correo es invalido')
      }
      if (error.message === 'Firebase: Error (auth/missing-password).') {
        setBannerError('Campo contraseña es invalido')
      }
      if (error.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
        setBannerError('Sesion bloqueada')
      }
      setIsLoginWrong(true)
      setTimeout(() => setIsLoginWrong(false), 4000)
    }
  }

  function renderComponentSignUp(e) {
    e.preventDefault()
    setIsRegistering(true)
  };

  return <section className="container-login">
    <LandingPage />
    {isLoginWrong ? <BadCredentials message={bannerError} /> : null}

    <form className="login" onSubmit={submitLogIn}>
      <img className="login-img" src="login.svg" alt="Icon login" />
      <h1 className="login-title"><span className="gradientText">Inicia Sesión</span></h1>

      <label className="login-label">Correo electrónico</label>
      <div className="signIn-wrapperInput-mail">
        <IconAt />
        <input
          id="inputMail"
          className="login-inputMail"
          type="text"
          placeholder="usuario@dominio.some"
          onFocus={() => cl._inputFocusIn('mail', 'mail')}
          onBlur={() => cl._inputBlur('mail', 'mail')}
        />
      </div>

      <label className="login-label">Contraseña</label>
      <div className="signIn-wrapperInput-pass">
        <IconKey />
        <input
          id="inputPassword"
          className="login-inputPass"
          type="password"
          autoComplete="new-password"
          placeholder="Ingresa tu contraseña"
          onFocus={() => cl._inputFocusIn('pass', 'pass')}
          onBlur={() => cl._inputBlur('pass', 'pass')}
        />
      </div>

      <button className="login-buttonLogin" type="submit">
        <IconCheck />
        Autenticarme
      </button>

      <label className="login-labelBGR" htmlFor="lbgr">¿No tienes una cuenta? <button
        id="lbgr"
        className="login-BGR"
        type="button"
        onClick={renderComponentSignUp}
      >Registrate
      </button>
      </label>
    </form>
  </section>
};
