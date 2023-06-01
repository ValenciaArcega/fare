import { IconText, IconHashtag, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/SignUp';
import { inputNameKeyUp, inputNameFocusIn, inputNameBlur, inputNumberFocusIn, inputNumberBlur, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister } from "../../functions/review-inputRegister";
import { reviewRegister } from "../../functions/review-userRegistration";
import firebaseApp from '../../credentials';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

export function SignUp({ setIsRegistering }) {
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  function resetBorders() {
    const root = document.querySelector(':root');
    root.style.setProperty('--border-inputName', '#c5c5c5');
    root.style.setProperty('--border-inputID', '#c5c5c5');
    root.style.setProperty('--border-inputPassConfirm', '#c5c5c5');
  };

  function goSignIn() {
    resetBorders();
    setIsRegistering(false);
  };

  async function submitHandler(e) {
    e.preventDefault();
    const name = e.target.sufn.value;
    const mail = e.target.inputMail.value;
    const password = e.target.inputPassword.value;
    const dataUser = [
      {
        name: name,
        mail: mail,
      },
    ];
    const fakeData = [
      {
        id: +new Date(),
        title: "Tarea de ejemplo",
        description:
          "Aqui podras agregar cualquier idea o pendiente que debas realizar, por ejemplo: Imprimir el reporte de Química para el Jueves 😀",
      },
    ];
    const docRef = doc(firestore, `users/${mail}`);
    const query = await getDoc(docRef);

    if (!query.exists()) {
      await setDoc(docRef, { data: [...dataUser], tasks: [...fakeData] });
      if (reviewRegister()) await createUserWithEmailAndPassword(auth, mail, password);
    } else {
      return;
    }
  }

  return (
    <section className="container-signUp">
      <form className="signUp" onSubmit={submitHandler}>

        <h1 className="signUp-title">Crea una cuenta <span className="gradientText-one">gratis</span></h1>

        <label className="signUp-label" htmlFor="sufn">Nombre<IconText /></label>
        <input
          id="sufn"
          className="signUp-name"
          placeholder="Hernández Castillo Sasha"
          autoComplete="new-password"
          onFocus={inputNameFocusIn}
          onBlur={inputNameBlur}
          onKeyUp={inputNameKeyUp}
        />
        <p className="signUp-name-p"> </p>

        <label className="signUp-label" htmlFor="inputMail">Correo electrónico <IconHashtag /></label>
        <input
          id="inputMail"
          className="signUp-mail"
          placeholder="usuario@dominio.some"
          autoComplete="new-password"
          onFocus={inputNumberFocusIn}
          onBlur={inputNumberBlur}
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
            onBlur={inputPassBlur}
            onFocus={inputPassFocusIn}
          />
          <button onClick={showPassRegister} className="btn-showPass" type="button" title="button show">
            <IconShow />
            <IconHide />
          </button>
        </section>

        <section className="wrapper-textAdvicePass">
          <p className="signUp-pass-p">Una contraseña segura</p>
          <ul className="signUp-pass-ul">
            <li>◉ Tiene al menos 8 caracteres</li>
            <li>◉ Combinación de letras mayusculas, minusculas, números, etc.</li>
          </ul>
        </section>

        <label className="signUp-label" htmlFor="sufcp">Confirmar contraseña</label>
        <div className="wrapper-password">
          <input
            id="sufcp"
            className="signUp-passConfirm"
            type="password"
            autoComplete="new-password"
            placeholder="Repite la contraseña"
            onKeyUp={inputConfirmPassKeyUp}
            onFocus={inputConfirmPassFocusIn}
            onBlur={inputConfirmPassBlur}
          />
          <button onClick={showConfirmRegister} className="btn-showPassConfirm" type="button" title="button show">
            <IconShowConfirm />
            <IconHideConfirm />
          </button>
        </div>
        <p className="signUp-passConfirm-p"></p>

        <button type="submit" className="signUp-btnRegister" name="button to Register">Registrarme Ahora</button>

        <label className="signUp-labelGoSignIn" htmlFor="sufbsi">¿Ya tienes una cuenta? <button id="sufbsi" className="signUp-btnGoSignIn" onClick={goSignIn}>Inicia Sesión</button></label>

      </form>
    </section>
  );
};
