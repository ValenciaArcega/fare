import css from "../../css/SignUp.module.css"
import { db, auth } from "../../../dal/credentials"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { getDoc, setDoc, doc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useKeyUpSign } from "../../hooks/useFieldsSign"
import { fixName } from "../../functions/upperName"
import { IoTextOutline } from "react-icons/io5"
import { HiAtSymbol, HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2"
import { useToast } from "../../hooks/useToast"

export function SignUp() {

	const [isShowingPass, setIsShowingPass] = useState(false)
	const [isShowingPassConfirm, setIsShowingPassConfirm] = useState(false)

	const navigation = useNavigate()
	const { toastError } = useToast()
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
		errorPassConfim,
		resetBorders,
		inputFocusIn,
		inputBlur } = useKeyUpSign()

	return <>
		<div className={css.containerCircles}>
			<div className={css.circleLeft}></div>
			<div className={css.circleRight}></div>
		</div>

		<section className={css.containerSignUp}>
			<form className={css.signUp} onSubmit={signUp_onSubmit}>
				<h1 className={css.signUpTitle}>Crea una cuenta</h1>

				<label className={css.signUpLabel} htmlFor="suName">
					Nombre completo <IoTextOutline size={22} /> </label>
				<input
					id="suName"
					ref={inputName}
					className={css.signUpName}
					placeholder="Nombre(s) y apellidos"
					autoComplete="new-password"
					onFocus={() => inputFocusIn('name')}
					onBlur={() => inputBlur('name')}
					onKeyUp={name_onKeyUp}
				/>
				<p ref={errorName} id="signUp-name-p" className={css.signUpFeedback}></p>

				<label className={css.signUpLabel} htmlFor="suMail">
					Correo electrónico <HiAtSymbol size={32} /></label>
				<input
					id="suMail"
					ref={inputEmail}
					className={css.signUpMail}
					placeholder="usuario@dominio.some"
					onFocus={() => inputFocusIn('mail')}
					onBlur={() => inputBlur('mail')}
					onChangeCapture={mail_onChangeCapture}
				/>
				<p ref={errorEmail} id="signUp-mail-p" className={css.signUpFeedback}></p>

				<label className={css.signUpLabel} htmlFor="suPassword">Contraseña</label>
				<section className={css.wrapperPassword}>
					<input
						id="suPassword"
						ref={inputPass}
						className={css.signUpPass}
						type={isShowingPass ? "text" : "password"}
						autoComplete="new-password"
						placeholder="Crea una contraseña"
						onFocus={() => inputFocusIn('pass')}
						onBlur={() => inputBlur('pass')}
						onChangeCapture={pass_onChangeCapture}
					/>
					<button
						className={css.btnShowPass}
						type="button"
						title="button show"
						onClick={() => setIsShowingPass(!isShowingPass)}
					>
						{isShowingPass
							? <HiOutlineEyeSlash size={24} color="#4263eb" />
							: <HiOutlineEye size={24} color="#4263eb" />}
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
						type={isShowingPassConfirm ? "text" : "password"}
						autoComplete="new-password"
						placeholder="Repite la contraseña"
						onFocus={() => inputFocusIn('passConfirm')}
						onBlur={() => inputBlur('passConfirm')}
						onKeyUp={passConfirm_onKeyUp}
					/>
					<button
						className={css.btnShowPassConfirm}
						title="button show"
						type="button"
						onClick={() => setIsShowingPassConfirm(!isShowingPassConfirm)}>
						{isShowingPassConfirm
							? <HiOutlineEyeSlash size={24} color="#4263eb" />
							: <HiOutlineEye size={24} color="#4263eb" />}
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
				toastError("El correo ya esta registrado")
			}
		} catch (error) {
			toastError("Error al enviar")
		}
	}

	function signUp_onSubmit(e) {
		e.preventDefault()

		if (reviewFields()) addUserToFirestore()
		else {
			toastError("Error al registrar usuario")
		}
	}

	function renderComponentSignIn() {
		resetBorders()
		navigation("/fare/Login")
	}
}
