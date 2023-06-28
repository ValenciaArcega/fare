import firebaseApp from "../../credentials"
import NavBar from "../interface/NavBar"
import React, { useState, useEffect } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { Appearance } from "../interface/Appearance"
import { ClAppearance } from "../../classes/cl-appearance"
import { AddTask } from "../tasks/AddTask"
import { getAuth } from "firebase/auth"
import { signOut } from "firebase/auth"
import { Tasks } from "../tasks/Tasks"
import { Loader } from "../interface/Loader"

export const auth = getAuth(firebaseApp)

export function Home({ userMail }) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [name, setName] = useState(null)
  const [tasksArray, setTasksArray] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const firestore = getFirestore(firebaseApp)
  const day = new Date().getDate()
  const cl = new ClAppearance()
  const weekDay = new Date().toLocaleDateString("es-MX", { weekday: 'long' })
  const weekDayStr = weekDay.slice(0, 1).toUpperCase() + weekDay.slice(1).toLowerCase()
  const welcomeText = `Hoy es ${weekDayStr} ${(day === 1) ? '1ro' : day}. ¿Qué hay de nuevo?`

  function signUserOut() {
    signOut(auth)
    cl._makeLight()
  }

  function fixName(str) {
    return str.trim().split(' ')[0]
  }

  async function getUserName() {
    const docRef = doc(firestore, `users/${userMail}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      // get data from firebase
      const fullName = infoDoc.data[0].name
      const finalName = fixName(fullName)
      setName(finalName)
    }
  }

  async function findOrCreateDocument(idDocument) {
    const docRef = doc(firestore, `users/${idDocument}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      return infoDoc.tasks
    } else {
      return
    }
  }

  async function fetchTasks() {
    const fetchedTasks = await findOrCreateDocument(userMail)
    setTasksArray(fetchedTasks)
    setDataLoaded(true)
  }

  useEffect(function () {
    getUserName()
    fetchTasks()

    const x = window.matchMedia("(min-width: 624px)")
    setIsDesktop(x.matches)

    const handleResize = () => setIsDesktop(x.matches)
    x.addListener(handleResize)
    return () => x.removeListener(handleResize)
  }, [])

  return (
    dataLoaded
      ?
      <div>
        <NavBar />
        <Appearance />
        <section className="wrapper-welcomeText">
          <h1 className="gradientText welcomeText-h1">Hola {name}</h1>
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

        {!isDesktop ? <button className="btn-signOut-mobile" onClick={signUserOut}>Cerrar Sesión</button> : null}
      </div>
      : <Loader />
  )
}
