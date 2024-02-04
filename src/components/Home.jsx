/**
 * @overview Welcome component that fetch task and other functions such as Appearance.
 * @author Valencia Arcega Luis Angel
 */
import NavBar from "./NavBar"
import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { Appearance } from "./Appearance"
import { LoaderBar } from "./Loader"
import { db, auth } from "../../dal/credentials"
import { AddTask } from "./AddTask"
import { Tasks } from "./Tasks"
import { textoBienvenida } from "../functions/home"
import { signUserOut } from "../functions/sign"
import { calcViewPort } from "../functions/viewport"

export function Home() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [name, setName] = useState(null)
  const [tasksArray, setTasksArray] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const emailUser = auth.currentUser.email

  const fixName = str => str.trim().split(' ')[0]

  const getUserNameAndIdeas = async function () {
    try {
      const documentReference = await doc(db, `users/${emailUser}`)
      const query = await getDoc(documentReference)

      if (query.exists()) {
        const dataFromDB = await query.data()
        const fullName = dataFromDB.data[0].name
        const finalName = fixName(fullName)

        setName(finalName)
        setTasksArray(dataFromDB.tasks)
        setDataLoaded(true)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(function () {
    getUserNameAndIdeas()
    calcViewPort(setIsDesktop)
  }, [])

  return <>
    {dataLoaded
      ?
      <section>
        <Appearance />
        <NavBar />

        <header className="wrapper-welcomeText">
          <h1 className="welcomeText-h1"><span className="blueText">Hola</span> {name}</h1>
          <p className="welcomeText-p">{textoBienvenida}</p>
        </header>

        <AddTask tasksArray={tasksArray} setTasksArray={setTasksArray} />

        {tasksArray
          ? <Tasks tasksArray={tasksArray} setTasksArray={setTasksArray} /> : null}

        {!isDesktop ? <button className="btn-signOut-mobile" onClick={() => signUserOut(auth)}>Cerrar Sesión</button> : null}

      </section>
      :
      <LoaderBar />}
  </>
}
