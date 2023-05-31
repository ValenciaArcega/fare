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
  root.style.setProperty('--bg__btn-expand', '#343333');
  root.style.setProperty('--color__btn-expand', '#fff');
  // modal add new task
  root.style.setProperty('--bg-modal', '#242424');
  root.style.setProperty('--bg-modal-input', '#262626');
  root.style.setProperty('--bg-modal-input-border', '#333333');
  root.style.setProperty('--bg-modal-inputTitle-border', '#333333');
  // task
  root.style.setProperty('--border__task', 'transparent');
  root.style.setProperty('--bg-task', '#202020');
  // shadows
  root.style.setProperty('--shadow-task', 'transparent');
  root.style.setProperty('--shadow-finder', 'transparent');
  // blur
  root.style.setProperty('--bg__blur-navBar', 'rgba(0, 0, 0, 0.4)');
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
  root.style.setProperty('--bg-modal', '#f2f2f7');
  root.style.setProperty('--bg-modal-input', '#fff');
  root.style.setProperty('--bg-modal-input-border', '#c9c9c9');
  root.style.setProperty('--bg-modal-inputTitle-border', '#c9c9c9');
  // task
  root.style.setProperty('--border__task', '#c9c9c9');
  root.style.setProperty('--bg-task', '#fff');
  // shadows
  root.style.setProperty('--shadow-finder', '0px 20px 18px -18px rgba(19, 144, 67, 0.4)');
  root.style.setProperty('--shadow-task', '0px 22px 16px -21px rgb(42 153 47 / 44%)');
  // blur
  root.style.setProperty('--bg__blur-navBar', 'rgba(255, 255, 255, 0.4)');
};
