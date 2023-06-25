export class ClAppearance {
  root = document.documentElement.style;

  _makeDark() {
    const btnDark = document.querySelector('.btn-Dark')
    const btnLight = document.querySelector('.btn-Light')

    btnDark.classList.add('hidden')
    btnLight.classList.remove('hidden')

    this.root.setProperty('--mainColor', '#1BE0A5')
    this.root.setProperty('--bg', '#181818')
    this.root.setProperty('--black18', '#fff');;
    this.root.setProperty('--ff', '#363636')
    // button expand
    this.root.setProperty('--bg-btn-expand', '#343333')
    this.root.setProperty('--fr-btn-expand', '#fff')
    // modal add new task
    this.root.setProperty('--bg-modal', '#242424')
    this.root.setProperty('--bg-modal-input', '#262626')
    this.root.setProperty('--bg-modal-input-border', '#333333')
    this.root.setProperty('--bg-modal-inputTitle-border', '#333333')
    // task
    this.root.setProperty('--border-task', 'transparent')
    this.root.setProperty('--bg-task', '#202020')
    // shadows
    this.root.setProperty('--shadow-finder', 'transparent')
    // blur
    this.root.setProperty('--bg-blur-navBar', 'rgba(0, 0, 0, 0.4)')
  }

  _makeLight() {
    const btnDark = document.querySelector('.btn-Dark')
    const btnLight = document.querySelector('.btn-Light')

    btnLight.classList.add('hidden')
    btnDark.classList.remove('hidden')

    this.root.setProperty('--mainColor', '#0ca678')
    this.root.setProperty('--bg', '#f2f2f7')
    this.root.setProperty('--black18', '#181818')
    this.root.setProperty('--ff', '#fff')
    // button expand
    this.root.setProperty('--bg-btn-expand', '#f2f2f7')
    this.root.setProperty('--fr-btn-expand', '#181818')
    // modal add new task
    this.root.setProperty('--bg-modal', '#f2f2f7')
    this.root.setProperty('--bg-modal-input', '#fff')
    this.root.setProperty('--bg-modal-input-border', '#c9c9c9')
    this.root.setProperty('--bg-modal-inputTitle-border', '#c9c9c9')
    // task
    this.root.setProperty('--border-task', '#c9c9c9')
    this.root.setProperty('--bg-task', '#fff')
    // shadows
    this.root.setProperty('--shadow-finder', '0px 20px 18px -18px rgba(19, 144, 67, 0.2)')
    // blur
    this.root.setProperty('--bg-blur-navBar', 'rgba(255, 255, 255, 0.4)')
  }
} // class