import React from "react";
import firebaseApp from "../../credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore";

export function AddTask({ tasksArray, userMail, setTasksArray }) {
  const firestore = getFirestore(firebaseApp);

  function closeModal() {
    document.querySelector(".modal-newTask").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  }

  async function addTask(e) {
    e.preventDefault();
    // create new task tasksArray
    const description = e.target.inputDescription.value;
    const title = e.target.inputTitle.value;
    const newTaskArr = [
      ...tasksArray,
      {
        title: title,
        description: description,
      },
    ];
    // update data base
    const docRef = doc(firestore, `users/${userMail}`);
    updateDoc(docRef, { tasks: [...newTaskArr] });
    //update the state
    setTasksArray(newTaskArr);
    // clean the form
    e.target.inputDescription.value = "";
  }

  return (
    <div className="container-modal__NewTask">
      <div onClick={closeModal} className="overlay hidden"></div>

      <form className="modal-newTask hidden" onSubmit={addTask}>
        <h1 className="modal-newTask-h1">Nueva tarea</h1>
        <input
          id="inputTitle"
          className="modal-newTask-title"
          placeholder="Titulo"
        />
        <textarea
          className="modal-newTask-description"
          id="inputDescription"
          placeholder="Descripción"
          type="text"
        />
        <button
          onClick={closeModal}
          className="modal-newTask-addButton"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
