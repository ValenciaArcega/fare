import React, { useEffect, useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../../credentials"
import { ClAppearance } from "../../classes/cl-appearance"
import { IconPlus, IconAddTaskMob } from "../svg/NavBar"

function NavBarDesktop() {
  const cl = new ClAppearance()

  function showModal() {
    const modal = document.querySelector(".modal-newTask")
    const overlay = document.querySelector(".overlay")

    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
  }

  return (
    <nav className="navBar-desktop">

      <img src="logo.png" alt="" height={34} style={{ marginLeft: 10 }} />

      <div className="NVD-wrapperButtons">
        <button
          type="button"
          className="navBar-btn NBbtn-addTask"
          onClick={showModal}
        >
          <IconPlus />
          Agregar Idea
        </button>

        <button
          type="button"
          className="navBar-btn NBbtn-signout"
          onClick={() => {
            signOut(auth)
            cl._makeLight()
          }}>Cerrar sesión</button>
      </div>
    </nav>
  )
}

function NavBarMobile() {
  function showModal() {
    const modal = document.querySelector(".modal-newTask")
    const overlay = document.querySelector(".overlay")

    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
  }

  return (
    <button
      type="button"
      name="Button to add a new task"
      className="navBar__mobile-btnAdd"
      onClick={showModal}
    >
      <IconAddTaskMob />
    </button>
  )
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
