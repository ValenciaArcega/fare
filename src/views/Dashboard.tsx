/**
 * @overview Component view that fetch tasks and other functions such as Appearance.
 * @author ValenciaArcega
 */
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { LoaderBar } from "../components/Loader";
import { db, auth } from "../../dal/credentials";
import { AddTask } from "../components/AddTask";
import { Tasks } from "../components/Tasks";
import { textoBienvenida } from "../functions/home";
import { SidebarLg } from "../components/SidebarLg";
import css from "../css/Dashboard.module.css";
import { StateBool, StateStr, StateArrStr } from "../types/state";

export function Dashboard() {
  const [name, setName]: StateStr = useState("");
  const [tasksArray, setTasksArray]: StateArrStr = useState([""]);
  const [dataLoaded, setDataLoaded]: StateBool = useState(false);
  const emailUser = auth.currentUser?.email;
  const fixName = (str: string) => str.trim().split(" ")[0];

  const getUserNameAndIdeas = async function (): Promise<void> {
    try {
      const documentReference = await doc(db, `users/${emailUser}`);
      const query = await getDoc(documentReference);

      if (query.exists()) {
        const dataFromDB = await query.data();
        const fullName = dataFromDB.data[0].name;
        const finalName = fixName(fullName);

        setName(finalName);
        setTasksArray(dataFromDB.tasks);
        setDataLoaded(true);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(function () {
    getUserNameAndIdeas();
  }, []);

  return (
    <section className={css.containerFare}>
      <SidebarLg />
      {dataLoaded ? (
        <main className={css.mainFare}>
          <header className={css.wrapperWelcomeText}>
            <h1>
              <span className="blueText">Hola</span> {name}
              <span className="blueText">.</span>
            </h1>
            <p>{textoBienvenida}</p>
          </header>

          <AddTask tasksArray={tasksArray} setTasksArray={setTasksArray} />

          {tasksArray && (
            <Tasks tasksArray={tasksArray} setTasksArray={setTasksArray} />
          )}
        </main>
      ) : (
        <LoaderBar />
      )}
    </section>
  );
}
