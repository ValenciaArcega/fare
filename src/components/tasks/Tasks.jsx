import firebaseApp from "../../credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { Finder } from "../interface/Finder";

export function Tasks({ tasksArray, userMail, setTasksArray }) {
  let identificador;
  const firestore = getFirestore(firebaseApp);
  const [filteredItems, setFilteredItems] = useState(tasksArray);
  const [isSearching, setIsSearching] = useState(false);

  function lookFor(e) {
    setFilteredItems(
      tasksArray.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setIsSearching(true);
  }

  function closeDeleteMessage() {
    document.querySelector(".overlayDelete").classList.add("hidden");
    document.querySelector(".confirmDelete").classList.add("hidden");
  }

  function revealConfirmDelete() {
    document.querySelector(".confirmDelete").classList.remove("hidden");
    document.querySelector(".overlayDelete").classList.remove("hidden");
  }

  function deleteTask(toDelete) {
    const newTasksArray = tasksArray.filter((task) => task.id !== toDelete);
    const docRef = doc(firestore, `users/${userMail}`);
    updateDoc(docRef, { tasks: [...newTasksArray] });
    // update state    
    setTasksArray(newTasksArray);
    setFilteredItems(newTasksArray);
  }

  return (
    <main className="container-tasks">

      <Finder lookFor={lookFor} setIsSearching={setIsSearching} />

      <h1 className="tasks-header-h1"><span className="highlight-container"><span className="highlight">Lista de tareas pendientes</span></span></h1>

      <div className="tasks">
        {(isSearching ? filteredItems : tasksArray).map(function (note, i) {
          return (
            <div key={i}>
              <div className="task">
                <div className="taskDescription">
                  <p className="task-title">{note.title}</p>
                  <p className="task-p">{note.description}</p>
                </div>
                <input
                  className="btn-expandDescriptionTask"
                  type="checkbox"
                  aria-label="checkbox to collapse or exapand"
                />
                <button
                  className="task__btn-complete"
                  onClick={() => {
                    identificador = note.id;
                    revealConfirmDelete();
                  }}
                >
                  Completada
                </button>
              </div>

              <div className="confirmDelete hidden">
                <h4 className="confirmDelete-h4">¿Tarea completada?</h4>
                <p className="confirmDelete-p">
                  Esta acción es permanente y no se puede deshacer
                </p>
                <button
                  className="confirmDelete-btn-deleteTask"
                  type="button"
                  onClick={() => {
                    deleteTask(identificador);
                    closeDeleteMessage();
                  }}
                >
                  Eliminar Ahora
                </button>

                <button onClick={closeDeleteMessage} className="confirmDelete-btn-quitModal"
                >
                  Cancelar
                </button>
              </div>
              <div className="overlayDelete hidden"></div>

            </div>
          );
        })}
      </div>
    </main>
  );
}