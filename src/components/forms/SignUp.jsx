import { IconText, IconHashtag, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/SignUp'
import { auth, db } from '../../credentials'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getDoc, setDoc, doc } from "firebase/firestore"
import { ClReviewSignUp } from "../../classes/cl-signUp"

export function SignUp({ setIsRegistering }) {
  const cl = new ClReviewSignUp()

  function goSignIn() {
    cl._resetBorders()
    setIsRegistering(false)
  };

  function upperCaseName(str) {
    // pablo  mario   gonzaleZ CAMARENA  
    // Pablo Mario Gonzalez Camarena 
    const stageOne = str.trim().toLowerCase().split(' ').filter(n => n !== '')
    return stageOne.map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
  }

  async function addUser(e) {
    e.preventDefault()
    const name = e.target.sufn.value
    const nameFixed = upperCaseName(name)
    const mail = e.target.inputMail.value
    const password = e.target.inputPassword.value
    const dataUser = [{
      name: nameFixed,
      mail: mail,
    }]
    const initialTask = [
      {
        id: +new Date(),
        title: "Tarea de ejemplo",
        description:
          "Aqui podras agregar cualquier idea o pendiente que debas realizar, por ejemplo: Imprimir el reporte de Química para el Jueves 😀",
      },
    ]
    const docRef = doc(db, `users/${mail}`)
    const query = await getDoc(docRef)

    if (!query.exists()) {
      await setDoc(docRef, { data: [...dataUser], tasks: [...initialTask] })
      await createUserWithEmailAndPassword(auth, mail, password)
    } else return
  }

  return (
    <section className="container-signUp">
      <form className="signUp" onSubmit={(e) => {
        if (cl._reviewSignUp(e)) addUser(e)
      }}>

        <h1 className="signUp-title">Crea una <span className="gradientText">cuenta gratis</span></h1>

        <label className="signUp-label" htmlFor="sufn">Nombre<IconText /></label>
        <input
          id="sufn"
          className="signUp-name"
          placeholder="Hernández Castillo Sasha"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('name')}
          onBlur={() => cl._inputBlur('name')}
          onKeyUp={() => cl._inputNameKeyUp()}
        />
        <p className="signUp-name-p"> </p>

        {/* /////////////////////////////////////////////////// */}
        <label className="signUp-label" htmlFor="inputMail">Correo electrónico <IconHashtag /></label>
        <input
          id="inputMail"
          className="signUp-mail"
          placeholder="usuario@dominio.some"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('mail')}
          onBlur={() => cl._inputBlur('mail')}
          onChangeCapture={() => document.querySelector('.signUp-mail-p').textContent = ''}
        />
        <p className="signUp-mail-p"></p>

        {/* /////////////////////////////////////////////////// */}
        <label className="signUp-label" htmlFor="inputPassword">Contraseña</label>
        <section className="wrapper-password">
          <input
            id="inputPassword"
            className="signUp-pass"
            type="password"
            autoComplete="new-password"
            placeholder="Crea una contraseña"
            onFocus={() => cl._inputFocusIn('pass')}
            onBlur={() => cl._inputBlur('pass')}
            onChangeCapture={() => cl._emptyPassConfirm()}
          />
          <button
            className="btn-showPass"
            type="button"
            title="button show"
            onClick={() => cl._showPass('signUp-pass', 'btn-hidePass-svg', 'btn-showPass-svg')}
          >
            <IconShow />
            <IconHide />
          </button>
        </section>
        <p className="signUp-pass-p"></p>
        {/* /////////////////////////////////////////////////// */}

        <label className="signUp-label" htmlFor="sufcp">Confirmar contraseña</label>
        <div className="wrapper-password">
          <input
            id="sufcp"
            className="signUp-passConfirm"
            type="password"
            autoComplete="new-password"
            placeholder="Repite la contraseña"
            onFocus={() => cl._inputFocusIn('passConfirm')}
            onBlur={() => cl._inputBlur('passConfirm')}
            onKeyUp={() => cl._inputConfirmPassKeyUp()}
          />
          <button
            className="btn-showPassConfirm"
            title="button show"
            type="button"
            onClick={() => cl._showPass('signUp-passConfirm', 'btn-hidePassConfirm-svg', 'btn-showPassConfirm-svg')}
          >
            <IconShowConfirm />
            <IconHideConfirm />
          </button>
        </div>
        <p className="signUp-passConfirm-p"></p>

        <button type="submit" className="signUp-btnRegister" name="button to Register">Registrarme Ahora</button>

        <label className="signUp-labelGoSignIn" htmlFor="sufbsi">¿Ya tienes una cuenta? <button id="sufbsi" className="signUp-btnGoSignIn" onClick={goSignIn}>Inicia Sesión</button></label>

      </form>
    </section>
  )
};
