import css from "../css/SidebarLg.module.css"
import { auth } from "../../dal/credentials"
import { signOut } from "firebase/auth"
import { Appearance } from "./Appearance"
import { useNavigate } from "react-router-dom"
import { HiMiniUser, HiMagnifyingGlass, HiHome, HiMiniStar, HiPlus } from "react-icons/hi2"

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
            <HiHome size={22} />
        </a>

        <a onClick={() => navigateTo("/fare/favorites")} className={css.wrapperBtn}>
            <HiMiniStar size={22} />
        </a>

        <button onClick={showModalAddTask} className={css.wrapperBtn}>
            <HiPlus size={22} />
        </button>

        <button className={css.wrapperBtn}>
            <HiMagnifyingGlass size={22} />
        </button>

        <Appearance />

        <a onClick={() => {
            signOut(auth)
            navigation("/fare/")
        }} className={css.wrapperBtn}>
            <HiMiniUser size={26} />
        </a>
    </nav>
}