import React, { useEffect, useState } from 'react';
import { signOut, } from "firebase/auth";
import { auth } from "../Home";
import { IconPlus, IconMoon, IconSignOut, IconSun, IconAddTaskMob, IconMoonMob, IconSunMob, IconSignOutMob } from "../icons/navBar-buttons";
import { makeDark, makeLight } from "../../functions/appearance";
import '../../App.css';


const NavBarDesktop = function () {
  const showModal = function () {
    const modal = document.querySelector('.modal-newTask');
    const overlay = document.querySelector('.overlay');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  return (
    <div className="navBar-desktop">
      <img height="32px" src="promemoria.png" />
      <button className="navBar-btn NBbtn-addTask" onClick={showModal}>
        <IconPlus />Agregar tarea</button>
      <button className="navBar-btn NBbtn-moon" onClick={makeDark}>
        <IconMoon />Modo obscuro</button>
      <button className="navBar-btn NBbtn-sun hidden" onClick={makeLight}>
        <IconSun />Modo claro</button>
      <button className="navBar-btn NBbtn-signout" onClick={() => { signOut(auth); makeLight(); }}>
        <IconSignOut />Cerrar sesión</button>
    </div>
  );
};

const NavBarMobile = function () {
  const showModal = function () {
    const modal = document.querySelector('.modal-newTask');
    const overlay = document.querySelector('.overlay');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  return (
    <div className="navBar-mobile">
      <button className="navBar__mobile-btn" onClick={() => { signOut(auth); makeLight(); }}>
        <IconSignOutMob />
        Cerrar Sesión
      </button>
      <button className="navBar__mobile-btn navBar__mobile-btnAdd" onClick={showModal}>
        <IconAddTaskMob />
      </button>
      <button onClick={makeDark} className="navBar__mobile-btn NBbtnMob-moon">
        <IconMoonMob />
        Modo Obscuro
      </button>
      <button onClick={makeLight} className="navBar__mobile-btn NBbtnMob-sun hidden">
        <IconSunMob />
        Modo Claro
      </button>
    </div>
  );
};

const NavBar = function ({ userMail }) {

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const x = window.matchMedia("(min-width: 624px)");
    setIsDesktop(x.matches);

    const handleResize = () => setIsDesktop(x.matches);
    x.addListener(handleResize);

    return () => x.removeListener(handleResize);
  }, []);

  return (
    <div> {isDesktop ? <NavBarDesktop /> : <NavBarMobile />} </div>
  );
};

export default NavBar;
