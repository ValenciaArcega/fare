import { createContext, useState } from "react"

export const contextMessage = createContext()

export function MessageContext({ children }) {
	const [msgDone, setMsgDone] = useState("")
	const [msgError, setMsgError] = useState("")

	return <contextMessage.Provider value={{ msgDone, setMsgDone, msgError, setMsgError }}>
		{children}
	</contextMessage.Provider>
}
