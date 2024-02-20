import { useNavigate } from "react-router-dom"
import css from "./SidebarLg.module.css"
import { IconStar, IconProfile, IconMagnify, IconHome, IconPlus, IconMoon } from "./icons/sidebar"
import { Appearance } from "./Appearance"

export function SidebarLg() {
    const navigation = useNavigate()

    function navigateTo(route) {
        navigation(route)
    }

    function showModalAddTask() {
        const modal = document.querySelector(".modal-newTask")
        const overlay = document.querySelector(".overlay")

        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    }


    return <nav className={css.navigationBar}>
        <img src="logo.png" alt="brand simple logo" height={48} />

        <a onClick={() => navigateTo("/fare/")} className={css.wrapperBtn}>
            <IconHome height={22} />
        </a>

        <a onClick={() => navigateTo("/fare/favorites")} className={css.wrapperBtn}>
            <IconStar height={22} />
        </a>

        <button onClick={showModalAddTask} className={css.wrapperBtn}>
            <IconPlus height={22} />
        </button>

        <button className={css.wrapperBtn}>
            <IconMagnify height={22} />
        </button>

        {/* <button className={css.wrapperBtn}>
            <IconMoon height={22} />
        </button> */}

        <Appearance />

        <a onClick={() => navigateTo("/fare/profile")} className={css.wrapperBtn}>
            <IconProfile height={22} />
        </a>
    </nav>
}