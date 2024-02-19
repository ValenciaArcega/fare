import './App.css'
import { auth } from "../dal/credentials"
import { RouterInitial } from "./routes/RouterInitial"
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { LoaderBar } from "./components/Loader"
import { RouterDashboard } from "./routes/RouterDashboard"

export function App() {
	const [user, setUser] = useState(null)
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoader(false)
		}, 500)
		// original ==> }, 4000)
		onAuthStateChanged(auth, function (firebaseUser) {
			if (firebaseUser) {
				setUser(firebaseUser)
			} else {
				setUser(null)
			}
		})
	}, [])

	return <>{
		loader
			? <LoaderBar />
			: user
				? <RouterDashboard />
				: <RouterInitial />
	}</>
}
