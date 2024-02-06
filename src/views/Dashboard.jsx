/**
 * @overview Welcome component that fetch task and other functions such as Appearance.
 * @author Valencia Arcega Luis Angel
 */
import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { Appearance } from "../components/Appearance"
import { LoaderBar } from "../components/Loader"
import { db, auth } from "../../dal/credentials"
import { AddTask } from "../components/AddTask"
import { Tasks } from "../components/Tasks"
import { textoBienvenida } from "../functions/home"
import { signUserOut } from "../functions/sign"
import { calcViewPort } from "../functions/viewport"
import { ClAppearance } from "../classes/cl-appearance"
import { useNavigate } from "react-router-dom"

export function Dashboard() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [name, setName] = useState(null)
  const [tasksArray, setTasksArray] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const emailUser = auth.currentUser.email
  const classAppearance = new ClAppearance()
  const fixName = str => str.trim().split(' ')[0]
  const navigation = useNavigate()

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

        {!isDesktop ? <button className="btn-signOut-mobile" onClick={() => {
          signUserOut(auth)
          classAppearance._makeLight()
          navigation("/fare/")
        }}>Cerrar Sesión</button> : null}

      </section>
      :
      <LoaderBar />}
  </>
}
