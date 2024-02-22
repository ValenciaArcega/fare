/**
 * @overview The following component Log the user in or allows go to sign up
 * @author ValenciaArcega
 */
import css from "../../css/Login.module.css";
import BadCredentials from "../../components/messages/BadCredentials";
import { auth } from "../../../dal/credentials";
import { useNavigate } from "react-router-dom";
import { useState, useRef, FormEvent, MouseEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { IconAt, IconCheck, IconKey } from "../../components/icons/sign-in";
import { StateStr, StateBool } from "../../types/state";

export function Login() {
  const root = useRef(document.documentElement);
  const [isLoginWrong, setIsLoginWrong]: StateBool = useState(false);
  const [bannerError, setBannerError]: StateStr = useState(
    "Las credenciales no coinciden"
  );
  const navigation = useNavigate();
  /**
   * @param {object} e Get the event itself and stored to can
   * prevent the default behavior in a submit action form
   */
  async function submitLogIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const target = e.target as typeof e.target & {
        inputMail: { value: string };
        inputPassword: { value: string };
      };
      const userMail = target.inputMail.value;
      const userPass = target.inputPassword.value;

      await signInWithEmailAndPassword(auth, userMail, userPass);
      navigation("/fare/");
    } catch (err: any) {
      /**
       * @throws { err } Handle possible errors that firebase
       * can throw and set custom message for the user
       */
      if (err.message === "Firebase: Error (auth/internal-error).") {
        setBannerError("Las credenciales no coinciden");
      }
      if (err.message === "Firebase: Error (auth/user-not-found).") {
        setBannerError("El usuario no existe");
      }
      if (err.message === "Firebase: Error (auth/wrong-password).") {
        setBannerError("La contraseña es incorrecta");
      }
      if (err.message === "Firebase: Error (auth/invalid-email).") {
        setBannerError("Campo correo es invalido");
      }
      if (err.message === "Firebase: Error (auth/missing-password).") {
        setBannerError("Campo contraseña es invalido");
      }
      if (
        err.message ===
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        setBannerError("Sesion bloqueada");
      }
      setIsLoginWrong(true);
      setTimeout(() => setIsLoginWrong(false), 4000);
    }
  }

  function navigateSignUp(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigation("/fare/SignUp");
  }

  /**
   * The following functions going to review the name of the
   * CSS variable to change when the user "focus in" or "focus out" the inputs
   * @param {string} border Name of the border variable to change color.
   * @param {string} icon Name of the icon stroke to change the color.
   */
  function onFocusInput(border: string, icon: string) {
    root.current.style.setProperty(`--borderInput-signIn-${border}`, "#4263eb");
    root.current.style.setProperty(`--fr-svg-${icon}`, "#4263eb");
  }

  function onBlurInput(border: string, icon: string) {
    root.current.style.setProperty(`--borderInput-signIn-${border}`, "#c5c5c5");
    root.current.style.setProperty(`--fr-svg-${icon}`, "#727272");
  }

  return (
    <>
      <div className={css.containerCircles}>
        <div className={css.circleLeft}></div>
        <div className={css.circleRight}></div>
      </div>

      <section className={css.containerLogin}>
        {isLoginWrong ? <BadCredentials message={bannerError} /> : null}

        <form className={css.loginForm} onSubmit={submitLogIn}>
          <img
            className={css.loginImg}
            src="login.svg"
            alt="Icon with a person opening a door to get in"
          />
          <h1 className={css.loginTitle}>
            <span className="gradientText">Inicia Sesión</span>
          </h1>

          <label className={css.loginLabel}>Correo electrónico</label>
          <div className={css.loginWrapperInputMail}>
            <IconAt />
            <input
              id="inputMail"
              className={css.loginInputMail}
              type="text"
              placeholder="usuario@dominio.some"
              onFocus={() => onFocusInput("mail", "mail")}
              onBlur={() => onBlurInput("mail", "mail")}
            />
          </div>

          <label className={css.loginLabel}>Contraseña</label>
          <div className={css.loginWrapperInputPassword}>
            <IconKey />
            <input
              id="inputPassword"
              className={css.loginInputPassword}
              type="password"
              autoComplete="new-password"
              placeholder="Ingresa tu contraseña"
              onFocus={() => onFocusInput("pass", "pass")}
              onBlur={() => onBlurInput("pass", "pass")}
            />
          </div>

          <button className={css.loginBtnAuth} type="submit">
            <IconCheck />
            Autenticarme
          </button>

          <label className={css.loginLabelGoSignUp} htmlFor="lbgr">
            ¿No tienes una cuenta?{" "}
            <button
              id="lbgr"
              className={css.loginBtnGoSignUp}
              type="button"
              onClick={navigateSignUp}
            >
              Registrat
            </button>
          </label>
        </form>
      </section>
    </>
  );
}
