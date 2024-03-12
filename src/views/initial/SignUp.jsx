/**
 * @overview The following component allows Register a user or go to Sign in
 * @author ValenciaArcega
 */
import css from "../../css/SignUp.module.css"
import { IconText, IconHashtag, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../../components/icons/sign-up'
import { db, auth } from "../../../dal/credentials"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { WrongRegister } from "../../components/messages/SignUp"
import { ClReviewSignUp } from "../../classes/cl-signUp"
import { getDoc, setDoc, doc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from 'firebase/auth'

/**
 * @param {object} setIsRegistering Change between forms in Sign.jsx
 */
export function SignUp() {
	const classReview = new ClReviewSignUp()
	const [hasError, setHasError] = useState(false)
	const navigation = useNavigate()

	const renderComponentSignIn = function () {
		classReview._resetBorders()
		navigation("/fare/Login")
	}
	/**
	* pablo  oScaR   gonzaleZ CAMARENA 👉 Pablo Oscar Gonzalez Camarena
	* @param {string} str Fix the user input name
	*/
	const fixName = function (str) {
		const a = str.trim().toLowerCase().split(' ').filter(n => n !== '')
		return a.map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
	}
	/**
   * @param {object} e Get the event itself and stored to can
   * prevent the default behavior in a submit action form
   */
	const addUserToFirestore = async function (e) {
		e.preventDefault()
		const fromUser_name = e.target.suName.value
		const fromUser_email = e.target.suMail.value
		const fromUser_password = e.target.suPassword.value
		const nameFixed = fixName(fromUser_name)
		const dataUser = [{
			name: nameFixed,
			mail: fromUser_email,
		}]
		const initialIdea = [{
			id: +new Date(),
			title: "Idea de ejemplo",
			description:
				"Hacer el reporte de Química sobre: \n 👉 Marie Curie \n 👉 La historia del Polonio \n El reporte es a mano, sin olvidar las referencias.",
		}]
		const documentReference = doc(db, `users/${fromUser_email}`)
		const query = await getDoc(documentReference)
		try {
			if (!query.exists()) {
				await setDoc(documentReference, { data: [...dataUser], tasks: [...initialIdea] })
				await createUserWithEmailAndPassword(auth, fromUser_email, fromUser_password)
			} else {
				setHasError(true)
				setTimeout(() => setHasError(false), 4000)
			}
		} catch (error) {
			setHasError(true)
			setTimeout(() => setHasError(false), 4000)
		}
	}

	return <>
		<div className={css.containerCircles}>
			<div className={css.circleLeft}></div>
			<div className={css.circleRight}></div>
		</div>

		<section className={css.containerSignUp}>
			{hasError ? <WrongRegister /> : false}

			<form className={css.signUp} onSubmit={(e) => {
				if (classReview._reviewSignUp(e)) addUserToFirestore(e)
			}}>
				<h1 className={css.signUpTitle}>Crea una cuenta</h1>

				<label className={css.signUpLabel} htmlFor="suName">
					Nombre completo<IconText /></label>
				<input
					id="suName"
					className={css.signUpName}
					placeholder="Nombre(s) y apellidos"
					autoComplete="new-password"
					onFocus={() => classReview._inputFocusIn('name')}
					onBlur={() => classReview._inputBlur('name')}
					onKeyUp={() => classReview._inputNameKeyUp()}
				/>
				<p id="signUp-name-p" className={css.signUpFeedback}></p>

				<label className={css.signUpLabel} htmlFor="suMail">
					Correo electrónico
					<IconHashtag /></label>
				<input
					id="suMail"
					className={css.signUpMail}
					placeholder="usuario@dominio.some"
					onFocus={() => classReview._inputFocusIn('mail')}
					onBlur={() => classReview._inputBlur('mail')}
					onChangeCapture={() => classReview._inputMailOnChangeCapture()}
				/>
				<p id="signUp-mail-p" className={css.signUpFeedback}></p>

				<label className={css.signUpLabel} htmlFor="suPassword">Contraseña</label>
				<section className={css.wrapperPassword}>
					<input
						id="suPassword"
						className={css.signUpPass}
						type="password"
						autoComplete="new-password"
						placeholder="Crea una contraseña"
						onFocus={() => classReview._inputFocusIn('pass')}
						onBlur={() => classReview._inputBlur('pass')}
						onChangeCapture={() => classReview._emptyPassConfirm()}
					/>
					<button
						className={css.btnShowPass}
						type="button"
						title="button show"
						onClick={() => classReview._showPass('suPassword', 'btn-hidePass-svg', 'btn-showPass-svg')}
					>
						<IconShow />
						<IconHide />
					</button>
				</section>
				<p id="signUp-pass-p" className={css.signUpFeedback}></p>

				<label className={css.signUpLabel} htmlFor="suPassConfirm">
					Confirmar contraseña</label>
				<div className={css.wrapperPassword}>
					<input
						id="suPassConfirm"
						className={css.signUpPassConfirm}
						type="password"
						autoComplete="new-password"
						placeholder="Repite la contraseña"
						onFocus={() => classReview._inputFocusIn('passConfirm')}
						onBlur={() => classReview._inputBlur('passConfirm')}
						onKeyUp={() => classReview._inputConfirmPassKeyUp()}
					/>
					<button
						className={css.btnShowPassConfirm}
						title="button show"
						type="button"
						onClick={() => classReview._showPass('suPassConfirm', 'btn-hidePassConfirm-svg', 'btn-showPassConfirm-svg')}>
						<IconShowConfirm />
						<IconHideConfirm />
					</button>
				</div>
				<p id="signUp-passConfirm-p" className={css.signUpFeedback}></p>

				<button type="submit" className={css.signUpBtnRegister} name="Button to Register a new user">
					Registrarme Ahora
				</button>

				<label className={css.signUpLabelGoSignIn} htmlFor="sufbsi">¿Ya tienes una cuenta? <button id="sufbsi" className={css.signUpBtnGoSignIn} type="button" onClick={renderComponentSignIn}>Inicia Sesión</button></label>
			</form>
		</section>
	</>
}
