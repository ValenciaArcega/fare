/**
 * @overview The following component renders the navigation bar
 depending on the viewport size (Mobile NavBar or Desktop NavBar)
 * @author Valencia Arcega Luis Angel
 */
import React, { useEffect, useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../../credentials"
import { ClAppearance } from "../../classes/cl-appearance"
import { IconPlus, IconAddTaskMob } from "../icons/navigation-bar"

const showModal_addTask = function () {
  const modal = document.querySelector(".modal-newTask")
  const overlay = document.querySelector(".overlay")

  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

function NavBarDesktop() {
  const classAppearance = new ClAppearance()

  return <nav className="navBar-desktop">
    <img src="logo.png" alt="brand logo" height={34} style={{ marginLeft: 10 }} />
    <section className="NVD-wrapperButtons">
      <button
        type="button"
        className="navBar-btn NBbtn-addTask"
        onClick={showModal_addTask}>
        <IconPlus />
        Agregar Idea</button>

      <button
        type="button"
        className="navBar-btn NBbtn-signout"
        onClick={() => {
          signOut(auth)
          classAppearance._makeLight()
        }}>Cerrar Sesión</button>
    </section>
  </nav>
}

function NavBarMobile() {
  return <button
    className="navBar__mobile-btnAdd"
    type="button"
    name="Button to add a new task"
    onClick={showModal_addTask}
  ><IconAddTaskMob /></button>
}

export default function NavBar() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const x = window.matchMedia("(min-width: 624px)")
    setIsDesktop(x.matches)

    const handleResize = () => setIsDesktop(x.matches)
    x.addListener(handleResize)

    return () => x.removeListener(handleResize)
  }, [])

  return <div> {isDesktop ? <NavBarDesktop /> : <NavBarMobile />} </div>
}
