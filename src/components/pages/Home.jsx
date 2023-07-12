import NavBar from "../interface/NavBar"
import { useState, useEffect } from "react"
import { ClAppearance } from "../../classes/cl-appearance"
import { doc, getDoc } from "firebase/firestore"
import { Appearance } from "../interface/Appearance"
import { db, auth } from "../../credentials"
import { AddTask } from "../tasks/AddTask"
import { signOut } from "firebase/auth"
import { LoaderBar } from "../interface/Loader"
import { Tasks } from "../tasks/Tasks"

export function Home() {
  const correo = auth.currentUser.email
  const [isDesktop, setIsDesktop] = useState(false)
  const [name, setName] = useState(null)
  const [tasksArray, setTasksArray] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const cl = new ClAppearance()
  const day = new Date().getDate()
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
    const docRef = doc(db, `users/${correo}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      const fullName = infoDoc.data[0].name
      const finalName = fixName(fullName)
      setName(finalName)
    }
  }

  async function findOrCreateDocument() {
    const docRef = doc(db, `users/${correo}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      return infoDoc.tasks
    } else return
  }

  async function fetchTasks() {
    const fetchedTasks = await findOrCreateDocument()
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
      <section>
        <NavBar />
        <Appearance />

        <header className="wrapper-welcomeText">
          <h1 className="welcomeText-h1">Hola {name}</h1>
          <p className="welcomeText-p">{welcomeText}</p>
        </header>

        <AddTask tasksArray={tasksArray} setTasksArray={setTasksArray} />

        {tasksArray
          ? <Tasks tasksArray={tasksArray} setTasksArray={setTasksArray} /> : null}

        {!isDesktop ? <button className="btn-signOut-mobile" onClick={signUserOut}>Cerrar Sesión</button> : null}

      </section>
      :
      <LoaderBar />
  )
}
