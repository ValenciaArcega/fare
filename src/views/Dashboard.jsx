import { useState, useEffect, useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import { LoaderBar } from "../components/Loader"
import { db, auth } from "../../dal/credentials"
import { Tasks } from "../components/Tasks"
import { textoBienvenida } from "../functions/home"
import css from "../css/Dashboard.module.css"
import { Message } from "../components/messages/Message"
import { IconVerified } from "../components/icons/message"
import { contextTask } from "../context/taskContext"

export function Dashboard() {
  const emailUser = auth.currentUser?.email
  const [name, setName] = useState("")
  const [dataLoaded, setDataLoaded] = useState(false)

  const { tasksArray, setTasksArray } = useContext(contextTask)

  useEffect(function () {
    getUserNameAndIdeas()
  }, [])

  return <>
    {dataLoaded && <main className={css.mainFare}>
      <header className={css.wrapperWelcomeText}>
        <h1>
          <span className="blueText">Hola</span> {name}
          <span className="blueText">.</span>
        </h1>
        <p>{textoBienvenida}</p>
      </header>

      {tasksArray && <Tasks />}
    </main>}
  </>

  async function getUserNameAndIdeas() {
    try {
      const documentReference = await doc(db, `users/${emailUser}`)
      const query = await getDoc(documentReference)

      if (query.exists()) {
        const dataFromDB = await query.data()
        const fullName = dataFromDB.data[0].name
        const finalName = fullName.trim().split(" ")[0]

        setName(finalName)
        setTasksArray(dataFromDB.tasks)
        setDataLoaded(true)
      }
    } catch (ex) {
      console.log(ex)
    }
  }
}
