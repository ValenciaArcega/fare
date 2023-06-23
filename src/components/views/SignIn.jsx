import BadCredentials from "../messages/BadCredentials"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../../credentials'
import { useState } from "react"

export function SignIn({ setIsRegistering }) {
  const auth = getAuth(firebaseApp)
  const [isWrong, setIsWrong] = useState(false)

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const m = e.target.inputMail.value
      const p = e.target.inputPassword.value
      await signInWithEmailAndPassword(auth, m, p)
    } catch (e) {
      setIsWrong(true)
      setTimeout(() => {
        setIsWrong(false)
      }, 4500)
    }
  }

  function goRegister(e) {
    e.preventDefault()
    setIsRegistering(true)
  };

  return (
    <section className="container-login">
      {isWrong ? <BadCredentials /> : null}

      <form className="login" onSubmit={submitHandler}>
        <img className="login-img" src="login.svg" alt="" />
        <h1 className="login-title"><span className="gradientText-one">Inicia Sesión</span></h1>

        <label className="login-label" htmlFor="inputMail">Correo electrónico</label>
        <input
          id="inputMail"
          className="login-inputMail"
          type="text"
          // autoComplete="new-password"
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
