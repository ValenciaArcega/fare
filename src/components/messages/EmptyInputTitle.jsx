/**
 * @author ValenciaArcega
 */
import { Caution } from "../icons/Caution"

export function EmptyInputTitle() {
  return <section className="message-emptyFormAddTak">
    <Caution />
    <p>Error al agregar. El título o descripción no pueden estar vacios</p>
  </section>
}
