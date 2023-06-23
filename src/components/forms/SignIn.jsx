import BadCredentials from "../messages/BadCredentials"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../../credentials'
import { useState } from "react"

export function SignIn({ setIsRegistering }) {
  const auth = getAuth(firebaseApp)
  const [isWrong, setIsWrong] = useState(false)
  const [error, setError] = useState('Las credenciales no coinciden')

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
        <h1 className="login-title"><span className="gradientText-one">Inicia Sesión</span></h1>

        <label className="login-label" htmlFor="inputMail">Correo electrónico</label>
        <input
          id="inputMail"
          className="login-inputMail"
          type="text"
          placeholder="usuario@dominio.some"
        />

        <label className="login-label" htmlFor="inputPassword">Contraseña</label>
        <input
          id="inputPassword"
          className="login-inputPass"
          type="password"
          autoComplete="new-password"
          placeholder="Ingresa tu contraseña"
        />

        <button className="btn-blurCircle login-buttonLogin" type="submit">Autenticarme</button>

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
