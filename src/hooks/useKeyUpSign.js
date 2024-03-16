
import { useRef } from "react"

export function useKeyUpSign() {
	const root = document.documentElement.style
	const regLetters = /[a-zA-Z]/
	const regNumbers = /[0-9]/
	const regCharacters = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/

	const errorName = useRef()
	const errorMail = useRef()

	function nameKeyUp(e) {
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

	return {
		nameKeyUp,
		mail_onChangeCapture,
		errorName,
		errorMail
	}

}