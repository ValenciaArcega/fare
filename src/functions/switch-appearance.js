export function makeDark() {
  const root = document.querySelector(':root');
  const btnDark = document.querySelector('.btn-Dark');
  const btnLight = document.querySelector('.btn-Light');

  btnDark.classList.add('hidden');
  btnLight.classList.remove('hidden');

  root.style.setProperty('--mainColor', '#1BE0A5');
  root.style.setProperty('--bg', '#181818');
  root.style.setProperty('--black18', '#fff');;
  root.style.setProperty('--ff', '#363636');
  // button expand
  root.style.setProperty('--bg__btn-expand', '#424242');
  root.style.setProperty('--color__btn-expand', '#fff');
  // modal add new task
  root.style.setProperty('--bg__modal', '#242424');
  root.style.setProperty('--bg__modal-input', '#262626');
  root.style.setProperty('--bg__modal-input-border', '#333333');
  root.style.setProperty('--bg__modal-inputTitle-border', '#333333');
  // task
  root.style.setProperty('--border__task', 'transparent');
};

export function makeLight() {
  const root = document.querySelector(':root');
  const btnDark = document.querySelector('.btn-Dark');
  const btnLight = document.querySelector('.btn-Light');

  btnLight.classList.add('hidden');
  btnDark.classList.remove('hidden');

  root.style.setProperty('--mainColor', '#0ca678');
  root.style.setProperty('--bg', '#f2f2f7');
  root.style.setProperty('--black18', '#181818');
  root.style.setProperty('--ff', '#fff');
  // button expand
  root.style.setProperty('--bg__btn-expand', '#f2f2f7');
  root.style.setProperty('--color__btn-expand', '#181818');
  // modal add new task
  root.style.setProperty('--bg__modal', '#f2f2f7');
  root.style.setProperty('--bg__modal-input', '#fff');
  root.style.setProperty('--bg__modal-input-border', '#c9c9c9');
  root.style.setProperty('--bg__modal-inputTitle-border', '#c9c9c9');
  // task
  root.style.setProperty('--border__task', '#c9c9c9');
};
