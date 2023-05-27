import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../pages/Home";
import { makeLight } from "../../functions/switch-appearance";
import {
  IconPlus,
  IconSignOut,
  IconAddTaskMob,
  IconSignOutMob,
} from "../svg/NavBar";

function NavBarDesktop() {
  function showModal() {
    const modal = document.querySelector(".modal-newTask");
    const overlay = document.querySelector(".overlay");

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  return (
    <nav className="navBar-desktop">
      <h2 className="NVD-title">
        <span className="highlight-container">
          <span className="highlight">fare</span>
        </span>
      </h2>

      <div className="NVD-wrapperButtons">
        <button
          type="button"
          className="navBar-btn NBbtn-addTask"
          onClick={showModal}
        >
          <IconPlus />
          Agregar tarea
        </button>

        <button
          type="button"
          className="navBar-btn NBbtn-signout"
          onClick={() => {
            signOut(auth);
            makeLight();
          }}
        >
          <IconSignOut />
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}

function NavBarMobile() {
  function showModal() {
    const modal = document.querySelector(".modal-newTask");
    const overlay = document.querySelector(".overlay");

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  return (
    <div className="navBar-mobile">
      <button
        type="button"
        className="navBar__mobile-btn"
        onClick={() => {
          signOut(auth);
          makeLight();
        }}
      >
        <IconSignOutMob />
        Cerrar Sesión
      </button>
      <button
        type="button"
        className="navBar__mobile-btn navBar__mobile-btnAdd"
        onClick={showModal}
      >
        <IconAddTaskMob />
      </button>
      <button type="button" className="navBar__mobile-btn">
        Cuenta
      </button>
    </div>
  );
}

export default function NavBar() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const x = window.matchMedia("(min-width: 624px)");
    setIsDesktop(x.matches);

    const handleResize = () => setIsDesktop(x.matches);
    x.addListener(handleResize);

    return () => x.removeListener(handleResize);
  }, []);

  return <div> {isDesktop ? <NavBarDesktop /> : <NavBarMobile />} </div>;
}
