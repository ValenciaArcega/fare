import { HiMiniMoon, HiSun } from "react-icons/hi2";

import { ClAppearance } from "../classes/cl-appearance";

export function Appearance() {
  const classAppearance = new ClAppearance();

  return (
    <div>
      <button
        className="btn-Dark"
        title="button of moon"
        type="button"
        onClick={() => classAppearance._makeDark()}
      >
        <HiMiniMoon color="#181818" size={22} />
      </button>

      <button
        className="btn-Light hidden"
        title="button of sun"
        type="button"
        onClick={() => classAppearance._makeLight()}
      >
        <HiSun color="yellow" size={26} />
      </button>
    </div>
  );
}
