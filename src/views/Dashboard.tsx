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
import { signUserOut } from "../functions/sign";
import { calcViewPort } from "../functions/viewport";
import { ClAppearance } from "../classes/cl-appearance";
import { useNavigate } from "react-router-dom";
import { SidebarLg } from "../components/SidebarLg";
import css from "../css/Dashboard.module.css";
import { StateBool, StateStr, StateArrStr } from "../types/state";

export function Dashboard() {
  const [isDesktop, setIsDesktop]: StateBool = useState(false);
  const [name, setName]: StateStr = useState("");
  const [tasksArray, setTasksArray]: StateArrStr = useState([""]);
  const [dataLoaded, setDataLoaded]: StateBool = useState(false);
  const emailUser = auth.currentUser?.email;
  const classAppearance = new ClAppearance();
  const fixName = (str: string) => str.trim().split(" ")[0];
  const navigation = useNavigate();

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
    calcViewPort(setIsDesktop);
  }, []);

  return (
    <section className={css.containerFare}>
      <SidebarLg />
      {dataLoaded ? (
        <main className={css.mainFare}>
          {/* <Appearance /> */}
          {/* <NavBar /> */}

          <header className="wrapper-welcomeText">
            <h1 className="welcomeText-h1">
              <span className="blueText">Hola</span> {name}
            </h1>
            <p className="welcomeText-p">{textoBienvenida}</p>
          </header>

          <AddTask tasksArray={tasksArray} setTasksArray={setTasksArray} />

          {tasksArray ? (
            <Tasks tasksArray={tasksArray} setTasksArray={setTasksArray} />
          ) : null}

          {!isDesktop ? (
            <button
              className="btn-signOut-mobile"
              onClick={() => {
                signUserOut(auth);
                classAppearance._makeLight();
                navigation("/fare/");
              }}
            >
              Cerrar Sesión
            </button>
          ) : null}
        </main>
      ) : (
        <LoaderBar />
      )}
    </section>
  );
}
