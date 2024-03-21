import { HiFaceFrown } from "react-icons/hi2";
import css from "../css/Tasks.module.css"

export function NoTaskSection() {
  return <section className={css.containerNoTasks}>
    <HiFaceFrown size={64} />
    <p>El baúl de ideas esta vacío. Da al botón de <span className="blueText">+</span> para agregar una idea</p>
  </section>
}