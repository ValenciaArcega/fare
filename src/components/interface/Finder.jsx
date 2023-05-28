import { IconMagnifier, IconClose } from '../svg/Finder';

export function Finder({ lookFor, setIsSearching }) {
  return (
    <section className="cn">
      <form className="container-finder">
        <IconMagnifier />
        <input
          onChangeCapture={lookFor}
          className="input"
          placeholder="Buscar por título"
          type="text"
          autoSave="off"
        />
        <button onClick={() => setIsSearching(false)} className="finder-btnClose" type="reset"> <IconClose /> </button>
      </form>
    </section>
  );
}