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
                <h4 className="confirmDelete-h4">¿Tarea completada?</h4>
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
                  }} >Si. Eliminar</button>
              </div>
              <div className="overlayDelete hidden"></div>

            </main>
          )
        })}
      </section>
    </main>
  )
}