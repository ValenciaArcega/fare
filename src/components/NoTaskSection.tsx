import { HiFaceFrown } from "react-icons/hi2";

export function NoTaskSection() {
  return <section className="no-task">
    <HiFaceFrown size={64} />
    <p>El baúl de ideas esta vacío. Da al botón de <span className="blueText">+</span> para agregar una idea</p>
  </section>
}