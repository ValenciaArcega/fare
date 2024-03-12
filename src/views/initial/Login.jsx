/**
 * @overview The following component Log the user in or allows go to sign up
 * @author ValenciaArcega
 */
import css from "../../css/Login.module.css"
import { auth } from "../../../dal/credentials"
import { useNavigate } from "react-router-dom"
import { useState, useRef, FormEvent, MouseEvent } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { IconAt, IconCheck, IconKey } from "../../components/icons/sign-in"
import { MessageSign } from "../../components/messages/Message"
import { IconPadlock } from "../../components/icons/message"

export function Login() {
	const root = useRef(document.documentElement)

	const [msgError, setMsgError] = useState(false)
	const [bannerError, setBannerError] = useState("Las credenciales no coinciden")

	const navigation = useNavigate()

	async function submitLogIn(e) {
		e.preventDefault()

		try {
			const { email, password } = Object.fromEntries(new window.FormData(e.target))

			await signInWithEmailAndPassword(auth, email, password)

			navigation("/fare/")
		} catch (err) {
			if (err.message === "Firebase: Error (auth/internal-error).") {
				setBannerError("Las credenciales no coinciden")
			}
			if (err.message === "Firebase: Error (auth/user-not-found).") {
				setBannerError("El usuario no existe")
			}
			if (err.message === "Firebase: Error (auth/wrong-password).") {
				setBannerError("La contraseña es incorrecta")
			}
			if (err.message === "Firebase: Error (auth/invalid-email).") {
				setBannerError("Campo correo es invalido")
			}
			if (err.message === "Firebase: Error (auth/missing-password).") {
				setBannerError("Campo contraseña es invalido")
			}
			if (
				err.message ===
				"Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
			) {
				setBannerError("Sesion bloqueada")
			}
			setMsgError(true)
			setTimeout(() => setMsgError(false), 4000)
		}
	}

	/**
	 * The following functions going to review the name of the
	 * CSS variable to change when the user "focus in" or "focus out" the inputs
	 * @param {string} border Name of the border variable to change color.
	 * @param {string} icon Name of the icon stroke to change the color.
	 */
	function onFocusInput(border, icon) {
		root.current.style.setProperty(`--borderInput-signIn-${border}`, "#4263eb")
		root.current.style.setProperty(`--fr-svg-${icon}`, "#4263eb")
	}

	function onBlurInput(border, icon) {
		root.current.style.setProperty(`--borderInput-signIn-${border}`, "#c5c5c5")
		root.current.style.setProperty(`--fr-svg-${icon}`, "#727272")
	}

	return <>
		<div className={css.containerCircles}>
			<div className={css.circleLeft}></div>
			<div className={css.circleRight}></div>
		</div>

		<section className={css.containerLogin}>

			{msgError && <MessageSign txt={bannerError} >
				<IconPadlock height={22} stroke="#df0000" />
			</MessageSign>}

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
						name="email"
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
						name="password"
						className={css.loginInputPassword}
						type="password"
						autoComplete="current-password"
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
						onClick={() => navigation("/fare/SignUp")}
					>
						Registrate
					</button>
				</label>
			</form>
		</section>
	</>
}
