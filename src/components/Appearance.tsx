import { HiMiniMoon, HiSun } from "react-icons/hi2";

import { useAppearance } from "../hooks/useAppearance";


export function Appearance() {

  const { makeDark, makeLight, isDark } = useAppearance()

  return <button
    className={isDark ? "btn-Dark" : "btn-Light"}
    title={isDark ? "button of moon" : "button of sun"}
    type="button"
    onClick={() => !isDark ? makeDark() : makeLight()}
  >
    {!isDark
      ? <HiMiniMoon color="#181818" size={22} />
      : <HiSun color="yellow" size={26} />
    }
  </button>
}
