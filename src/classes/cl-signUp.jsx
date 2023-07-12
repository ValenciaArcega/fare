/**
 * @overview The following class allows review inputs behavior and
 make checking of the data type that arrives, let it know to the user
 if something went wrong with the input character
 * @author Valencia Arcega Luis Angel
 */
export class ClReviewSignUp {
  root = document.documentElement.style;
  _regularExpressionLetters = /[a-zA-Z]/;
  _regularExpressionNumbers = /[0-9]/;
  _regularExpressionCharacters = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  /**
   * The following two private methods going to review the name of the
  CSS variable to change when the user "focus in" or "focus out" the inputs
   * @param {string} str Name of the border variable to change color.
   */
  _inputFocusIn(str) {
    this.root.setProperty(`--borderInput-${str}`, '#4263eb')
  }

  _inputBlur(str) {
    this.root.setProperty(`--borderInput-${str}`, '#c5c5c5')
  }

  /**
 * @param {string} inputName Name of the input to review the type.
 * @param {string} iconHide Name of the icon which will hide the password.
 * @param {string} iconShow Name of the icon which will show the password.
 */
  _showPass(inputName, iconHide, iconShow) {
    const input = document.querySelector(`.${inputName}`)
    const hide = document.querySelector(`.${iconHide}`)
    const show = document.querySelector(`.${iconShow}`)

    if (input.type == "password") {
      input.type = "text"
      hide.classList.remove('hidden')
      show.classList.add('hidden')
    } else {
      input.type = "password"
      show.classList.remove('hidden')
      hide.classList.add('hidden')
    }
  }

  _emptyPassConfirm() {
    document.querySelector('.signUp-passConfirm').value = ''
    document.querySelector('.signUp-passConfirm-p').textContent = ''
    document.querySelector('.signUp-pass-p').textContent = ''
  }

  _resetBorders() {
    this.root.setProperty('--borderInput-name', '#c5c5c5')
    this.root.setProperty('--borderInput-mail', '#c5c5c5')
    this.root.setProperty('--borderInput-pass', '#c5c5c5')
    this.root.setProperty('--borderInput-passConfirm', '#c5c5c5')
  }

  _inputNameKeyUp() {
    const input = document.querySelector('.signUp-name')
    const textError = document.querySelector('.signUp-name-p')

    this.root.setProperty('--borderInput-name', '#4263eb')

    if (input.value.match(this._regularExpressionNumbers) || input.value.match(this._regularExpressionCharacters)) {
      this.root.setProperty('--borderInput-name', '#DF0000')
      textError.textContent = 'Recuerda, caracteres de tipo texto'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty('--borderInput-name', '#4263eb')
      textError.textContent = ''
    }
  }

  _inputConfirmPassKeyUp() {
    const inputPass = document.querySelector('.signUp-pass')
    const inputPassConfirm = document.querySelector('.signUp-passConfirm')
    const textError = document.querySelector('.signUp-passConfirm-p')

    if (inputPassConfirm.value === inputPass.value) {
      this.root.setProperty('--borderInput-passConfirm', '#4263eb')
      textError.style.color = '#4263eb'
      textError.textContent = '¡Coinciden!'
    } else {
      textError.style.color = '#DF0000'
      this.root.setProperty('--borderInput-passConfirm', '#DF0000')
      textError.textContent = 'Las contraseñas no coinciden'
    }
  }

  /**
   * The following methods will check if the input entries are correct
   * @returns {boolean} true in case of not have any mistake
   */
  _reviewInputName() {
    const input = document.querySelector('.signUp-name')
    const textError = document.querySelector('.signUp-name-p')

    if (input.value === '') {
      this.root.setProperty('--borderInput-name', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(this._regularExpressionNumbers) || input.value.match(this._regularExpressionCharacters)) {
      this.root.setProperty('--borderInput-name', '#DF0000')
      textError.textContent = 'Solo caracteres tipo texto'
    } else return true
  }

  _reviewInputMail() {
    const input = document.querySelector('.signUp-mail')
    const textError = document.querySelector('.signUp-mail-p')

    if (input.value === '') {
      this.root.setProperty('--borderInput-mail', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (!input.value.includes('@') || !input.value.includes('.') || input.value.length < 8) {
      this.root.setProperty('--borderInput-mail', '#DF0000')
      textError.textContent = 'Formato de correo invalido'
    } else return true
  }

  _reviewInputPass() {
    const input = document.querySelector('.signUp-pass')
    const textError = document.querySelector('.signUp-pass-p')

    if (input.value === '') {
      this.root.setProperty('--borderInput-pass', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.length <= 7) {
      this.root.setProperty('--borderInput-pass', '#DF0000')
      textError.textContent = 'Al menos 8 caracteres'
    } else return true
  }

  _reviewInputConfirmPassword() {
    const input = document.querySelector('.signUp-passConfirm')
    const textError = document.querySelector('.signUp-passConfirm-p')
    const inputExternal = document.querySelector('.signUp-pass')

    if (inputExternal.value !== input.value) {
      this.root.setProperty('--borderInput-passConfirm', '#DF0000')
      textError.style.color = '#DF0000'
      textError.textContent = 'Las contraseñas no coinciden'
    } else return true
  }

  _reviewSignUp(e) {
    e.preventDefault()
    this._reviewInputName()
    this._reviewInputMail()
    this._reviewInputPass()
    this._reviewInputConfirmPassword()

    if (this._reviewInputName() && this._reviewInputMail() && this._reviewInputConfirmPassword() && this._reviewInputPass()) return true
  }

} // class