import React, { useState } from 'react';
import firebaseApp from "../credentials";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
// icons
import { IconMail, IconPassword } from "./icons/login-inputs";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = function () {
  // by default the state knows that will be in the login
  const [isRegistering, setIsRegistering] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const mail = e.target.inputMail.value;
    const password = e.target.inputPassword.value;

    if (isRegistering) {
      // this gonna generate a promise so...
      const user = await createUserWithEmailAndPassword(auth, mail, password);
      // console.log(user);
    } else {
      signInWithEmailAndPassword(auth, mail, password);
    }

  }

  const focusInputMail = () => {
    const root = document.querySelector(':root');
    const inputMail = document.querySelector('.input-mail');

    inputMail.addEventListener('focusin', () => {
      root.style.setProperty('--border-wrapper-input-loginMail', '#0ca678');
    });
    inputMail.addEventListener('focusout', () => {
      root.style.setProperty('--border-wrapper-input-loginMail', '#969696');
    });
  };

  const focusInputPass = () => {
    const root = document.querySelector(':root');
    const inputPass = document.querySelector('.input-password');

    inputPass.addEventListener('focusin', () => {
      root.style.setProperty('--border-wrapper-input-loginPass', '#0ca678');
    });

    inputPass.addEventListener('focusout', () => {
      root.style.setProperty('--border-wrapper-input-loginPass', '#969696');
    });
  };

  const cleanForms = () => {
    const formMail = document.querySelector('.input-mail');
    const formPassword = document.querySelector('.input-password');
    formMail.value = formPassword.value = '';
  };

  return (
    <div className="container-login">
      <div className="login">

        <h1 className="login-h1">{isRegistering ? 'Regístrate' : 'Inicia Sesión'}</h1>
        <form className="login-form" onSubmit={submitHandler}>

          <label className="login-formLabel" htmlFor="">{isRegistering ? 'Registra un correo valido' : 'Ingresa tu correo'}</label>
          <div className="wrapper-login-inputMail">
            <IconMail />
            <input autoComplete="username" onFocusCapture={focusInputMail} autoSave="nope" placeholder="usuario@dominio" type="text" className="input-mail" id="inputMail" />
          </div>

          <label className="login-formLabel" htmlFor="">{isRegistering ? 'Crea una contraseña segura' : 'Ingresa tu contraseña'}</label>
          <div className="wrapper-login-inputPass">
            <IconPassword />
            <input autoComplete="current-password" onFocusCapture={focusInputPass} autoSave="nope" placeholder="Ingresa tu contraseña" type="password" className="input-password" id="inputPassword" />
          </div>

          <button className="login-btn__accOrReg">{isRegistering ? 'Registrarme' : 'Entrar'}</button>
        </form>

        <button className="btn__access-google" onClick={() => signInWithRedirect(auth, googleProvider)}>
          <img width="24px" height="24px" src="./google-icon-btn.svg" alt="" />
          {isRegistering ? 'Registrate con Google' : 'Ingresar con Google'}</button>

        <button className="btn__toggle__accOrReg" onClick={() => { setIsRegistering(!isRegistering); cleanForms(); }} >{isRegistering ? '¿Ya tienes cuenta? Inicia Sesión' : '¿No tienes una cuenta? Regístrate'}</button>
      </div>
    </div>
  );
};

export default Login;
