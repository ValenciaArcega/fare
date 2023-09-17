/**
 @author Valencia Arcega Luis Angel
  * The following class allows modified CSS variables (custom properties)
 with assistence of the root element avaliable in the DOM
 */
export class ClSignIn {
  root = document.documentElement.style;

  /**
   * The following private methods going to review the name of the
  CSS variable to change when the user "focus in" or "focus out" the inputs
   * @param {string} str Name of the border variable to change color.
   * @param {string} icon Name of the icon foreground to change color.
   */
  _inputFocusIn(str: string, icon: string) {
    this.root.setProperty(`--borderInput-signIn-${str}`, '#4263eb')
    this.root.setProperty(`--fr-svg-${icon}`, '#4263eb')
  }

  _inputBlur(str: string, icon: string) {
    this.root.setProperty(`--borderInput-signIn-${str}`, '#c5c5c5')
    this.root.setProperty(`--fr-svg-${icon}`, '#727272')
  }
}