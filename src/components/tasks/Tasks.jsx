import { useState } from 'react';
import firebaseApp from "../../credentials";
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import { SearchIcon } from "../svg/Finder";

export function Tasks({ tasksArray, userMail, setTasksArray }) {
  const firestore = getFirestore(firebaseApp);
  const [filteredItems, setFilteredItems] = useState(tasksArray);

  function lookFor(e) {
    setFilteredItems(tasksArray.filter(item => item.description.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  function closeDeleteMessage() {
    document.querySelector('.overlayDelete').classList.add('hidden');
    document.querySelector('.confirmDelete').classList.add('hidden');
  };

  function RevealConfirmDelete() {
    document.querySelector('.confirmDelete').classList.remove('hidden');
    document.querySelector('.overlayDelete').classList.remove('hidden');
  };

  async function deleteTask(idTaskToDelete) {
    // create new task array
    const newTasksArray = tasksArray.filter((a) => a.id !== idTaskToDelete);

    // update database
    const docRef = doc(firestore, `users/${userMail}`);
    updateDoc(docRef, { tasks: [...newTasksArray] });
    // update state
    setTasksArray(newTasksArray);
  }

  return (
    <main className="container-tasks">
      <section className="containerFinder">
        <div className="finder">
          <SearchIcon />
          <input onChangeCapture={lookFor} className="finder-input" type="text" id="finder" />
        </div>
      </section>

      <h1 className="tasks-header-h1">Lista de tareas pendientes</h1>

      <div className="tasks">
        {filteredItems.map(a =>
          <div key={a.id}>
            <div className="task">
              <div className="taskDescription">
                <p className="task-p">{a.description}</p>
              </div>
              <input className="btn-expandDescriptionTask" type="checkbox" aria-label="checkbox to collapse or exapand" />
              <button className="task__btn-complete" onClick={RevealConfirmDelete}>Completada</button>
            </div>

            <div className="confirmDelete hidden">
              <h4 className="confirmDelete-h4">¿Eliminar la tarea?</h4>
              <p className="confirmDelete-p">Esta acción es permanente y no se puede deshacer</p>
              <button onClick={() => { deleteTask(a.id); closeDeleteMessage(); }} className="confirmDelete-btn-deleteTask">Eliminar Ahora</button>
              <button onClick={closeDeleteMessage} className="confirmDelete-btn-quitModal">Cancelar</button>
            </div>

            <div className="overlayDelete hidden"></div>
          </div>
        )}
      </div>
    </main>
  );
};
