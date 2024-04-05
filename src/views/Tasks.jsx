import css from "../css/Tasks.module.css"
import { updateDoc, doc, getDoc } from "firebase/firestore"
import { auth, db } from "../../dal/credentials"
import { useContext, useRef, useState, useEffect } from "react"
import { Finder } from "../components/Finder"
import { HiMiniTrash } from "react-icons/hi2"
import { NoTaskSection } from "../components/NoTaskSection"
import { Message } from "../components/messages/Message"
import { Clipboard, IconVerified } from "../components/icons/message"
import { HiCheckBadge, HiOutlineStar } from "react-icons/hi2"
import { IoCopyOutline } from "react-icons/io5"
import { contextTask } from "../context/taskContext"
import { contextMessage } from "../context/messageContext"
import { LoaderBar } from "../components/Loader"
import { textoBienvenida } from "../functions/home"

export function Tasks() {
	const emailUser = auth.currentUser?.email

	const { tasksArray, setTasksArray } = useContext(contextTask)
	const { msgDone, setMsgDone } = useContext(contextMessage)

	const [filteredItems, setFilteredItems] = useState(tasksArray)
	const [isSearching, setIsSearching] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const [name, setName] = useState("")
	const [dataLoaded, setDataLoaded] = useState(false)


	useEffect(function () {
		getUserNameAndIdeas()
	}, [])

	return <>
		{dataLoaded && <main className={css.mainFare}>
			<header className={css.wrapperWelcomeText}>
				<h1>
					<span className="blueText">Hola</span> {name}
					<span className="blueText">.</span>
				</h1>
				<p>{textoBienvenida}</p>
			</header>

			{tasksArray && <main className={css.containerTasks}>
				{msgDone && (
					<Message txt="Idea eliminada">
						<IconVerified height={28} fill="green" />
					</Message>
				)}

				{msgDone && (
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
										onClick={togglePopup}
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

							{isDeleting && <>
								<dialog className={`${css.popupDeleteTask}`}>
									<h4>Eliminar Idea</h4>
									<p>Esta acción es permanente y no se puede deshacer</p>
									<footer>
										<button
											type="button"
											onClick={togglePopup}
										>Cancelar</button>
										<button
											title="Button to delete task"
											type="button"
											onClick={() => {
												deleteTask(note.id)
												togglePopup()
											}}>
											<HiMiniTrash size={26} color="#fff" />
										</button>
									</footer>
								</dialog>
								<div className={`${css.overlayDelete}`}></div>
							</>}
						</main>)
						: <NoTaskSection />}
				</section>
			</main>}
		</main>}
	</>

	function togglePopup() {
		setIsDeleting(!isDeleting)
	}

	function copyIdeaText(str) {
		navigator.clipboard
			.writeText(str)
			.then(() => {
				setMsgDone(true)
				setTimeout(() => setMsgDone(false), 3000)
			})
			.catch((err) => console.error(err))
	}

	function lookFor(e) {
		setFilteredItems(
			tasksArray.filter((task) =>
				task.description.toLowerCase().includes(e.target.value.toLowerCase()) || task.title.toLowerCase().includes(e.target.value.toLowerCase())
			)
		)
		setIsSearching(true)
	}

	async function getUserNameAndIdeas() {
		try {
			const documentReference = await doc(db, `users/${emailUser}`)
			const query = await getDoc(documentReference)

			if (query.exists()) {
				const dataFromDB = await query.data()
				const fullName = dataFromDB.data[0].name
				const finalName = fullName.trim().split(" ")[0]

				setName(finalName)
				setTasksArray(dataFromDB.tasks)
				setDataLoaded(true)
			}
		} catch (ex) {
			console.log(ex)
		}
	}

	async function deleteTask(IDtoDelete) {
		const newIdeasArray = tasksArray.filter(
			(task) => task.id !== IDtoDelete
		)
		const documentReference = doc(db, `users/${emailUser}`)
		await updateDoc(documentReference, { tasks: [...newIdeasArray] })
		setMsgDone(true)
		setTimeout(() => setMsgDone(false), 4500)
		setTasksArray(newIdeasArray)
		setFilteredItems(newIdeasArray)
	}
}
