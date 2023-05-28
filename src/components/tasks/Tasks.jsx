import firebaseApp from "../../credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { Finder } from "../interface/Finder";

export function Tasks({ tasksArray, userMail, setTasksArray }) {
  const firestore = getFirestore(firebaseApp);
  const [filteredItems, setFilteredItems] = useState(tasksArray);
  const [isSearching, setIsSearching] = useState(false);
  let identificador;

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

  function revealConfirmDelete(some) {
    console.log(some);
    document.querySelector(".confirmDelete").classList.remove("hidden");
    document.querySelector(".overlayDelete").classList.remove("hidden");
  }

  function deleteTask(toDelete) {
    console.log(toDelete);
    const newTasksArray = tasksArray.filter((task) => task.id !== toDelete);
    // update database
    const docRef = doc(firestore, `users/${userMail}`);
    updateDoc(docRef, { tasks: [...newTasksArray] });
    // update state    
    setTasksArray(newTasksArray);
    setFilteredItems(newTasksArray);
  }

  return (
    <main className="container-tasks">

      <Finder lookFor={lookFor} setIsSearching={setIsSearching} />

      <h1 className="tasks-header-h1">Lista de tareas pendientes</h1>

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
                    revealConfirmDelete(note.id);
                    identificador = note.id;
                  }}
                >
                  Completada
                </button>

                <div className="confirmDelete hidden">
                  <h4 className="confirmDelete-h4">¿Eliminar la tarea?</h4>
                  <p className="confirmDelete-p" onClick={() => console.log(identificador)}>
                    Esta acción es permanente y no se puede deshacer
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      deleteTask(identificador);
                      closeDeleteMessage();
                    }}
                    className="confirmDelete-btn-deleteTask"
                  >
                    Eliminar Ahora
                  </button>

                  <button onClick={closeDeleteMessage} className="confirmDelete-btn-quitModal"
                  >Cancelar</button>
                </div>

                <div className="overlayDelete hidden"></div>

              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}