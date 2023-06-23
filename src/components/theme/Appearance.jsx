import { IconMoon, IconSun } from "../svg/Appearance"
import { ClAppearance } from "../../classes/cl-appearance"

export function Appearance() {
  const cl = new ClAppearance()

  return (
    <>
      <button
        title="button of moon"
        type="button"
        className="btn-Dark"
        onClick={() => cl._makeDark()}>
        <IconMoon />
      </button>

      <button
        title="button of sun"
        type="button"
        className="btn-Light hidden"
        onClick={() => cl._makeLight()}>
        <IconSun />
      </button>
    </>
  )
};
