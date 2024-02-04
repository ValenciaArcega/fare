/**
 * @overview The following component renders the landing page
 avaliable for all users even if they are not registered, this
 is the main page to introduce "Fare"
 * @author Valencia Arcega Luis Angel
 */
import css from "./LandingPage.module.css"
import { Link } from "react-router-dom"
import { IconPanLock, IconBulb, IconMagnify } from '../../components/icons/landing-page'

export function LandingPage() {
	return <section>

		<nav className={css.topBar}>
			<img src="logo.png" alt="brand logo" height={34} style={{ marginLeft: 10 }} />

			<aside className={css["topBar-wrapperSign"]}>
				<Link to="/fare/SignUp">Registrarme</Link>
				<Link to="/fare/Login">Iniciar Sesión</Link>
			</aside>
		</nav>

		<header className={css.landingHeader}>
			<img src="faRe.svg" alt="Fare logo on landing page" />
			<h1 className={css.landingHeaderTitle}>¡Que las ideas no escapen!</h1>
		</header>

		<main>
			<h2 className={css.landingFeaturesTitle}>Guarda un Fare</h2>
			<p className={css.landingFeaturesDescription}>"Idea" ó "Quehacer" (Fare en italiano). Podrás guardar esas pequeñas o grandes tareas en un sólo lugar. Un espacio perfecto para que las ocurrencias se mantengan en el tiempo y las visites cuando quieras.</p>

			<div className={css.landingWrapperFeatures}>
				<article className={css.landingFeature}>
					<IconPanLock />
					<h3>Sesiones</h3>
					<p>Solo tu, eres el autor intelectual de tu mente</p>
				</article>

				<article className={css.landingFeature}>
					<IconBulb />
					<h3>Instantánea</h3>
					<p>Captura y revisa tus ideas al momento de pensarlas</p>
				</article>

				<article className={css.landingFeature}>
					<IconMagnify />
					<h3>No pierdas nada</h3>
					<p>Busca entre tu mente con indexado de alta velocidad</p>
				</article>
			</div>

			<article className={css.fillGradient}></article>
		</main>
	</section>
}
