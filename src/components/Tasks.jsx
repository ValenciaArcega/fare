/**
 * @overview Component with all tasks fetched from firestore.
 * @author ValenciaArcega
 */
import { updateDoc, doc } from "firebase/firestore"
import { db } from "../../dal/credentials"
import { useState } from "react"
import { Finder } from "./Finder"
import { TaskDeleted } from "./messages/TaskDeleted"
import { Copied } from "./messages/Copied"
import { IconCopy, IconTrashCan } from "./icons/tasks"
import { NoTaskSection } from './NoTaskSection'
/**
 * @param {object} tasksArray
 * @param {object} setTasksArray 
 */
export function Tasks({ tasksArray, setTasksArray }) {
	let identifier
	const [filteredItems, setFilteredItems] = useState(tasksArray)
	const [isSearching, setIsSearching] = useState(false)
	const [taskDeleted, setTaskDeleted] = useState(false)
	const [copiedText, setCopiedText] = useState(false)
	const lookFor = function (e) {
		setFilteredItems(
			tasksArray
				.filter(task => task.title.toLowerCase().includes(e.target.value.toLowerCase()))
		)
		setIsSearching(true)
	}

	const copyIdeaText = function (str) {
		navigator.clipboard.writeText(str)
			.then(() => {
				setCopiedText(true)
				setTimeout(() => setCopiedText(false), 3000)
			})
			.catch(err => console.error(err))
	}

	const closeDeleteMessage = function () {
		document.querySelector(".overlayDelete").classList.add("hidden")
		document.querySelector(".confirmDelete").classList.add("hidden")
	}

	const revealConfirmDelete = function () {
		document.querySelector(".confirmDelete").classList.remove("hidden")
		document.querySelector(".overlayDelete").classList.remove("hidden")
	}

	const deleteTask = async function (IDtoDelete) {
		setTaskDeleted(true)
		setTimeout(() => setTaskDeleted(false), 4500)

		const newIdeasArray = tasksArray.filter((task) => task.id !== IDtoDelete)
		const documentReference = doc(db, `users/${emailUser}`)
		await updateDoc(documentReference, { tasks: [...newIdeasArray] })
		setTasksArray(newIdeasArray)
		setFilteredItems(newIdeasArray)
	}

	return <main className="container-tasks">
		{taskDeleted ? <TaskDeleted /> : false}
		{copiedText ? <Copied /> : false}
		<Finder lookFor={lookFor} setIsSearching={setIsSearching} />

		{/* <h1 className="tasks-header-h1"><span className="highlight-container"><span className="highlight">Mis ideas</span></span></h1> */}

		<section className="tasks">
			{(filteredItems.length > 0 || tasksArray.length > 0)
				?
				(isSearching ? filteredItems : tasksArray).map(function (note, i) {
					return <main key={i}>
						<article className="task">
							<div className="taskDescription">
								<h2 className="task-title">{note.title}</h2>
								<p className="task-p">{note.description}</p>
							</div>
							<input
								className="btn-expandDescriptionTask"
								type="checkbox"
								aria-label="checkbox to collapse or exapand"
							/>
							<div className="wrapper-task-buttons">

								<button
									type="button"
									className="task__btn-complete"
									aria-label="Completada"
									onClick={() => {
										identifier = note.id
										revealConfirmDelete()
									}}>Completada</button>

								<button className="btn-copy" onClick={() => copyIdeaText(note.description)}>
									<IconCopy />
								</button>
							</div>
						</article>

						<div className="confirmDelete hidden">
							<h4 className="confirmDelete-h4">Eliminar Idea</h4>
							<p className="confirmDelete-p">
								Esta acción es permanente y no se puede deshacer
							</p>
							<button
								type="button"
								className="confirmDelete-btn-quitModal"
								onClick={closeDeleteMessage}>Cancelar</button>
							<button
								className="confirmDelete-btn-deleteTask"
								type="button"
								onClick={() => {
									deleteTask(identifier)
									closeDeleteMessage()
								}} >
								<IconTrashCan />
							</button>
						</div>
						<div className="overlayDelete hidden"></div>
					</main>
				})
				: <NoTaskSection />
			}
		</section>
	</main>
}
