import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { LoaderBar } from "../components/Loader"
import { db, auth } from "../../dal/credentials"
import { AddTask } from "../components/AddTask"
import { Tasks } from "../components/Tasks"
import { textoBienvenida } from "../functions/home"
import css from "../css/Dashboard.module.css"
import { Message } from "../components/messages/Message"
import { HiOutlineX } from "react-icons/hi"
import { IconVerified } from "../components/icons/message"

export function Dashboard({ isAdding, setIsAdding }) {
  const emailUser = auth.currentUser?.email
  const [name, setName] = useState("")
  const [tasksArray, setTasksArray] = useState([""])
  const [dataLoaded, setDataLoaded] = useState(false)
  const [msgDone, setMsgDone] = useState("")
  const [msgError, setMsgError] = useState("")

  const fixName = (str) => str.trim().split(" ")[0]

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
  }, [])

  return <>
    {dataLoaded
      ?
      <main className={css.mainFare}>

        {msgError !== "" && <Message txt={msgError}>
          <HiOutlineX size={28} color="#ff2c2c" />
        </Message>}

        {msgDone !== "" && <Message txt={msgDone}>
          <IconVerified height={28} fill="green" />
        </Message>}

        <header className={css.wrapperWelcomeText}>
          <h1>
            <span className="blueText">Hola</span> {name}
            <span className="blueText">.</span>
          </h1>
          <p>{textoBienvenida}</p>
        </header>

        {isAdding && <AddTask tasksArray={tasksArray} setTasksArray={setTasksArray} setIsAdding={setIsAdding} setMsgDone={setMsgDone} setMsgError={setMsgError} />}

        {tasksArray && (
          <Tasks tasksArray={tasksArray} setTasksArray={setTasksArray} />
        )}
      </main>
      : <LoaderBar />}
  </>
}
