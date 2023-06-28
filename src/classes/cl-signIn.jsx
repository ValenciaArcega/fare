
export class ClSignIn {
  root = document.documentElement.style;

  _inputFocusIn(str, icon) {
    this.root.setProperty(`--borderInput-signIn-${str}`, '#4263eb')
    this.root.setProperty(`--fr-svg-${icon}`, '#4263eb')
  }

  _inputBlur(str, icon) {
    this.root.setProperty(`--borderInput-signIn-${str}`, '#c5c5c5')
    this.root.setProperty(`--fr-svg-${icon}`, '#727272')
  }
}