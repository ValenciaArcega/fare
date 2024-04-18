import './App.css'
import { auth } from "../dal/credentials"
import { RouterInitial } from "./routes/RouterInitial"
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { LoaderBar } from "./components/Loader"
import { RouterHome } from "./routes/RouterHome"
import { ToastContainer, } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'

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

	return <>
		<ToastContainer
			rtl={false}
			pauseOnHover
			stacked={true}
		/>
		{
			loader
				? <LoaderBar />
				: user
					? <RouterHome />
					: <RouterInitial />
		}
	</>
}
