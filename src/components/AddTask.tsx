/**
 * @overview The following component contains the modal element that allows
 the user to add a new idea into database.
 * @author ValenciaArcega
 */
import { updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../../dal/credentials";
import { FormEvent, useState } from "react";
import css from "../css/AddTask.module.css";
import { IconPlus } from "./icons/tasks";
import { Message } from "./messages/Message";
import { Caution } from "./icons/message";
import { IconVerified } from "./icons/message";

export function AddTask(tasks: {
  tasksArray: string[];
  setTasksArray: (newValue: any) => void;
}) {
  const [areInputsEmpty, setAreInputsEmpty] = useState(false);
  const [taskAdded, setTaskAdded] = useState(false);
  const emailUser = auth.currentUser?.email;

  const isInputsValueEmpty = function (title: string, description: string) {
    if (title.trim() === "" || description.trim() === "") {
      setAreInputsEmpty(true);
      setTimeout(() => setAreInputsEmpty(false), 5000);
      return false;
    }
    return true;
  };

  const closeModal = function () {
    document.querySelector(".modal-newTask")?.classList.add("hidden");
    document.querySelector(".overlay")?.classList.add("hidden");
  };

  const addNewIdea = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      inputTitle: { value: string };
      inputDescription: { value: string };
    };
    const fromUser_title = target.inputTitle.value;
    const fromUser_description = target.inputDescription.value;

    if (isInputsValueEmpty(fromUser_title, fromUser_description)) {
      const documentReference = doc(db, `users/${emailUser}`);
      const newIdeasArray = [
        {
          id: +new Date(),
          title: fromUser_title,
          description: fromUser_description,
        },
        ...tasks.tasksArray,
      ];

      await updateDoc(documentReference, { tasks: [...newIdeasArray] });
      tasks.setTasksArray(newIdeasArray);
      // 💭 message success
      setTaskAdded(true);
      setTimeout(() => setTaskAdded(false), 4500);

      target.inputTitle.value = "";
      target.inputDescription.value = "";
    }
  };

  return (
    <article className={css.containerPopupAddTask}>
      <div onClick={closeModal} className="overlay hidden"></div>

      {areInputsEmpty && (
        <Message txt="Error al agregar. El título o descripción no pueden estar vacios">
          <Caution height={28} fill="#ff2c2c" />
        </Message>
      )}

      {taskAdded && (
        <Message txt="Idea agregada">
          <IconVerified height={28} fill="green" />
        </Message>
      )}

      <form className="modal-newTask hidden" onSubmit={addNewIdea}>
        <header className={css.headerNewTask}>
          <h1>
            Nueva <span className="blueText">idea</span>.
          </h1>
        </header>

        <input
          id="inputTitle"
          className={css.inputTaskTitle}
          placeholder="Título"
          autoComplete="off"
        />
        <textarea
          id="inputDescription"
          className={css.inputTaskDescription}
          placeholder="¿Qué hay en mente?"
        />
        <button className={css.btnAddTask} type="submit" onClick={closeModal}>
          <IconPlus /> Agregar
        </button>
      </form>
    </article>
  );
}
