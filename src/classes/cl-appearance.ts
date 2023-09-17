/**
 @author Valencia Arcega Luis Angel
  * The following class allows to modify CSS variables (custom properties)
 with assistence of the root element avaliable in the DOM
 */

export class ClAppearance {
  // catching the root element of the DOM which contains
  root = document.documentElement.style;

  /* The following private methods will be call each time that the user
  click the moon/sun button, and will change some variables (backgrounds, 
  borders, foregrounds)  established on the root element in the 
  App.css to shade/tint or dark/light version */

  _makeDark() {
    const buttonAppearanceDark = document.querySelector('.btn-Dark') as HTMLElement
    const buttonAppearanceLight = document.querySelector('.btn-Light') as HTMLElement

    // switch between moon and sun buttons
    buttonAppearanceDark.classList.add('hidden')
    buttonAppearanceLight.classList.remove('hidden')

    this.root.setProperty('--mainColor', '#5573ed')
    this.root.setProperty('--black18', '#fff');;
    this.root.setProperty('--ff', '#363636')
    // foregrounds
    this.root.setProperty('--fr-btn-expand', '#fff')
    this.root.setProperty('--fr-btn-signOut-mobile', '#ff6868')
    // backgrounds
    this.root.setProperty('--bg-btn-expand', '#343333')
    this.root.setProperty('--bg', '#181818')
    this.root.setProperty('--bg-btn-signOut-mobile', '#141414')
    this.root.setProperty('--bg-modal', '#242424')
    this.root.setProperty('--bg-modal-input', '#262626')
    this.root.setProperty('--bg-modal-input-border', '#333333')
    this.root.setProperty('--bg-modal-inputTitle-border', '#333333')
    // this.root.setProperty('--bg-task', '#202020')
    this.root.setProperty('--bg-task', 'linear-gradient(180deg,#242424,#121212 65.62%)')
    this.root.setProperty('--bg-fadeEffect', 'transparent')

    this.root.setProperty('--bg-blur-navBar', 'rgba(27, 27, 27, 0.2)')
    // borders
    this.root.setProperty('--border-task', 'transparent')
    // shadows
    this.root.setProperty('--shadow-finder', 'transparent')
  }

  _makeLight() {
    const buttonAppearanceDark = document.querySelector('.btn-Dark') as HTMLElement
    const buttonAppearanceLight = document.querySelector('.btn-Light') as HTMLElement

    // switch between moon and sun buttons
    buttonAppearanceLight.classList.add('hidden')
    buttonAppearanceDark.classList.remove('hidden')

    this.root.setProperty('--mainColor', '#4263eb')
    this.root.setProperty('--black18', '#181818')
    this.root.setProperty('--ff', '#fff')
    // foregrounds
    this.root.setProperty('--fr-btn-expand', '#181818')
    this.root.setProperty('--fr-btn-signOut-mobile', '#DF0000')
    // backgrounds
    this.root.setProperty('--bg', '#f2f2f7')
    this.root.setProperty('--bg-btn-expand', '#f2f2f7')
    this.root.setProperty('--bg-btn-signOut-mobile', '#fff')
    this.root.setProperty('--bg-modal', '#f2f2f7')
    this.root.setProperty('--bg-modal-input', '#fff')
    this.root.setProperty('--bg-modal-input-border', '#c9c9c9')
    this.root.setProperty('--bg-modal-inputTitle-border', '#c9c9c9')
    this.root.setProperty('--bg-task', '#fff')
    this.root.setProperty('--bg-fadeEffect', '#fff')
    this.root.setProperty('--bg-blur-navBar', 'rgba(255, 255, 255, 0.4)')
    // borders
    this.root.setProperty('--border-task', '#c9c9c9')
    // shadows
    this.root.setProperty('--shadow-finder', '0px 20px 18px -18px rgba(21, 91, 166, 0.2)')
  }
} // class
