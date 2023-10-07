/**
 * @overview Component with all tasks fetched from firestore.
 * @author Valencia Arcega Luis Angel
 */
import { updateDoc, doc } from "firebase/firestore"
import { db, auth } from "../../credentials"
import { useState } from "react"
import { Finder } from "../interface/Finder"
import { TaskDeleted } from "../messages/TaskDeleted"
import { Copied } from "../messages/Copied"
/**
 * @param {object} tasksArray
 * @param {object} setTasksArray 
 */
export function Tasks({ tasksArray, setTasksArray }) {
  let identifier
  const email = auth.currentUser.email
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
    const documentReference = doc(db, `users/${email}`)
    await updateDoc(documentReference, { tasks: [...newIdeasArray] })
    setTasksArray(newIdeasArray)
    setFilteredItems(newIdeasArray)
  }

  return <main className="container-tasks">

    {taskDeleted ? <TaskDeleted /> : false}
    {copiedText ? <Copied /> : false}
    <Finder lookFor={lookFor} setIsSearching={setIsSearching} />

    <h1 className="tasks-header-h1"><span className="highlight-container"><span className="highlight">Mis ideas</span></span></h1>

    <section className="tasks">
      {(isSearching ? filteredItems : tasksArray).map(function (note, i) {
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
                  className="task__btn-complete"
                  aria-label="Completada"
                  onClick={() => {
                    identifier = note.id
                    revealConfirmDelete()
                  }}>Completada</button>

                <button className="btn-copy" onClick={() => copyIdeaText(note.description)}>
                  <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                  </svg>
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
        )
      })}
    </section>
  </main>
}

function IconTrashCan() {
  return <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="currentColor" />
    <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="currentColor" />
  </svg>
}
