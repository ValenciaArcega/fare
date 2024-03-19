import { createRoot } from "react-dom/client"
import { App } from "./src/App"
import { BrowserRouter } from "react-router-dom"
import { MessageContext } from "./src/context/messageContext"

const root = createRoot(document.getElementById("app"))

root.render(<BrowserRouter>
	<MessageContext>
		<App />
	</MessageContext>
</BrowserRouter>)
