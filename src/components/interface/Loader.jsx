/**
 * @overview The following component renders the landing page
 avaliable for all users even if they are not registered, this
 is the main page to introduce "Fare"
 * @author Valencia Arcega Luis Angel
 */
export function LoaderBar() {
  return <section className="container-loaderBar">
    <img src="faRe.svg" alt="Fare logo on landing page" />
    <div className="loaderBar"></div>
  </section>
}
