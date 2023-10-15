/**
 * @overview Welcome component that fetch task and other functions such as Appearance.
 * @author Valencia Arcega Luis Angel
 */
import NavBar from "./NavBar"
import { useState, useEffect } from "react"
import { ClAppearance } from "../classes/cl-appearance"
import { doc, getDoc } from "firebase/firestore"
import { Appearance } from "./Appearance"
import { LoaderBar } from "./Loader"
import { db, auth } from "../credentials"
import { AddTask } from "./AddTask"
import { signOut } from "firebase/auth"
import { Tasks } from "./Tasks"

export function Home() {
  const email = auth.currentUser.email
  const [isDesktop, setIsDesktop] = useState(false)
  const [name, setName] = useState(null)
  const [tasksArray, setTasksArray] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const classAppearance = new ClAppearance()
  const day = new Date().getDate()
  const weekDay = new Date().toLocaleDateString("es-MX", { weekday: 'long' })
  const weekDayStr = weekDay.slice(0, 1).toUpperCase() + weekDay.slice(1).toLowerCase()
  const welcomeText = `Hoy es ${weekDayStr} ${(day === 1) ? '1ro' : day}. ¿Algo nuevo?`
  /**
   * @param {string} str First name of the user that will be display.
   */
  const fixName = str => str.trim().split(' ')[0]

  const signUserOut = function () {
    signOut(auth)
    classAppearance._makeLight()
  }

  const getUserNameAndIdeas = async function () {
    const documentReference = doc(db, `users/${email}`)
    const query = await getDoc(documentReference)
    if (query.exists()) {
      const dataFromDB = query.data()
      // name to display
      const fullName = dataFromDB.data[0].name
      const finalName = fixName(fullName)
      setName(finalName)
      // ideas to display
      setTasksArray(dataFromDB.tasks)
      setDataLoaded(true)
    } else return
  }

  useEffect(function () {
    getUserNameAndIdeas()

    const x = window.matchMedia("(min-width: 624px)")
    setIsDesktop(x.matches)

    const handleResize = () => setIsDesktop(x.matches)
    x.addListener(handleResize)
    return () => x.removeListener(handleResize)
  }, [])

  return (
    <>
      {dataLoaded
        ?
        <section>
          <Appearance />
          <NavBar />

          <header className="wrapper-welcomeText">
            <h1 className="welcomeText-h1"><span className="blueText">Hola</span> {name}</h1>
            <p className="welcomeText-p">{welcomeText}</p>
          </header>

          <AddTask tasksArray={tasksArray} setTasksArray={setTasksArray} />

          {tasksArray
            ? <Tasks tasksArray={tasksArray} setTasksArray={setTasksArray} /> : null}

          {!isDesktop ? <button className="btn-signOut-mobile" onClick={signUserOut}>Cerrar Sesión</button> : null}

        </section>
        :
        <LoaderBar />}
    </>
  )
}
