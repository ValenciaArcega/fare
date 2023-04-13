import React, { useState } from 'react';
import firebaseApp from "../credentials";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// icons
import { IconMail, IconPassword } from "./icons/login-inputs";

const auth = getAuth(firebaseApp);

const Login = function () {
  // by default the state knows that will be in the login
  const [isRegistering, setIsRegistering] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const mail = e.target.inputMail.value;
    const password = e.target.inputPassword.value;

    if (isRegistering) {
      const user = await createUserWithEmailAndPassword(auth, mail, password);
    } else {
      signInWithEmailAndPassword(auth, mail, password);
    }

  }

  const root = document.querySelector(':root');
  // functions
  const focusInInputMail = () => root.style.setProperty('--border-wrapper-input-loginMail', '#0ca678');
  const focusOutInputMail = () => root.style.setProperty('--border-wrapper-input-loginMail', '#a8a8a8');
  const focusInInputPass = () => root.style.setProperty('--border-wrapper-input-loginPass', '#0ca678');
  const focusOutInputPass = () => root.style.setProperty('--border-wrapper-input-loginPass', '#a8a8a8');


  const cleanForms = () => {
    const formMail = document.querySelector('.input-mail');
    const formPassword = document.querySelector('.input-password');
    formMail.value = formPassword.value = '';
  };

  return (
    <div className="container-login">
      <div className="login">

        <img src="./formIllustration.svg" alt="" />
        <h1 className="login-h1">{isRegistering ? 'Regístrate' : 'Inicia Sesión'}</h1>
        <form autoComplete="off" className="login-form" onSubmit={submitHandler}>

          <label className="login-formLabel" htmlFor="">{isRegistering ? 'Registra un correo valido' : 'Ingresa tu correo'}</label>
          <div className="wrapper-login-inputMail">
            <IconMail />
            <input onFocusCapture={focusInInputMail} onBlurCapture={focusOutInputMail} autoComplete="new-password" placeholder="usuario@dominio" type="text" className="input-mail" id="inputMail" />
          </div>

          <label className="login-formLabel" htmlFor="">{isRegistering ? 'Crea una contraseña segura' : 'Ingresa tu contraseña'}</label>
          <div className="wrapper-login-inputPass">
            <IconPassword />
            <input autoComplete="current-password" onFocusCapture={focusInInputPass} onBlurCapture={focusOutInputPass} autoSave="nope" placeholder="Ingresa tu contraseña" type="password" className="input-password" id="inputPassword" />
          </div>

          <button className="login-btn__accOrReg">{isRegistering ? 'Registrarme' : 'Entrar'}</button>
        </form>

        <button className="btn__toggle__accOrReg" onClick={() => { setIsRegistering(!isRegistering); cleanForms(); }} >{isRegistering ? '¿Ya tienes cuenta? Inicia Sesión' : '¿No tienes una cuenta? Regístrate'}</button>
      </div>
    </div>
  );
};

export default Login;
