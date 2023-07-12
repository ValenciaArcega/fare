import { db, auth } from "../../credentials"
import { updateDoc, doc } from "firebase/firestore"
import { EmptyInputTitle } from "../messages/EmptyInputTitle"
import { TaskAdded } from "../messages/TaskAdded"
import { useState } from "react"

export function AddTask({ tasksArray, setTasksArray }) {
  const correo = auth.currentUser.email
  const [isInputsEmpties, setIsInputsEmpties] = useState(false)
  const [taskAdded, setTaskAdded] = useState(false)

  function isInputsValueEmpty(title, des) {
    if (title.trim() === '' || des.trim() === '') {
      setIsInputsEmpties(true)
      setTimeout(() => setIsInputsEmpties(false), 5500)
      return false
    }
    return true
  }

  function closeModal() {
    document.querySelector(".modal-newTask").classList.add("hidden")
    document.querySelector(".overlay").classList.add("hidden")
  }

  // 1. get ID of the task from the map: {identificator} 
  // 2. pass the ID as a paramether in the edit function
  // 3. const fullName = infoDoc.data[0].name;
  async function addTask(e) {
    e.preventDefault()
    const title = e.target.inputTitle.value
    const description = e.target.inputDescription.value

    goTop()

    if (isInputsValueEmpty(title, description)) {
      const docRef = doc(db, `users/${correo}`)
      const newTaskArr = [{
        id: +new Date(),
        title: title,
        description: description,
      },
      ...tasksArray
      ]

      updateDoc(docRef, { tasks: [...newTaskArr] })
      setTasksArray(newTaskArr)
      setTaskAdded(true)
      setTimeout(() => setTaskAdded(false), 4500)

      e.target.inputTitle.value = ""
      e.target.inputDescription.value = ""
    }
  }

  return (
    <div className="container-modal__NewTask">
      <div onClick={closeModal} className="overlay hidden"></div>

      {isInputsEmpties ? <EmptyInputTitle /> : false}
      {taskAdded ? <TaskAdded /> : false}

      <form className="modal-newTask hidden" onSubmit={addTask}>
        <h1 className="modal-newTask-h1">Nueva idea</h1>
        <input
          id="inputTitle"
          className="modal-newTask-title"
          placeholder="Titulo"
          autoComplete="off"
        />
        <textarea
          className="modal-newTask-description"
          id="inputDescription"
          placeholder="Descripción"
          type="text"
        />
        <button
          onClick={closeModal}
          className="btn-addTask"
          type="submit"
        >
          <IconPlus />
          Agregar
        </button>
      </form>
    </div>
  )
}

function IconPlus() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
}
