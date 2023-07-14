/**
 * @overview The following component allows Register a user or go to Sign in
 * @author Valencia Arcega Luis Angel
 */
import { IconText, IconHashtag, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/SignUp'
import { auth, db } from '../../credentials'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getDoc, setDoc, doc } from "firebase/firestore"
import { ClReviewSignUp } from "../../classes/cl-signUp"
import { WrongRegister } from "../messages/SignUp"
import { useState } from "react"

/**
 * @param {object} setIsRegistering Change between forms in Sign.jsx
 */
export function SignUp({ setIsRegistering }) {
  const classReview = new ClReviewSignUp()
  const [hasError, setHasError] = useState(false)

  function renderComponentSignIn() {
    classReview._resetBorders()
    setIsRegistering(false)
  };

  /**
  * pablo  oScaR   gonzaleZ CAMARENA 👉 Pablo Oscar Gonzalez Camarena
  * @param {string} str Fix the user input name 👇
  */
  function fixName(str) {
    const a = str.trim().toLowerCase().split(' ').filter(n => n !== '')
    return a.map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
  }

  /**
 * @param {object} e Get the event itself and stored to can
 * prevent the default behavior in a submit action form
 */
  async function addUserToFirestore(e) {
    e.preventDefault()
    const fromUser_name = e.target.sufn.value
    const fromUser_email = e.target.inputMail.value
    const fromUser_password = e.target.inputPassword.value
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

  return <section className="container-signUp">

    {hasError ? <WrongRegister /> : false}

    <form className="signUp" onSubmit={(e) => {
      if (classReview._reviewSignUp(e)) addUserToFirestore(e)
    }}>

      <h1 className="signUp-title">Crea una cuenta</h1>

      <label className="signUp-label" htmlFor="sufn">Nombre completo<IconText /></label>
      <input
        id="sufn"
        className="signUp-name"
        placeholder="Nombre(s) y apellidos"
        autoComplete="new-password"
        onFocus={() => classReview._inputFocusIn('name')}
        onBlur={() => classReview._inputBlur('name')}
        onKeyUp={() => classReview._inputNameKeyUp()}
      />
      <p className="signUp-name-p"> </p>

      <label className="signUp-label" htmlFor="inputMail">Correo electrónico <IconHashtag /></label>
      <input
        id="inputMail"
        className="signUp-mail"
        placeholder="usuario@dominio.some"
        // autoComplete="new-password"
        onFocus={() => classReview._inputFocusIn('mail')}
        onBlur={() => classReview._inputBlur('mail')}
        onChangeCapture={() => document.querySelector('.signUp-mail-p').textContent = ''}
      />
      <p className="signUp-mail-p"></p>

      <label className="signUp-label" htmlFor="inputPassword">Contraseña</label>
      <section className="wrapper-password">
        <input
          id="inputPassword"
          className="signUp-pass"
          type="password"
          autoComplete="new-password"
          placeholder="Crea una contraseña"
          onFocus={() => classReview._inputFocusIn('pass')}
          onBlur={() => classReview._inputBlur('pass')}
          onChangeCapture={() => classReview._emptyPassConfirm()}
        />
        <button
          className="btn-showPass"
          type="button"
          title="button show"
          onClick={() => classReview._showPass('signUp-pass', 'btn-hidePass-svg', 'btn-showPass-svg')}
        >
          <IconShow />
          <IconHide />
        </button>
      </section>
      <p className="signUp-pass-p"></p>

      <label className="signUp-label" htmlFor="sufcp">Confirmar contraseña</label>
      <div className="wrapper-password">
        <input
          id="sufcp"
          className="signUp-passConfirm"
          type="password"
          autoComplete="new-password"
          placeholder="Repite la contraseña"
          onFocus={() => classReview._inputFocusIn('passConfirm')}
          onBlur={() => classReview._inputBlur('passConfirm')}
          onKeyUp={() => classReview._inputConfirmPassKeyUp()}
        />
        <button
          className="btn-showPassConfirm"
          title="button show"
          type="button"
          onClick={() => classReview._showPass('signUp-passConfirm', 'btn-hidePassConfirm-svg', 'btn-showPassConfirm-svg')}
        >
          <IconShowConfirm />
          <IconHideConfirm />
        </button>
      </div>
      <p className="signUp-passConfirm-p"></p>

      <button type="submit" className="signUp-btnRegister" name="button to Register">
        Registrarme Ahora
      </button>

      <label className="signUp-labelGoSignIn" htmlFor="sufbsi">¿Ya tienes una cuenta? <button id="sufbsi" className="signUp-btnGoSignIn" onClick={renderComponentSignIn}>Inicia Sesión</button></label>
    </form>
  </section>
}
