/**
 * @overview The following component contains the modal element that allows
 the user to add a new idea into database.
 * @author ValenciaArcega
 */
import css from "../css/AddTask.module.css"
import { db, auth } from "../../dal/credentials"
import { IconPlus } from "./icons/tasks"
import { Message } from "./messages/Message"
import { IconVerified } from "./icons/message"
import { updateDoc, doc } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { HiOutlineX } from "react-icons/hi"

export function AddTask({ tasksArray, setTasksArray, setIsAdding }) {
	const emailUser = auth.currentUser?.email

	const [msgError, setMsgError] = useState(false)
	const [msgDone, setMsgDone] = useState(false)

	const textArea = useRef()

	const addNewIdea = async function (e) {
		e.preventDefault()

		let { title, description } = Object.fromEntries(new window.FormData(e.target))
		if (title.trim() == "") title = "💡"

		if (!description.trim() == "") {
			const documentReference = doc(db, `users/${emailUser}`)
			const newIdeasArray = [
				{
					id: +new Date(),
					title: title,
					description: description,
				},
				...tasksArray,
			]

			await updateDoc(documentReference, { tasks: [...newIdeasArray] })
			setTasksArray(newIdeasArray)
			setMsgDone(true)
			setTimeout(() => setMsgDone(false), 4500)

			e.target.inputTitle.value = ""
			e.target.inputDescription.value = ""
		} else {
			setMsgError(true)
			setTimeout(() => setMsgError(false), 5000)
		}
	}
	useEffect(() => {
		textArea.current.focus()
	}, [])

	return <article className={css.containerPopupAddTask}>
		<div onClick={closeModal} className="overlay"></div>

		{msgError && (
			<Message txt="La descripción no puede estar vacía">
				<HiOutlineX size={28} color="#ff2c2c" />
			</Message>
		)}

		{msgDone && (
			<Message txt="Idea agregada">
				<IconVerified height={28} fill="green" />
			</Message>
		)}

		<form className="modal-newTask" onSubmit={addNewIdea}>
			<header className={css.headerNewTask}>
				<h1>
					Nueva <span className="blueText">idea</span>.
				</h1>
			</header>

			<input
				id="inputTitle"
				name="title"
				className={css.inputTaskTitle}
				placeholder="Título"
				autoComplete="off"
			/>
			<textarea
				id="inputDescription"
				name="description"
				ref={textArea}
				className={css.inputTaskDescription}
				placeholder="¿Qué hay en mente?"
			/>
			<footer className={css.footerBts}>
				<button
					type="button"
					className={css.btnCancelAddTask}
					onClick={closeModal}
				>
					Cancelar
				</button>
				<button className={css.btnAddTask} type="submit" onClick={closeModal}>
					<IconPlus /> Agregar
				</button>
			</footer>
		</form>
	</article>

	function closeModal() {
		setIsAdding(false)
	};
}
