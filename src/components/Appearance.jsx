import { HiMiniMoon, HiSun } from "react-icons/hi2"
import { useAppearance } from "../hooks/useAppearance"
import { useRef, useState } from "react"

export function Appearance() {
  const { toggleAppearance, isDark, checkBoxAppearance } = useAppearance()

  return <article className="wrapperAppearance">
    {!isDark
      ? <HiMiniMoon color="#181818" size={22} />
      : <HiSun color="yellow" size={26} />
    }
    <input
      ref={checkBoxAppearance}
      type="checkbox"
      title="Toogle appearance"
      onClick={toggleAppearance} />
  </article>

  // Legacy version 😀
  /* return <button
    className={isDark ? "btn-Dark" : "btn-Light"}
    title={isDark ? "button of moon" : "button of sun"}
    type="button"
    onClick={() => !isDark ? makeDark() : makeLight()}
  >
    {!isDark
      ? <HiMiniMoon color="#181818" size={22} />
      : <HiSun color="yellow" size={26} />
    }
  </button> */
}
