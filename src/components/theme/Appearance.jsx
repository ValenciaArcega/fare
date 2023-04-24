import { IconMoon, IconSun } from "../svg/Appearance";
import { makeDark, makeLight } from "../../functions/switch-appearance";

export function Appearance() {
  return (
    <>
      <button type="button" className="btn-Dark" onClick={makeDark}>
        <IconMoon />
      </button>

      <button type="button" className="btn-Light hidden" onClick={makeLight}>
        <IconSun />
      </button>
    </>
  );
};
