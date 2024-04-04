import { createRoot } from "react-dom/client"
import { App } from "./src/App"
import { BrowserRouter } from "react-router-dom"
import { MessageContext } from "./src/context/messageContext"
import { TaskContext } from "./src/context/taskContext"

const root = createRoot(document.getElementById("app"))

root.render(<BrowserRouter>
	<TaskContext>
		<MessageContext>
			<App />
		</MessageContext>
	</TaskContext>
</BrowserRouter>)
