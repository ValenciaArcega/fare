import React, { useState, useEffect } from "react";
import firebaseApp from "../credentials";
import AddTask from './tasks/AddTask';
import NavBar from "./navegation/NavBar";
import Tasks from './tasks/Tasks';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = function ({ userMail }) {
  // var
  const [tasksArray, setTasksArray] = useState(null);
  const fakeData = [
    { id: 1, description: 'Tarea de ejemplo' },
  ];
  // fn
  async function findOrCreateDocument(idDocument) {
    // create a reference of the document, after import 'doc' and 'getDoc'
    const docRef = doc(firestore, `users/${idDocument}`);
    // find the document (return a promise)
    const query = await getDoc(docRef);
    // check if exists
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
  // hooks
  useEffect(() => {
    async function fetchTasks() {
      const fetchedTasks = await findOrCreateDocument(userMail);
      setTasksArray(fetchedTasks);
    }
    fetchTasks();
  }, []);

  return (
    <div className="container-home">
      <NavBar userMail={userMail} />
      <AddTask tasksArray={tasksArray} userMail={userMail} setTasksArray={setTasksArray} />
      {tasksArray
        ? <Tasks tasksArray={tasksArray} userMail={userMail} setTasksArray={setTasksArray} />
        : null}
    </div>
  );
};

export default Home;
