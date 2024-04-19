/**
 * @overview The following component Log the user in or allows go to sign up
 * @author ValenciaArcega
 */
import css from "../../css/Login.module.css"
import { auth } from "../../../dal/credentials"
import { useNavigate } from "react-router-dom"
import { useState, useRef, FormEvent, MouseEvent } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { HiAtSymbol, HiOutlineKey, HiCheck } from "react-icons/hi2"
import { useToast } from "../../hooks/useToast"

export function Login() {
	const root = useRef(document.documentElement)

	const { toastError } = useToast()
	const navigation = useNavigate()

	return <>
		<div className={css.containerCircles}>
			<div className={css.circleLeft}></div>
			<div className={css.circleRight}></div>
		</div>

		<section className={css.containerLogin}>
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
					<HiAtSymbol size={22} />
					<input
						id="inputMail"
						name="email"
						className={css.loginInputMail}
						type="text"
						placeholder="usuario@dominio.some"
						onFocus={() => onFocusInput("Mail", "Mail")}
						onBlur={() => onBlurInput("Mail", "Mail")}
					/>
				</div>

				<label className={css.loginLabel}>Contraseña</label>
				<div className={css.loginWrapperInputPassword}>
					<HiOutlineKey size={22} />
					<input
						id="inputPassword"
						name="password"
						className={css.loginInputPassword}
						type="password"
						autoComplete="current-password"
						placeholder="Ingresa tu contraseña"
						onFocus={() => onFocusInput("Pass", "Pass")}
						onBlur={() => onBlurInput("Pass", "Pass")}
					/>
				</div>

				<button className={css.loginBtnAuth} type="submit">
					<HiCheck size={22} color="#fff" />
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

	async function submitLogIn(e) {
		e.preventDefault()

		try {
			const { email, password } = Object.fromEntries(new window.FormData(e.target))

			await signInWithEmailAndPassword(auth, email, password)

			navigation("/fare/")
		} catch (ex) {
			if (ex.message === "Firebase: Error (auth/internal-error).") {
				toastError("Las credenciales no coinciden")
			}
			else if (ex.message === "Firebase: Error (auth/user-not-found).") {
				toastError("El usuario no existe")
			}
			else if (ex.message === "Firebase: Error (auth/wrong-password).") {
				toastError("La contraseña es incorrecta")
			}
			else if (ex.message === "Firebase: Error (auth/invalid-email).") {
				toastError("Campo correo es invalido")
			}
			else if (ex.message === "Firebase: Error (auth/missing-password).") {
				toastError("Campo contraseña es invalido")
			}
			else if (
				ex.message ===
				"Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
			) {
				toastError("Sesion bloqueada")
			} else {
				toastError("Las credenciales no coinciden")
			}
		}
	}

	/**
	 * The following functions going to review the name of the
	 * CSS variable to change when the user "focus in" or "focus out" the inputs
	 * @param {string} border Name of the border variable to change color.
	 * @param {string} icon Name of the icon stroke to change the color.
	 */
	function onFocusInput(border, icon) {
		root.current.style.setProperty(`--borderInputLogin${border}`, "#4263eb")
		root.current.style.setProperty(`--colorIcon${icon}`, "#4263eb")
	}

	function onBlurInput(border, icon) {
		root.current.style.setProperty(`--borderInputLogin${border}`, "#c5c5c5")
		root.current.style.setProperty(`--colorIcon${icon}`, "#727272")
	}
}
