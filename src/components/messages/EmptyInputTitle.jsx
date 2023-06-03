import { Caution } from "../svg/Caution";

export function EmptyInputTitle() {
  return (
    <section className="message-emptyFormAddTak">
      <Caution />
      <p>Error al agregar. El titulo o descripción no pueden estar vacios</p>
    </section>
  );
}