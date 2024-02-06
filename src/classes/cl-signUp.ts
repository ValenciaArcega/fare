/**
 * @overview The following class allows review inputs behavior and
 make checking of the data type that arrives, let it know to the user
 if something went wrong with the input character
 * @author Valencia Arcega Luis Angel
 */
type ReviewInputName = boolean | void

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
  _inputFocusIn(str: string) {
    this.root.setProperty(`--borderInput-${str}`, '#4263eb')
  }

  _inputBlur(str: string) {
    this.root.setProperty(`--borderInput-${str}`, '#c5c5c5')
  }

  _inputMailOnChangeCapture() {
    const p = document.querySelector('#signUp-mail-p') as HTMLParagraphElement
    p.textContent = ''
  }

  /**
 * @param {string} inputName Name of the input to review the type.
 * @param {string} iconHide Name of the icon which will hide the password.
 * @param {string} iconShow Name of the icon which will show the password.
 */
  _showPass(inputName: string, iconHide: string, iconShow: string) {
    const input = document.querySelector(`#${inputName}`) as HTMLInputElement
    const hide = document.querySelector(`.${iconHide}`) as HTMLInputElement
    const show = document.querySelector(`.${iconShow}`) as HTMLInputElement

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
    const a = document.querySelector('#suPassConfirm') as HTMLInputElement
    a.value = ''
    const b = document.querySelector('#signUp-passConfirm-p') as HTMLParagraphElement
    b.textContent = ''
    const c = document.querySelector('#signUp-pass-p') as HTMLParagraphElement
    c.textContent = ''
  }

  _resetBorders() {
    this.root.setProperty('--borderInput-name', '#c5c5c5')
    this.root.setProperty('--borderInput-mail', '#c5c5c5')
    this.root.setProperty('--borderInput-pass', '#c5c5c5')
    this.root.setProperty('--borderInput-passConfirm', '#c5c5c5')
  }

  _inputNameKeyUp() {
    const input = document.querySelector('#sufn') as HTMLInputElement
    const textError = document.querySelector('#signUp-name-p') as HTMLElement

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
    const inputPass = document.querySelector('#suPassword') as HTMLInputElement
    const inputPassConfirm = document.querySelector('#suPassConfirm') as HTMLInputElement
    const textError = document.querySelector('#signUp-passConfirm-p') as HTMLElement

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
  _reviewInputName(): ReviewInputName {
    const input = document.querySelector('#suName') as HTMLInputElement
    const textError = document.querySelector('#signUp-name-p') as HTMLParagraphElement

    if (input.value === '') {
      this.root.setProperty('--borderInput-name', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.match(this._regularExpressionNumbers) || input.value.match(this._regularExpressionCharacters)) {
      this.root.setProperty('--borderInput-name', '#DF0000')
      textError.textContent = 'Solo caracteres tipo texto'
    } else return true
  }

  _reviewInputMail(): ReviewInputName {
    const input = document.querySelector('#suMail') as HTMLInputElement
    const textError = document.querySelector('#signUp-mail-p') as HTMLParagraphElement

    if (input.value === '') {
      this.root.setProperty('--borderInput-mail', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (!input.value.includes('@') || !input.value.includes('.') || input.value.length < 10) {
      this.root.setProperty('--borderInput-mail', '#DF0000')
      textError.textContent = 'Formato de correo invalido'
    } else return true
  }

  _reviewInputPass(): ReviewInputName {
    const input = document.querySelector('#suPassword') as HTMLInputElement
    const textError = document.querySelector('#signUp-pass-p') as HTMLParagraphElement

    if (input.value === '') {
      this.root.setProperty('--borderInput-pass', '#DF0000')
      textError.textContent = 'El campo es obligatorio'
    } else if (input.value.length <= 7) {
      this.root.setProperty('--borderInput-pass', '#DF0000')
      textError.textContent = 'Al menos 8 caracteres'
    } else return true
  }

  _reviewInputConfirmPassword(): ReviewInputName {
    const input = document.querySelector('#suPassConfirm') as HTMLInputElement
    const textError = document.querySelector('#signUp-passConfirm-p') as HTMLParagraphElement
    const inputExternal = document.querySelector('#suPassword') as HTMLInputElement

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
}
