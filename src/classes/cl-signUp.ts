export class ClReviewSignUp {
	root = document.documentElement.style;

	/**
	 * The following two private methods going to review the name of the
	CSS variable to change when the user "focus in" or "focus out" the inputs
	 * @param {string} str Name of the border variable to change color.
	 */
	_inputFocusIn(str: string) {
		this.root.setProperty(`--borderInput-${str}`, '#4263eb')
	}

	_inputBlur(str: string) {
		this.root.setProperty(`--borderInput-${str}`, '#c5c5c5')
	}
}
