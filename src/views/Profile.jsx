import { useSignOut } from "../sign/hooks/useSignOut"
import { useNavigate } from "react-router-dom"
import { useAppearance } from "../hooks/useAppearance"

export function Profile() {
	const navigation = useNavigate()
	const { root } = useAppearance()
	const { signUserOut } = useSignOut(navigation, root)

	return <section style={{ gridArea: "main" }}>
		<button onClick={signUserOut}>Cerrar Sesión</button>
	</section>
}
