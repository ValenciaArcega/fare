import firebaseApp from "../../credentials";
import NavBar from "../interface/NavBar";
import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Appearance } from "../theme/Appearance";
import { AddTask } from "../tasks/AddTask";
import { getAuth } from "firebase/auth";
import { Tasks } from "../tasks/Tasks";

export const auth = getAuth(firebaseApp);

export function Home({ userMail }) {
  const firestore = getFirestore(firebaseApp);
  const [tasksArray, setTasksArray] = useState(null);
  const fakeData = [
    {
      id: +new Date(),
      title: "Tarea de ejemplo",
      description:
        "Aqui podras agregar cualquier idea o pendiente que debas realizar, por ejemplo: Imprimir el reporte de Química para el Jueves 😀",
    },
  ];

  async function findOrCreateDocument(idDocument) {
    const docRef = doc(firestore, `users/${idDocument}`);
    const query = await getDoc(docRef);
    if (query.exists()) {
      const infoDoc = query.data();
      return infoDoc.tasks;
    } else {
      await setDoc(docRef, { tasks: [...fakeData] });
      const query = await getDoc(docRef);
      const infoDoc = query.data();
      return infoDoc.tasks;
    }
  }

  useEffect(() => {
    async function fetchTasks() {
      const fetchedTasks = await findOrCreateDocument(userMail);
      setTasksArray(fetchedTasks);
    }
    fetchTasks();
  }, []);

  return (
    <div className="container-home">
      <NavBar />
      <Appearance />
      <AddTask
        tasksArray={tasksArray}
        userMail={userMail}
        setTasksArray={setTasksArray}
      />
      {tasksArray ? (
        <Tasks
          tasksArray={tasksArray}
          userMail={userMail}
          setTasksArray={setTasksArray}
        />
      ) : null}
    </div>
  );
}
