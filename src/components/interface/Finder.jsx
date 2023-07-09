import { IconMagnifier, IconClose } from '../svg/Finder'

export function Finder({ lookFor, setIsSearching }) {
  return (
    <section className="section-finder">
      <form className="container-finder">
        <IconMagnifier />
        <input
          onChangeCapture={lookFor}
          className="input"
          placeholder="Buscar idea por título"
          type="text"
          autoComplete="off"
        />
        <button onClick={() => setIsSearching(false)} className="finder-btnClose" type="reset"> <IconClose /> </button>
      </form>
    </section>
  )
}