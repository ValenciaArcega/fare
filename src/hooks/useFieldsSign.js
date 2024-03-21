
import { useRef } from "react"
import { regCharacters, regNumbers } from "../constants/regularExpressions"

export function useKeyUpSign() {
	const root = document.documentElement.style

	const errorName = useRef()
	const errorEmail = useRef()
	const errorPass = useRef()
	const errorPassConfim = useRef()
	const inputName = useRef()
	const inputEmail = useRef()
	const inputPass = useRef()
	const inputPassConfirm = useRef()

	// #region Change input value events 
	function name_onKeyUp(e) {
		const name = e.target.value

		root.setProperty('--borderInput-name', '#4263eb')

		if (name.match(regNumbers) || name.match(regCharacters)) {
			root.setProperty('--borderInput-name', '#DF0000')
			errorName.current.textContent = 'Recuerda, caracteres de tipo texto'
		} else errorName.current.textContent = ''

		if (name === '') {
			root.setProperty('--borderInput-name', '#4263eb')
			errorName.current.textContent = ''
		}
	}

	function mail_onChangeCapture() {
		errorEmail.current.textContent = ""
	}

	function pass_onChangeCapture() {
		inputPassConfirm.current.value = null
		errorPass.current.textContent = null
		errorPassConfim.current.textContent = null
	}

	function passConfirm_onKeyUp() {
		if (inputPassConfirm.current.value === inputPass.current.value) {
			root.setProperty('--borderInput-passConfirm', '#4263eb')
			errorPassConfim.current.style.color = '#4263eb'
			errorPassConfim.current.textContent = '¡Coinciden!'
		} else {
			errorPassConfim.current.style.color = '#DF0000'
			root.setProperty('--borderInput-passConfirm', '#DF0000')
			errorPassConfim.current.textContent = 'Las contraseñas no coinciden'
		}
	}
	//#endregion

	// #region Validate inputs
	function validateName() {
		if (inputName.current.value === '') {
			root.setProperty('--borderInput-name', '#DF0000')
			errorName.current.textContent = 'El campo es obligatorio'
		}
		else if (inputName.current.value.match(regNumbers) || inputName.current.value.match(regCharacters)) {
			root.setProperty('--borderInput-name', '#DF0000')
			errorName.current.textContent = 'Solo caracteres tipo texto'
		} else return true
	}

	function validateEmail() {
		const isInvalidEmail = !inputEmail.current.value.includes('@') || !inputEmail.current.value.includes('.') || inputEmail.current.value.length < 10

		if (inputEmail.current.value === '') {
			root.setProperty('--borderInput-mail', '#DF0000')
			errorEmail.current.textContent = 'El campo es obligatorio'
		}
		else if (isInvalidEmail) {
			root.setProperty('--borderInput-mail', '#DF0000')
			errorEmail.current.textContent = 'Formato de correo invalido'
		} else return true
	}

	function validatePassword() {
		if (inputPass.current.value === '') {
			root.setProperty('--borderInput-pass', '#DF0000')
			errorPass.current.textContent = 'El campo es obligatorio'
		}
		else if (inputPass.current.value.length <= 7) {
			root.setProperty('--borderInput-pass', '#DF0000')
			errorPass.current.textContent = 'Al menos 8 caracteres'
		} else return true
	}

	function validatePasswordConfirm() {
		if (inputPass.current.value !== inputPassConfirm.current.value) {
			root.setProperty('--borderInput-passConfirm', '#DF0000')
			errorPassConfim.current.style.color = '#DF0000'
			errorPassConfim.current.textContent = 'Las contraseñas no coinciden'
		}
		else if (inputPassConfirm.current.value == "") {
			root.setProperty('--borderInput-passConfirm', '#DF0000')
			errorPassConfim.current.style.color = '#DF0000'
			errorPassConfim.current.textContent = 'Es necesario verificar la contraseña'
		}
		else return true
	}
	//#endregion


	function resetBorders() {
		root.setProperty('--borderInput-name', '#c5c5c5')
		root.setProperty('--borderInput-mail', '#c5c5c5')
		root.setProperty('--borderInput-pass', '#c5c5c5')
		root.setProperty('--borderInput-passConfirm', '#c5c5c5')
	}

	function reviewFields() {
		validateName()
		validateEmail()
		validatePassword()
		validatePasswordConfirm()

		if (validateName() && validateEmail() && validatePassword() && validatePasswordConfirm()) {
			return true
		}
		else return false
	}

	return {
		name_onKeyUp,
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
		resetBorders
	}
}