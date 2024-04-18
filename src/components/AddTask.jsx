/**
 * @overview The following component contains the modal element that allows
 the user to add a new idea into database.
 * @author ValenciaArcega
 */
import css from "../css/AddTask.module.css"
import { db, auth } from "../../dal/credentials"
import { updateDoc, doc } from "firebase/firestore"
import { useContext, useEffect, useRef, useState } from "react"
import { HiOutlineX } from "react-icons/hi"
import { HiMiniPlus } from "react-icons/hi2"
import { contextMessage } from "../context/messageContext"
import { contextTask } from "../context/taskContext"
import { useToast } from "../hooks/useToast"

export function AddTask({ setIsAdding }) {
	const emailUser = auth.currentUser?.email
	const textArea = useRef()

	const { toastSuccess, toastError } = useToast()
	const { tasksArray, setTasksArray } = useContext(contextTask)

	useEffect(() => textArea.current.focus(), [])

	return <article className={css.containerPopupAddTask}>
		<div onClick={() => setIsAdding(false)} className="overlay"></div>

		<form className={css.popupAddTask} onSubmit={addNewIdea}>
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
					onClick={() => setIsAdding(false)}
				>
					Cancelar
				</button>
				<button className={css.btnAddTask} type="submit">
					<HiMiniPlus size={24} color="#fff" />
					Agregar
				</button>
			</footer>
		</form>
	</article>

	async function addNewIdea(e) {
		e.preventDefault()
		try {
			let { title, description } = Object.fromEntries(new window.FormData(e.target))

			if (title.trim() == "") title = "💡"

			if (!description.trim() == "") {
				const documentReference = doc(db, `users/${emailUser}`)
				const newIdeasArray = [
					{
						id: crypto.randomUUID(),
						title: title,
						description: description,
					},
					...tasksArray,
				]

				await updateDoc(documentReference, { tasks: [...newIdeasArray] })
				setTasksArray(newIdeasArray)
				e.target.inputTitle.value = ""
				e.target.inputDescription.value = ""

				toastSuccess("Idea agregada")
				setIsAdding(false)
			} else {
				toastError("La descripción no puede estar vacía")
			}
		} catch {
			toastError("Error al agregar")
		}
	}
}
