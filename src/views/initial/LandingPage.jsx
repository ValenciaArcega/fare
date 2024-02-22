/**
 * @overview The following component renders the landing page
 avaliable for all users even if they are not registered, this
 is the main page to introduce "Fare"
 * @author ValenciaArcega
 */
import css from "../../css/LandingPage.module.css"
import { Link } from "react-router-dom"
import { IconPanLock, IconBulb, IconMagnify, IconSheets } from '../../components/icons/landing-page'

export function LandingPage() {
	return <section>
		<nav className={css.topBar}>
			<img src="logo.png" alt="brand logo" height={34} style={{ marginLeft: 10 }} />

			<aside className={css["topBar-wrapperSign"]}>
				<Link className={css.linkSignUp} to="/fare/SignUp">
					<IconSheets height={20} />
					Registrarme</Link>
				<Link to="/fare/Login" className={css.linkLogin}>
					Iniciar Sesión</Link>
			</aside>
		</nav>

		<header className={css.landingHeader}>
			<img src="faRe.svg" alt="Fare logo on landing page" />
			<h1 className={css.landingHeaderTitle}>Que las pequeñas o grandes ideas, nunca escapen</h1>
		</header>

		<main className={css.landingFeatures}>
			<h2 className={css.landingFeaturesTitle}>Guarda un Fare</h2>
			<p className={css.landingFeaturesDescription}>"Idea" ó "Quehacer" (<strong>Fare en italiano</strong>). Podrás guardar todas las tareas en un sólo lugar. Un espacio perfecto para que las ocurrencias se mantengan en el tiempo y las visites cuando quieras.</p>

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

		<footer className={css.footer}>&copy; 2024 Valencia Arcega</footer>
	</section>
}
