import { IconText, IconHashtag, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/IconsSignUp';
import { inputNameKeyUp, inputNameFocusIn, inputNameBlur, inputNumberFocusIn, inputNumberBlur, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister } from "../../functions/review-inputRegister";
import reviewRegister from "../../functions/review-userRegistration";
import firebaseApp from '../../credentials';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export function SignUp({ setIsRegistering }) {
  // var
  const auth = getAuth(firebaseApp);
  // fn
  async function submitHandler(e) {
    e.preventDefault();
    const mail = e.target.inputMail.value;
    const password = e.target.inputPassword.value;

    await createUserWithEmailAndPassword(auth, mail, password);
  }
  const resetBorders = () => {
    const root = document.querySelector(':root');
    root.style.setProperty('--borderFieldName', '#c5c5c5');
    root.style.setProperty('--borderFieldID', '#c5c5c5');
    root.style.setProperty('--borderFieldPassConfirm', '#c5c5c5');
  };
  const goSignIn = () => {
    resetBorders();
    setIsRegistering(false);
  };

  return (
    <section className="container-signUp">
      <form className="signUp" onSubmit={submitHandler}>

        <h1 className="signUp-title">Crea una cuenta <span className="gradient">gratis</span></h1>

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

        <button type="submit" onClick={reviewRegister} className="signUp-btnRegister" name="button to Register">Registrarme Ahora</button>

        <label className="signUp-labelGoSignIn" htmlFor="sufbsi">¿Ya tienes una cuenta? <button id="sufbsi" className="signUp-btnGoSignIn" onClick={goSignIn}>Inicia Sesión</button></label>

      </form>
    </section>
  );
};
