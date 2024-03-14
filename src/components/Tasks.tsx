/**
 * @overview Component with all tasks fetched from firestore.
 * @author ValenciaArcega
 */
import { updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../dal/credentials";
import { useState } from "react";
import { Finder } from "./Finder";
import { HiMiniTrash } from "react-icons/hi2";
import { NoTaskSection } from "./NoTaskSection";
import { Message } from "./messages/Message";
import { Clipboard, IconVerified } from "./icons/message";
import { HiCheckBadge, HiOutlineStar } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";

export function Tasks(tasks: {
	tasksArray: any[];
	setTasksArray: (newValue: any) => void;
}) {
	let identifier: number;
	const [filteredItems, setFilteredItems] = useState(tasks.tasksArray);
	const [isSearching, setIsSearching] = useState(false);
	const [taskDeleted, setTaskDeleted] = useState(false);
	const [copiedText, setCopiedText] = useState(false);
	const emailUser = auth.currentUser?.email;

	const lookFor = function (e: any) {
		setFilteredItems(
			tasks.tasksArray.filter((task) =>
				task.description.toLowerCase().includes(e.target.value.toLowerCase()) || task.title.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
		setIsSearching(true);
	};

	const copyIdeaText = function (str: string) {
		navigator.clipboard
			.writeText(str)
			.then(() => {
				setCopiedText(true);
				setTimeout(() => setCopiedText(false), 3000);
			})
			.catch((err) => console.error(err));
	};

	const closeDeleteMessage = function () {
		document.querySelector(".overlayDelete")?.classList.add("hidden");
		document.querySelector(".confirmDelete")?.classList.add("hidden");
	};

	const revealConfirmDelete = function () {
		document.querySelector(".confirmDelete")?.classList.remove("hidden");
		document.querySelector(".overlayDelete")?.classList.remove("hidden");
	};

	const deleteTask = async function (IDtoDelete: number) {
		setTaskDeleted(true);
		setTimeout(() => setTaskDeleted(false), 4500);

		const newIdeasArray: string[] = tasks.tasksArray.filter(
			(task) => task.id !== IDtoDelete
		);
		const documentReference = doc(db, `users/${emailUser}`);
		await updateDoc(documentReference, { tasks: [...newIdeasArray] });
		tasks.setTasksArray(newIdeasArray);
		setFilteredItems(newIdeasArray);
	};

	return (
		<main className="container-tasks">
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
			{/* @ts-ignore */}
			<Finder lookFor={lookFor} setIsSearching={setIsSearching} />

			<section className="tasks">
				{filteredItems.length > 0 || tasks.tasksArray.length > 0 ? (
					(isSearching ? filteredItems : tasks.tasksArray).map(function (
						note,
						i
					) {
						return (
							<main key={i}>
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
											className="btn-copy"
											aria-label="Favoritos"
										>
											<HiOutlineStar size={26} />
										</button>

										<button
											type="button"
											className="task__btn-complete"
											aria-label="Completada"
											onClick={() => {
												identifier = note.id;
												revealConfirmDelete();
											}}
										>
											<HiCheckBadge size={28} color="#fff" />
										</button>

										<button
											title="Button to copy body task"
											className="btn-copy"
											onClick={() => copyIdeaText(note.description)}
										>
											<IoCopyOutline size={24} />
										</button>
									</div>
								</article>

								<div className="confirmDelete hidden">
									<h4>Eliminar Idea</h4>
									<p>
										Esta acción es permanente y no se puede deshacer
									</p>
									<footer>
										<button
											type="button"
											onClick={closeDeleteMessage}
										>Cancelar</button>
										<button
											title="Button to delete task"
											type="button"
											onClick={() => {
												deleteTask(identifier);
												closeDeleteMessage();
											}}>
											<HiMiniTrash size={26} color="#fff" />
										</button>
									</footer>
								</div>
								<div className="overlayDelete hidden"></div>
							</main>
						);
					})
				) : (
					<NoTaskSection />
				)}
			</section>
		</main>
	);
}
