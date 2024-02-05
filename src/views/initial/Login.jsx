/**
 * @overview The following component Log the user in or allows go to sign up
 * @author Valencia Arcega Luis Angel
*/
import css from "./Login.module.css"
import BadCredentials from "../../components/messages/BadCredentials"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { IconAt, IconCheck, IconKey } from "../../components/icons/sign-in"
import { ClSignIn } from "../../classes/cl-signIn"
import { useState } from "react"
import { auth } from "../../../dal/credentials"
import React from 'react'
import { useNavigate } from "react-router-dom"

/**
 * @param {object} setIsRegistering Change between forms in Sign.jsx
 */
export function Login() {
	const [isLoginWrong, setIsLoginWrong] = useState(false)
	const [bannerError, setBannerError] = useState('Las credenciales no coinciden')
	const cl = new ClSignIn()
	const navigation = useNavigate()
	/**
	 * @param {object} e Get the event itself and stored to can
	 * prevent the default behavior in a submit action form
	 */
	const submitLogIn = async function (e) {
		e.preventDefault()
		try {
			const m = e.target.inputMail.value
			const p = e.target.inputPassword.value
			await signInWithEmailAndPassword(auth, m, p)
		} catch (err) {
			/**
			* @throws { err } Handle possible errors that firebase
			can throw and set custom message for the user
			*/
			if (err.message === 'Firebase: Error (auth/internal-error).') {
				setBannerError('Las credenciales no coinciden')
			}
			if (err.message === 'Firebase: Error (auth/user-not-found).') {
				setBannerError('El usuario no existe')
			}
			if (err.message === 'Firebase: Error (auth/wrong-password).') {
				setBannerError('La contraseña es incorrecta')
			}
			if (err.message === 'Firebase: Error (auth/invalid-email).') {
				setBannerError('Campo correo es invalido')
			}
			if (err.message === 'Firebase: Error (auth/missing-password).') {
				setBannerError('Campo contraseña es invalido')
			}
			if (err.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
				setBannerError('Sesion bloqueada')
			}
			setIsLoginWrong(true)
			setTimeout(() => setIsLoginWrong(false), 4000)
		}
	}

	const navigateSignUp = function (e) {
		e.preventDefault()
		navigation("/fare/SignUp")
	}

	return <>
		<div className={css.containerCircles}>
			<div className={css.circleLeft}></div>
			<div className={css.circleRight}></div>
		</div>

		<section className={css.containerLogin}>
			{isLoginWrong ? <BadCredentials message={bannerError} /> : null}

			<form className={css.loginForm} onSubmit={submitLogIn}>
				<img className={css.loginImg} src="login.svg" alt="Icon with a person opening a door to get in" />
				<h1 className={css.loginTitle}>
					<span className="gradientText">Inicia Sesión</span></h1>

				<label className={css.loginLabel}>Correo electrónico</label>
				<div className={css.loginWrapperInputMail}>
					<IconAt />
					<input
						id="inputMail"
						className={css.loginInputMail}
						type="text"
						placeholder="usuario@dominio.some"
						onFocus={() => cl._inputFocusIn('mail', 'mail')}
						onBlur={() => cl._inputBlur('mail', 'mail')}
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
						onFocus={() => cl._inputFocusIn('pass', 'pass')}
						onBlur={() => cl._inputBlur('pass', 'pass')}
					/>
				</div>

				<button className={css.loginBtnAuth} type="submit">
					<IconCheck />
					Autenticarme
				</button>

				<label className={css.loginLabelGoSignUp} htmlFor="lbgr">¿No tienes una cuenta? <button
					id="lbgr"
					className={css.loginBtnGoSignUp}
					type="button"
					onClick={navigateSignUp}>Registrate</button>
				</label>
			</form>
		</section >
	</>
}