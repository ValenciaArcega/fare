
import { useRef } from "react"
import { regCharacters, regNumbers } from "../constants/regularExpressions"

export function useKeyUpSign() {
	const root = document.documentElement.style

	const errorName = useRef()
	const errorMail = useRef()
	const inputPass = useRef()
	const inputPassConfirm = useRef()
	const errorPass = useRef()
	const errorPassConfim = useRef()

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
		errorMail.current.textContent = ""
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

	return {
		name_onKeyUp,
		mail_onChangeCapture,
		pass_onChangeCapture,
		passConfirm_onKeyUp,
		inputPass,
		inputPassConfirm,
		errorName,
		errorMail,
		errorPass,
		errorPassConfim
	}
}