

import { useContext, createContext, useState } from "react"

export const contextMessage = createContext()

export function MessageContext({ children }) {
	const [msgDone, setMsgDone] = useState("")

	return <contextMessage.Provider value={msgDone}>
		{children}
	</contextMessage.Provider>
}
