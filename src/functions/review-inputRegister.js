
let root = document.querySelector(':root');

////////////////////////////////////////////////////////////
// input name
const inputNameFocusIn = () => root.style.setProperty('--border-inputName', '#0ca678');
const inputNameBlur = () => root.style.setProperty('--border-inputName', '#c5c5c5');
const inputNameKeyUp = () => {
  let root = document.querySelector(':root');
  const inputName = document.querySelector('.signUp-name');
  const textErrorName = document.querySelector('.signUp-name-p');

  for (let i = 0; i < inputName.value.length; i++) {
    root.style.setProperty('--border-inputName', '#0ca678');
    if (inputName.value[i].match(/^[0-9]+$/)) {
      textErrorName.textContent = 'Recuerda, caracteres de tipo texto';
      root.style.setProperty('--border-inputName', '#f63737');
    } else {
      textErrorName.textContent = '';
    }
  }
  if (inputName.value === '') {
    textErrorName.textContent = '';
    root.style.setProperty('--border-inputName', '#0ca678');
  }
};

////////////////////////////////////////////////////////////
// input mail
const inputNumberFocusIn = () => root.style.setProperty('--border-inputID', '#0ca678');
const inputNumberBlur = () => root.style.setProperty('--border-inputID', '#c5c5c5');


////////////////////////////////////////////////////////////
// input password
const inputPassFocusIn = () => root.style.setProperty('--border-inputPass', '#0ca678');
const inputPassBlur = () => root.style.setProperty('--border-inputPass', '#c5c5c5');
const showPassRegister = () => {
  const inputPass = document.querySelector('.signUp-pass');
  //const btnShowPass = document.querySelector('.btn-showPass');
  const iconHidePass = document.querySelector('.btn-hidePass-svg');
  const iconShowPass = document.querySelector('.btn-showPass-svg');

  if (inputPass.type == "password") {
    inputPass.type = "text";
    iconHidePass.classList.remove('hidden');
    iconShowPass.classList.add('hidden');
  } else {
    inputPass.type = "password";
    iconShowPass.classList.remove('hidden');
    iconHidePass.classList.add('hidden');
  }
};

////////////////////////////////////////////////////////////
// input confirm password
const inputConfirmPassFocusIn = () => root.style.setProperty('--border-inputPassConfirm', '#0ca678');
const inputConfirmPassBlur = () => root.style.setProperty('--border-inputPassConfirm', '#c5c5c5');
const inputConfirmPassKeyUp = () => {

  const inputPass = document.querySelector('.signUp-pass');
  const inputPassConfirm = document.querySelector('.signUp-passConfirm');
  const textErrorPassConfirm = document.querySelector('.signUp-passConfirm-p');

  if (inputPassConfirm.value === inputPass.value) {
    textErrorPassConfirm.textContent = '';
    root.style.setProperty('--border-inputPassConfirm', 'green');
  } else {
    root.style.setProperty('--border-inputPassConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
};
const showConfirmRegister = () => {
  const inputPassConfirm = document.querySelector('.signUp-passConfirm');
  const iconShowPassConfirm = document.querySelector('.btn-showPassConfirm-svg');
  const iconHidePassConfirm = document.querySelector('.btn-hidePassConfirm-svg');

  if (inputPassConfirm.type === 'password') {
    inputPassConfirm.type = 'text';
    iconHidePassConfirm.classList.remove('hidden');
    iconShowPassConfirm.classList.add('hidden');
  } else {
    inputPassConfirm.type = 'password';
    iconShowPassConfirm.classList.remove('hidden');
    iconHidePassConfirm.classList.add('hidden');
  }
};

export { inputNameKeyUp, inputNameFocusIn, inputNameBlur, inputNumberFocusIn, inputNumberBlur, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister };
