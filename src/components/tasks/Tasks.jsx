import { db } from "../../credentials"
import { updateDoc, doc } from "firebase/firestore"
import { useState } from "react"
import { Finder } from "../interface/Finder"

export function Tasks({ tasksArray, userMail, setTasksArray }) {
  let identificador
  const [filteredItems, setFilteredItems] = useState(tasksArray)
  const [isSearching, setIsSearching] = useState(false)

  function lookFor(e) {
    setFilteredItems(
      tasksArray.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    )
    setIsSearching(true)
  }

  function closeDeleteMessage() {
    document.querySelector(".overlayDelete").classList.add("hidden")
    document.querySelector(".confirmDelete").classList.add("hidden")
  }

  function revealConfirmDelete() {
    document.querySelector(".confirmDelete").classList.remove("hidden")
    document.querySelector(".overlayDelete").classList.remove("hidden")
  }

  function deleteTask(toDelete) {
    const newTasksArray = tasksArray.filter((task) => task.id !== toDelete)
    const docRef = doc(db, `users/${userMail}`)
    updateDoc(docRef, { tasks: [...newTasksArray] })
    // update state    
    setTasksArray(newTasksArray)
    setFilteredItems(newTasksArray)
  }

  return (
    <main className="container-tasks">

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
                {/* <div className="wrapper-task-buttons"> */}
                <input
                  className="btn-expandDescriptionTask"
                  type="checkbox"
                  aria-label="checkbox to collapse or exapand"
                />
                <button
                  type="button"
                  className="btn-blurCircle"
                  onClick={() => {
                    identificador = note.id
                    revealConfirmDelete()
                  }}>Completada</button>
                {/* </div> */}
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
                    deleteTask(identificador)
                    closeDeleteMessage()
                  }} >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>

                  Eliminar
                </button>
              </div>
              <div className="overlayDelete hidden"></div>

            </main>
          )
        })}
      </section>
    </main>
  )
}