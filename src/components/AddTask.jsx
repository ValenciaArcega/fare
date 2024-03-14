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

export function AddTask({ tasksArray, setTasksArray, setIsAdding, setMsgDone, setMsgError }) {
	const emailUser = auth.currentUser?.email

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
			e.target.inputTitle.value = ""
			e.target.inputDescription.value = ""

			setMsgDone("Idea agregada")
			setTimeout(() => setMsgDone(""), 3000)
			setIsAdding(false)
		} else {
			setMsgError("La descripción no puede estar vacía")
			setTimeout(() => setMsgError(""), 4500)
		}
	}

	useEffect(() => {
		textArea.current.focus()
	}, [])

	return <article className={css.containerPopupAddTask}>
		<div onClick={() => setIsAdding(false)} className="overlay"></div>

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
				onKeyDown={description_OnKeyDown}
			/>
			<footer className={css.footerBts}>
				<button
					type="button"
					className={css.btnCancelAddTask}
					onClick={() => setIsAdding(false)}
				>
					Cancelar
				</button>
				<button className={css.btnAddTask} type="submit">
					<IconPlus /> Agregar
				</button>
			</footer>
		</form>
	</article>

	function description_OnKeyDown(e) {
		if (e.ctrlKey && e.key === 'Enter') {

		}
	}
}
