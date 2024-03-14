/**
 * @overview The following component renders the finder input which
 allows to the user filter items in the home screen
 * @author ValenciaArcega
 */
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2"

/**
 * @param {object} lookFor Return just the filtered items
 * @param {object} setIsSearching Change the state to know if the user is serching or not
 */
export function Finder({ lookFor, setIsSearching }) {
  return <section className="section-finder">
    <form className="container-finder">
      <HiMagnifyingGlass size={24} />
      <input
        className="input"
        placeholder="Buscar cualquier idea"
        type="text"
        autoComplete="off"
        onChangeCapture={lookFor}
      />
      <button
        className="finder-btnClose"
        type="reset"
        onClick={() => setIsSearching(false)}>
        <HiMiniXMark size={22} />
      </button>
    </form>
  </section>
}
