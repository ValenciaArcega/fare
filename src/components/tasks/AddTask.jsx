import firebaseApp from "../../credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { EmptyInputTitle } from "../messages/EmptyInputTitle";
import { useState } from "react";

export function AddTask({ tasksArray, userMail, setTasksArray }) {
  const [isInputsEmpties, setIsInputsEmpties] = useState(false);
  const firestore = getFirestore(firebaseApp);

  function isInputsValueEmpty(title, des) {
    if (title.trim() === '' || des.trim() === '') {
      setIsInputsEmpties(true);
      setTimeout(() => setIsInputsEmpties(false), 5500);
      return false;
    }
    return true;
  }

  function closeModal() {
    document.querySelector(".modal-newTask").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  }

  // 1. get ID of the task from the map: {identificator} 
  // 2. pass the ID as a paramether in the edit function
  // 3. const fullName = infoDoc.data[0].name;
  async function addTask(e) {
    e.preventDefault();
    const title = e.target.inputTitle.value;
    const description = e.target.inputDescription.value;
    if (isInputsValueEmpty(title, description)) {
      const docRef = doc(firestore, `users/${userMail}`);
      const newTaskArr = [
        {
          id: +new Date(),
          title: title,
          description: description,
        },
        ...tasksArray
      ];

      updateDoc(docRef, { tasks: [...newTaskArr] });
      setTasksArray(newTaskArr);

      e.target.inputTitle.value = "";
      e.target.inputDescription.value = "";
    }
  }

  return (
    <div className="container-modal__NewTask">
      <div onClick={closeModal} className="overlay hidden"></div>

      {isInputsEmpties ? <EmptyInputTitle /> : false}

      <form className="modal-newTask hidden" onSubmit={addTask}>
        <h1 className="modal-newTask-h1">📚 Nueva tarea</h1>
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
          className="btn-blurCircle"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
