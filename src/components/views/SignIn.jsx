import BadCredentials from "../messages/BadCredentials";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../../credentials';
import { useState } from "react";

const auth = getAuth(firebaseApp);

export function SignIn({ setIsRegistering }) {

  const [isWrong, setIsWrong] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const m = e.target.inputMail.value;
      const p = e.target.inputPassword.value;
      await signInWithEmailAndPassword(auth, m, p);
    } catch (e) {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
      }, 4000);
    }
  }
  const goRegister = (e) => {
    e.preventDefault();
    setIsRegistering(true);
  };

  return (
    <section className="container-login">
      {isWrong ? <BadCredentials /> : null}

      <form className="login" onSubmit={submitHandler}>
        <img className="login-img" src="login.svg" alt="" />
        <h1 className="login-title">Inicia Sesión</h1>

        <label className="login-label" htmlFor="inputMail">Correo electrónico</label>
        <input
          id="inputMail"
          className="login-inputMail"
          type="text"
          autoComplete="new-password"
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

        <button className="login-buttonLogin" type="submit">Entrar</button>

        <label className="login-labelBGR" htmlFor="lbgr">¿No tienes una cuenta? <button
          onClick={goRegister}
          className="login-BGR" id="lbgr">Registrate</button>
        </label>
      </form>
    </section>
  );
};
