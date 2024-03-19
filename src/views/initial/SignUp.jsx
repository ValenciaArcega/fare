/**
 * @overview The following component allows Register a user or go to Sign in
 * @author ValenciaArcega
 */
import css from "../../css/SignUp.module.css"
import { IconText, IconHashtag, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../../components/icons/sign-up'
import { db, auth } from "../../../dal/credentials"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { ClReviewSignUp } from "../../classes/cl-signUp"
import { getDoc, setDoc, doc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { MessageSign } from "../../components/messages/Message"
import { IconCross } from "../../components/icons/message"
import { useKeyUpSign } from "../../hooks/useFieldsSign"
import { fixName } from "../../functions/upperName"
import { timeMsgMedium } from "../../constants/time"

/**
 * @param {object} setIsRegistering Change between forms in Sign.jsx
 */
export function SignUp() {
	const navigation = useNavigate()
	const classReview = new ClReviewSignUp()

	const [msgError, setMsgError] = useState("")

	const renderComponentSignIn = function () {
		classReview._resetBorders()
		navigation("/fare/Login")
	}
	const { name_onKeyUp,
		mail_onChangeCapture,
		pass_onChangeCapture,
		passConfirm_onKeyUp,
		reviewFields,
		inputName,
		inputEmail,
		inputPass,
		inputPassConfirm,
		errorName,
		errorEmail,
		errorPass,
		errorPassConfim } = useKeyUpSign()

	return <>
		<div className={css.containerCircles}>
			<div className={css.circleLeft}></div>
			<div className={css.circleRight}></div>
		</div>

		<section className={css.containerSignUp}>

			{msgError !== "" && <MessageSign txt={msgError} >
				<IconCross height={24} fill="#ff4d4d" />
			</MessageSign>}

			<form className={css.signUp} onSubmit={signUp_onSubmit}>
				<h1 className={css.signUpTitle}>Crea una cuenta</h1>

				<label className={css.signUpLabel} htmlFor="suName">
					Nombre completo<IconText /></label>
				<input
					id="suName"
					ref={inputName}
					className={css.signUpName}
					placeholder="Nombre(s) y apellidos"
					autoComplete="new-password"
					onFocus={() => classReview._inputFocusIn('name')}
					onBlur={() => classReview._inputBlur('name')}
					onKeyUp={name_onKeyUp}
				/>
				<p ref={errorName} id="signUp-name-p" className={css.signUpFeedback}></p>

				<label className={css.signUpLabel} htmlFor="suMail">
					Correo electrónico
					<IconHashtag /></label>
				<input
					id="suMail"
					ref={inputEmail}
					className={css.signUpMail}
					placeholder="usuario@dominio.some"
					onFocus={() => classReview._inputFocusIn('mail')}
					onBlur={() => classReview._inputBlur('mail')}
					onChangeCapture={mail_onChangeCapture}
				/>
				<p ref={errorEmail} id="signUp-mail-p" className={css.signUpFeedback}></p>

				<label className={css.signUpLabel} htmlFor="suPassword">Contraseña</label>
				<section className={css.wrapperPassword}>
					<input
						id="suPassword"
						ref={inputPass}
						className={css.signUpPass}
						type="password"
						autoComplete="new-password"
						placeholder="Crea una contraseña"
						onFocus={() => classReview._inputFocusIn('pass')}
						onBlur={() => classReview._inputBlur('pass')}
						onChangeCapture={pass_onChangeCapture}
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
				<p ref={errorPass} id="signUp-pass-p" className={css.signUpFeedback}></p>

				<label className={css.signUpLabel} htmlFor="suPassConfirm">
					Confirmar contraseña</label>
				<div className={css.wrapperPassword}>
					<input
						id="suPassConfirm"
						ref={inputPassConfirm}
						className={css.signUpPassConfirm}
						type="password"
						autoComplete="new-password"
						placeholder="Repite la contraseña"
						onFocus={() => classReview._inputFocusIn('passConfirm')}
						onBlur={() => classReview._inputBlur('passConfirm')}
						onKeyUp={passConfirm_onKeyUp}
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
				<p ref={errorPassConfim} id="signUp-passConfirm-p" className={css.signUpFeedback}></p>

				<button type="submit" className={css.signUpBtnRegister} name="Button to Register a new user">
					Registrarme
				</button>

				<label className={css.signUpLabelGoSignIn} htmlFor="sufbsi">¿Ya tienes una cuenta? <button id="sufbsi" className={css.signUpBtnGoSignIn} type="button" onClick={renderComponentSignIn}>Inicia Sesión</button></label>
			</form>
		</section>
	</>

	async function addUserToFirestore() {
		try {
			const nameFixed = fixName(inputName.current.value)
			const email = inputEmail.current.value
			const password = inputPass.current.value
			const dataUser = [{
				name: nameFixed,
				mail: email,
			}]
			const initialIdea = [{
				id: +new Date(),
				title: "Idea de ejemplo",
				description:
					"Hacer el reporte de Química sobre: \n 👉 Marie Curie \n 👉 La historia del Polonio \n El reporte es a mano, sin olvidar las referencias.",
			}]
			const documentReference = doc(db, `users/${email}`)
			const query = await getDoc(documentReference)

			if (!query.exists()) {
				await setDoc(documentReference, { data: [...dataUser], tasks: [...initialIdea] })
				await createUserWithEmailAndPassword(auth, email, password)

				navigation("/fare/")
			} else {
				setMsgError("El correo ya esta registrado")
				setTimeout(() => setMsgError(""), timeMsgMedium)
			}
		} catch (error) {
			setMsgError("Error al enviar")
			setTimeout(() => setMsgError(""), timeMsgMedium)
		}
	}

	function signUp_onSubmit(e) {
		e.preventDefault()

		if (reviewFields()) {
			addUserToFirestore()
		}
		else {
			setMsgError("Error al registrar usuario")
			setTimeout(() => setMsgError(""), timeMsgMedium)
		}
	}
}
