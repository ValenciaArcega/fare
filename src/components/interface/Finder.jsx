/**
 * @overview The following component renders the finder input which
 allows to the user filter items in the home screen
 * @author Valencia Arcega Luis Angel
 */
import { IconMagnifier, IconClose } from '../svg/Finder'

/**
 * @param {Object: function} lookFor Return just the filtered items
 * @param {Object: function} setIsSearching Change the state to know if the user is serching or not
 */
export function Finder({ lookFor, setIsSearching }) {
  return <section className="section-finder">
    <form className="container-finder">
      <IconMagnifier />
      <input
        className="input"
        placeholder="Buscar idea por título"
        type="text"
        autoComplete="off"
        onChangeCapture={lookFor}
      />
      <button
        className="finder-btnClose"
        type="reset"
        onClick={() => setIsSearching(false)}>
        <IconClose />
      </button>
    </form>
  </section>
}
