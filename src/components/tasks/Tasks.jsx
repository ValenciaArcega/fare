import React from 'react';
import firebaseApp from "../../credentials";
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

const Tasks = function ({ tasksArray, userMail, setTasksArray }) {

  const cancelAndCloseConfirmDelete = () => {
    document.querySelector('.confirmDelete').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  };

  const RevealConfirmDelete = () => {
    document.querySelector('.confirmDelete').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
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
    <div className="container-tasks">
      <h1 className="tasks-header__h1">Lista de tareas pendientes</h1>

      <div className="tasks">
        {tasksArray.map(function (a) {
          return (
            <>
              <div className="overlay hidden"></div>

              <div key={a.id} className="task">
                <div className="taskDescription">
                  <p className="task-p">{a.description}</p>
                </div>
                <input className="btn-expandDescriptionTask" type="checkbox" aria-label="checkbox to collapse or exapand" />
                <button className="task__btn-complete" onClick={RevealConfirmDelete}>Completada</button>
              </div>

              <div className="confirmDelete hidden">
                <h4 className="confirmDelete-h4">¿Eliminar la tarea?</h4>
                <p className="confirmDelete-p">Esta acción es permanente y no se puede deshacer</p>
                <button onClick={() => { deleteTask(a.id); cancelAndCloseConfirmDelete(); }} className="confirmDelete-btn-deleteTask">Eliminar Ahora</button>
                <button onClick={cancelAndCloseConfirmDelete} className="confirmDelete-btn-quitModal">Cancelar</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
