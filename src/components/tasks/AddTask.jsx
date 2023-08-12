/**
 * @overview The following component contains the modal element that allows
 the user to add a new idea into firestore.
 * @author Valencia Arcega Luis Angel
 */
import { EmptyInputTitle } from "../messages/EmptyInputTitle"
import { updateDoc, doc } from "firebase/firestore"
import { TaskAdded } from "../messages/TaskAdded"
import { db, auth } from "../../credentials"
import { useState } from "react"
/**
 * @param {object} tasksArray
 * @param {object} setTasksArray 
 */
export function AddTask({ tasksArray, setTasksArray }) {
  const email = auth.currentUser.email
  const [areInputsEmpty, setAreInputsEmpty] = useState(false)
  const [taskAdded, setTaskAdded] = useState(false)
  /**
   * @param {string} title Will be review, to avoid empty entry
   * @param {string} description Will be review, to avoid empty entry
   */
  const isInputsValueEmpty = function (title, description) {
    if (title.trim() === '' || description.trim() === '') {
      setAreInputsEmpty(true)
      setTimeout(() => setAreInputsEmpty(false), 5000)
      return false
    }
    return true
  }

  const closeModal = function () {
    document.querySelector(".modal-newTask").classList.add("hidden")
    document.querySelector(".overlay").classList.add("hidden")
  }
  /**
   * @param {object} e Get the event itself and stored to can
   prevent the default behavior in a submit action form.
   */
  const addNewIdea = async function (e) {
    e.preventDefault()
    const fromUser_title = e.target.inputTitle.value
    const fromUser_description = e.target.inputDescription.value

    if (isInputsValueEmpty(fromUser_title, fromUser_description)) {
      const documentReference = doc(db, `users/${email}`)
      const newIdeasArray = [{
        id: +new Date(),
        title: fromUser_title,
        description: fromUser_description,
      },
      ...tasksArray
      ]

      await updateDoc(documentReference, { tasks: [...newIdeasArray] })
      setTasksArray(newIdeasArray)
      // 💭 message success
      setTaskAdded(true)
      setTimeout(() => setTaskAdded(false), 4500)

      e.target.inputTitle.value = ""
      e.target.inputDescription.value = ""
    }
  }

  return <div className="container-modal__NewTask">
    <div onClick={closeModal} className="overlay hidden"></div>

    {areInputsEmpty ? <EmptyInputTitle /> : false}
    {taskAdded ? <TaskAdded /> : false}

    <form className="modal-newTask hidden" onSubmit={addNewIdea}>
      <h1 className="modal-newTask-h1">Nueva idea</h1>
      <input
        id="inputTitle"
        className="modal-newTask-title"
        placeholder="Título o reacción 📚"
        autoComplete="off" />
      <textarea
        id="inputDescription"
        className="modal-newTask-description"
        placeholder="Descripción"
        type="text" />
      <button
        className="btn-addTask"
        type="submit"
        onClick={closeModal}>
        <IconPlus /> Agregar</button>
    </form>
  </div>
}

function IconPlus() {
  return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
}
