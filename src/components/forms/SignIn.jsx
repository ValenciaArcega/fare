import BadCredentials from "../messages/BadCredentials"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../credentials'
import { useState } from "react"
import { IconAt, IconCheck, IconKey } from "../svg/SignIn"
import { ClSignIn } from "../../classes/cl-signIn"

export function SignIn({ setIsRegistering }) {
  const [isWrong, setIsWrong] = useState(false)
  const [error, setError] = useState('Las credenciales no coinciden')
  const cl = new ClSignIn()

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const m = e.target.inputMail.value
      const p = e.target.inputPassword.value
      await signInWithEmailAndPassword(auth, m, p)
    } catch (e) {
      console.log(e.message)
      // ⛔ error handlers ⛔
      if (e.message === 'Firebase: Error (auth/internal-error).') {
        setError('Las credenciales no coinciden')
      }
      if (e.message === 'Firebase: Error (auth/user-not-found).') {
        setError('El usuario no existe')
      }
      if (e.message === 'Firebase: Error (auth/wrong-password).') {
        setError('La contraseña es incorrecta')
      }
      if (e.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Campo correo es invalido')
      }
      if (e.message === 'Firebase: Error (auth/missing-password).') {
        setError('Campo contraseña es invalido')
      }
      if (e.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
        setError('Sesion bloqueada')
      }
      setIsWrong(true)
      setTimeout(() => {
        setIsWrong(false)
      }, 4000)
    }
  }

  function goRegister(e) {
    e.preventDefault()
    setIsRegistering(true)
  };

  return (
    <section className="container-login">
      {isWrong ? <BadCredentials message={error} /> : null}

      <form className="login" onSubmit={submitHandler}>
        <img className="login-img" src="login.svg" alt="" />
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
          onClick={goRegister}
        >
          Registrate
        </button>
        </label>
      </form>
    </section>
  )
};
