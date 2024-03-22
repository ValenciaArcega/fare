import { useNavigate } from "react-router-dom"
import { auth } from "../../dal/credentials"
import { useAppearance } from "../hooks/useAppearance"
import { signOut } from "firebase/auth"

export function Profile() {
	const navigation = useNavigate()
	const { makeLight } = useAppearance()

	return <section>
		<button onClick={signUserOut}>Cerrar Sesión</button>
	</section>

	function signUserOut() {
		signOut(auth)
		makeLight()
		navigation("/fare/")
	}
}
