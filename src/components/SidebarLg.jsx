import css from "../css/SidebarLg.module.css"
import { auth } from "../../dal/credentials"
import { signOut } from "firebase/auth"
import { Appearance } from "./Appearance"
import { useNavigate } from "react-router-dom"
import { IconStar, IconProfile, IconMagnify, IconHome, IconPlus } from "./icons/sidebar"

export function SidebarLg({ setIsAdding }) {
    const navigation = useNavigate()

    function navigateTo(route) {
        navigation(route)
    }

    function showModalAddTask() {
        setIsAdding(true)
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

        <Appearance />

        <a onClick={() => {
            signOut(auth)
            navigation("/fare/")
        }} className={css.wrapperBtn}>
            <IconProfile height={22} />
        </a>
    </nav>
}