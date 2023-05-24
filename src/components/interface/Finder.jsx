import { SearchIcon } from "../svg/Finder";

export function Finder() {
  return (
    <section className="containerFinder">
      <div className="finder">
        <SearchIcon />
        <input className="finder-input" type="text" id="finder" />
      </div>
    </section>
  );
}