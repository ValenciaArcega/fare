export function reviewRegister() {
  let reviewed = false;

  const inputName = document.querySelector('.signUp-name');
  const inputID = document.querySelector('.signUp-mail');
  const inputPass = document.querySelector('.signUp-pass');
  const inputPassConfirm = document.querySelector('.signUp-passConfirm');

  const textErrorName = document.querySelector('.signUp-name-p');
  const textErrorID = document.querySelector('.signUp-mail-p');
  const textErrorPassConfirm = document.querySelector('.signUp-passConfirm-p');

  let root = document.querySelector(':root');
  let resultName = false;
  let resultID = false;
  let resultPass = false;

  /////////////////////////////////////////////////////////
  if (inputName.value === '') {
    root.style.setProperty('--border-inputName', '#f63737');
    textErrorName.textContent = 'El campo es obligatorio';
  } else if (inputName.value.match(/[0-9]/)) {
    root.style.setProperty('--border-inputName', '#f63737');
    textErrorName.textContent = 'Solo caracteres tipo texto';
  } else {
    resultName = true;
  }
  /////////////////////////////////////////////////////////
  if (inputID.value === '') {
    root.style.setProperty('--border-inputID', '#f63737');
    textErrorID.textContent = 'El campo es obligatorio';
  } else {
    resultID = true;
  }
  /////////////////////////////////////////////////////////
  if (inputPassConfirm.value === inputPass.value) {
    resultPass = true;
  } else {
    root.style.setProperty('--border-inputPassConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
  /////////////////////////////////////////////////////////
  if (resultName && resultID && resultPass) {
    return reviewed = true;
  }
  return reviewed;
};
