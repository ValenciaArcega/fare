/**
 * @overview The following component contains the modal element that allows
 the user to add a new idea into database.
 * @author ValenciaArcega
 */
import { updateDoc, doc } from "firebase/firestore"
import { db, auth } from "../../dal/credentials"
import { FormEvent, useRef, useState } from "react"
import css from "../css/AddTask.module.css"
import { IconPlus } from "./icons/tasks"
import { Message } from "./messages/Message"
import { Caution } from "./icons/message"
import { IconVerified } from "./icons/message"
import { HiOutlinePlus } from "react-icons/hi2"

export function AddTask(tasksArray, setTasksArray) {
	const [areInputsEmpty, setAreInputsEmpty] = useState(false)
	const [taskAdded, setTaskAdded] = useState(false)
	const emailUser = auth.currentUser?.email
	const popupNewTask = useRef()
	const modal = useRef()

	return <article className={css.containerPopupAddTask}>
		<div ref={modal} onClick={closeModal} className="overlay hidden"></div>

		{areInputsEmpty && (
			<Message txt="Error al agregar. El título o descripción no pueden estar vacios">
				<Caution height={28} fill="#ff2c2c" />
			</Message>
		)}

		{taskAdded && (
			<Message txt="Idea agregada">
				<IconVerified height={28} fill="green" />
			</Message>
		)}

		<form ref={popupNewTask} className="modal-newTask hidden" onSubmit={popupAddTaskOnSubmit}>
			<header className={css.headerNewTask}>
				<h1>
					Nueva <span className="blueText">idea</span>.
				</h1>
			</header>

			<input
				id="inputTitle"
				className={css.inputTaskTitle}
				placeholder="Título"
				autoComplete="off"
				name="title"
			/>
			<textarea
				id="inputDescription"
				className={css.inputTaskDescription}
				placeholder="¿Qué hay en mente?"
				name="description"
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
					<HiOutlinePlus /> Agregar
				</button>
			</footer>
		</form>
	</article>

	async function popupAddTaskOnSubmit(e) {
		e.preventDefault()
		debugger

		const { title, description } = Object.fromEntries(new window.FormData(e.target))

		if (isInputsValueEmpty(title, description)) {
			const documentReference = doc(db, `users/${emailUser}`)
			const newIdeasArray = [
				{
					id: +new Date(),
					title: title,
					description: description,
				},
				{ ...tasksArray },
			]

			await updateDoc(documentReference, { tasks: [...newIdeasArray] })
			setTasksArray(newIdeasArray)
			// 💭 message success
			setTaskAdded(true)
			setTimeout(() => setTaskAdded(false), 4500)

			target.inputTitle.value = ""
			target.inputDescription.value = ""
		}
	}

	function isInputsValueEmpty(title, description) {
		if (title.trim() === "" || description.trim() === "") {
			setAreInputsEmpty(true)
			setTimeout(() => setAreInputsEmpty(false), 5000)
			return false
		}
		return true
	}

	function closeModal() {
		popupNewTask.current.classList.add("hidden")
		modal.current.classList.add("hidden")
	}
}
