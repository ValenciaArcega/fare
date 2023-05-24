import React, { useState, useEffect } from "react";
import firebaseApp from "../../credentials";
import { AddTask } from '../tasks/AddTask';
import NavBar from "../interface/NavBar";
import { Tasks } from '../tasks/Tasks';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { Appearance } from '../theme/Appearance';
import { Finder } from "../interface/Finder";

export const auth = getAuth(firebaseApp);

export function Home({ userMail }) {
  const firestore = getFirestore(firebaseApp);
  const [tasksArray, setTasksArray] = useState(null);
  const fakeData = [
    { id: 1, description: 'Tarea de ejemplo, aqui podras agregar cualquier idea o pendiente que debas realizar 😀' },
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
      {/* <Finder /> */}
      <AddTask
        tasksArray={tasksArray}
        userMail={userMail}
        setTasksArray={setTasksArray}
      />
      {tasksArray
        ? <Tasks tasksArray={tasksArray} userMail={userMail} setTasksArray={setTasksArray} />
        : null}
    </div>
  );
};
