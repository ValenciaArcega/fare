import { createContext, useState } from "react"

export const contextTask = createContext()

export function TaskContext({ children }) {
	const [tasksArray, setTasksArray] = useState([""])

	return <contextTask.Provider value={{ tasksArray, setTasksArray }}>
		{children}
	</contextTask.Provider>
}