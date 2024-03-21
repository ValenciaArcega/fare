/**
 * @overview Component with all tasks fetched from firestore.
 * @author ValenciaArcega
 */
import css from "../css/Tasks.module.css"
import { updateDoc, doc } from "firebase/firestore"
import { auth, db } from "../../dal/credentials"
import { useRef, useState } from "react"
import { Finder } from "./Finder"
import { HiMiniTrash } from "react-icons/hi2"
import { NoTaskSection } from "./NoTaskSection"
import { Message } from "./messages/Message"
import { Clipboard, IconVerified } from "./icons/message"
import { HiCheckBadge, HiOutlineStar } from "react-icons/hi2"
import { IoCopyOutline } from "react-icons/io5"

export function Tasks({ tasksArray, setTasksArray }) {
	let identifier
	const emailUser = auth.currentUser?.email

	const [filteredItems, setFilteredItems] = useState(tasksArray)
	const [isSearching, setIsSearching] = useState(false)
	const [taskDeleted, setTaskDeleted] = useState(false)
	const [copiedText, setCopiedText] = useState(false)

	const popupDeleteTask = useRef()
	const overlayDeleteTask = useRef()

	const lookFor = function (e) {
		setFilteredItems(
			tasksArray.filter((task) =>
				task.description.toLowerCase().includes(e.target.value.toLowerCase()) || task.title.toLowerCase().includes(e.target.value.toLowerCase())
			)
		)
		setIsSearching(true)
	}

	const copyIdeaText = function (str) {
		navigator.clipboard
			.writeText(str)
			.then(() => {
				setCopiedText(true)
				setTimeout(() => setCopiedText(false), 3000)
			})
			.catch((err) => console.error(err))
	}

	const deleteTask = async function (IDtoDelete) {
		setTaskDeleted(true)
		setTimeout(() => setTaskDeleted(false), 4500)

		const newIdeasArray = tasksArray.filter(
			(task) => task.id !== IDtoDelete
		)
		const documentReference = doc(db, `users/${emailUser}`)
		await updateDoc(documentReference, { tasks: [...newIdeasArray] })
		setTasksArray(newIdeasArray)
		setFilteredItems(newIdeasArray)
	}

	return <main className={css.containerTasks}>
		{taskDeleted && (
			<Message txt="Idea eliminada">
				<IconVerified height={28} fill="green" />
			</Message>
		)}

		{copiedText && (
			<Message txt="Copiado al portapapeles">
				<Clipboard height={28} stroke="green" />
			</Message>
		)}

		<Finder lookFor={lookFor} setIsSearching={setIsSearching} />

		<section className={css.wrapperTasks}>
			{filteredItems.length > 0 || tasksArray.length > 0
				? (isSearching ? filteredItems : tasksArray).map((note, i) => <main key={i}>
					<article className={css.task}>
						<main className={css.taskBody}>
							<h2>{note.title}</h2>
							<p>{note.description}</p>
						</main>
						<input
							className={css.btnToggleTask}
							type="checkbox"
							aria-label="checkbox to collapse or exapand"
						/>
						<footer className={css.wrapperTaskBtns}>
							<button
								type="button"
								className={css.btnFavorites}
								aria-label="Favoritos"
							>
								<HiOutlineStar size={26} />
							</button>

							<button
								type="button"
								className={css.btnCompleteTask}
								aria-label="Completada"
								onClick={() => {
									identifier = note.id
									toggleHidden()
								}}
							>
								<HiCheckBadge size={28} color="#fff" />
							</button>

							<button
								title="Button to copy body task"
								className={css.btnCopy}
								onClick={() => copyIdeaText(note.description)}
							>
								<IoCopyOutline size={24} />
							</button>
						</footer>
					</article>

					<dialog ref={popupDeleteTask} className={`${css.popupDeleteTask} hidden`}>
						<h4>Eliminar Idea</h4>
						<p>Esta acción es permanente y no se puede deshacer</p>
						<footer>
							<button
								type="button"
								onClick={toggleHidden}
							>Cancelar</button>
							<button
								title="Button to delete task"
								type="button"
								onClick={() => {
									deleteTask(identifier)
									toggleHidden()
								}}>
								<HiMiniTrash size={26} color="#fff" />
							</button>
						</footer>
					</dialog>
					<div ref={overlayDeleteTask} className={`${css.overlayDelete} hidden`}></div>
				</main>)
				: <NoTaskSection />}
		</section>
	</main>

	function toggleHidden() {
		popupDeleteTask.current.classList.toggle("hidden")
		overlayDeleteTask.current.classList.toggle("hidden")
	}
}
