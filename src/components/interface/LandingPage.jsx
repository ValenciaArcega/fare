/**
 * @overview The following component renders the landing page
 avaliable for all users even if they are not registered, this
 is the main page to introduce "Fare"
 * @author Valencia Arcega Luis Angel
 */
import { IconPanLock, IconBulb, IconMagnify } from '../svg/LandingPage'

export function LandingPage() {
  return <section className="container-landing">
    <header className="landing-header">
      <img src="faRe.svg" alt="Fare logo on landing page" />
      <h1 className="landing-header-title">¡Que las ideas no escapen!</h1>
    </header>

    <main className="landing-features">
      <h2 className="landing-features-h2">Guarda un Fare</h2>
      <p className="landing-features-description">"Idea" ó "Quehacer" (Fare en italiano). Podrás guardar esas pequeñas o grandes tareas en un sólo lugar. Un espacio perfecto para que las ocurrencias se mantengan en el tiempo y las visites cuando quieras.</p>
      <div className="landing-wrapper-features">

        <article className="landing-feature">
          <IconPanLock />
          <h3>Sesiones</h3>
          <p>Solo tu, eres el autor intelectual de tu mente</p>
        </article>

        <article className="landing-feature">
          <IconBulb />
          <h3>Instantánea</h3>
          <p>Captura y revisa tus ideas al momento de pensarlas</p>
        </article>

        <article className="landing-feature">
          <IconMagnify />
          <h3>No pierdas nada</h3>
          <p>Busca entre tu mente con indexado de alta velocidad</p>
        </article>
      </div>

      <article className="fillGradient"></article>
    </main>
  </section>
}
