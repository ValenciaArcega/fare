/**
 * @overview The following component contains both appearance buttons 
 and call the private methods in cl-appearance file
 * @author Valencia Arcega Luis Angel
 */
import { IconMoon, IconSun } from "../svg/Appearance"
import { ClAppearance } from "../../classes/cl-appearance"

export function Appearance() {
  const classAppearance = new ClAppearance()

  return <>
    <button
      className="btn-Dark"
      title="button of moon"
      type="button"
      onClick={() => classAppearance._makeDark()}>
      <IconMoon />
    </button>

    <button
      className="btn-Light hidden"
      title="button of sun"
      type="button"
      onClick={() => classAppearance._makeLight()}>
      <IconSun />
    </button>
  </>
}