import firebaseApp from "../../credentials";
import NavBar from "../interface/NavBar";
import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Appearance } from "../theme/Appearance";
import { AddTask } from "../tasks/AddTask";
import { getAuth } from "firebase/auth";
import { Tasks } from "../tasks/Tasks";

export const auth = getAuth(firebaseApp);

export function Home({ userMail }) {
  const [name, setName] = useState(null);
  const [tasksArray, setTasksArray] = useState(null);
  const firestore = getFirestore(firebaseApp);
  const weekDay = new Date().toLocaleDateString("es-MX", { weekday: 'long' });
  const welcomeText = `Hoy es ${weekDay.slice(0, 1).toUpperCase() + weekDay.slice(1).toLowerCase() + ' ' + new Date().getDate()} ¿Alguna idea?`;

  function fixName(str) {
    const newText = str.trim().split(' ')[0];
    return newText.slice(0, 1).toUpperCase() + newText.slice(1).toLowerCase();
  }

  async function getUserName() {
    const docRef = doc(firestore, `users/${userMail}`);
    const query = await getDoc(docRef);
    if (query.exists()) {
      const infoDoc = query.data();
      // get data from firebase
      const fullName = infoDoc.data[0].name;
      const finalName = fixName(fullName);
      setName(finalName);
    }
  }

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

  async function fetchTasks() {
    const fetchedTasks = await findOrCreateDocument(userMail);
    setTasksArray(fetchedTasks);
  }

  useEffect(function () {
    getUserName();
    fetchTasks();
  }, []);

  return (
    <div>
      <NavBar />
      <Appearance />
      <section className="wrapper-welcomeText">
        <h1 className="welcomeText-h1">Hola {name}</h1>
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
