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
  let nombre;
  const date = new Date().toLocaleDateString("es-MX", { weekday: 'long' });
  const welcomeText = `Hoy es ${date.slice(0, 1).toUpperCase() + date.slice(1).toLowerCase() + ' ' + new Date().getDate()} ¿Alguna idea?`;
  const firestore = getFirestore(firebaseApp);
  const [tasksArray, setTasksArray] = useState(null);

  async function findOrCreateDocument(idDocument) {
    const docRef = doc(firestore, `users/${idDocument}`);
    const query = await getDoc(docRef);
    if (query.exists()) {
      const infoDoc = query.data();
      return infoDoc.tasks;
    } else {
      return;
    }
  }

  async function findUser() {
    const docRef = doc(firestore, `users/${userMail}`);
    const query = await getDoc(docRef);
    if (query.exists()) {
      const infoDoc = query.data();
      return infoDoc.data[0].name;
    }
  }

  useEffect(() => {
    async function fetchTasks() {
      nombre = await findUser();
      console.log(nombre);
      const fetchedTasks = await findOrCreateDocument(userMail);
      setTasksArray(fetchedTasks);
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <NavBar />
      <Appearance />
      <section className="wrapper-welcomeText">
        <h1 className="welcomeText-h1">Hola {nombre}</h1>
        <p className="welcomeText-p">{welcomeText}</p>
      </section>
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
