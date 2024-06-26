import css from "../css/SidebarLg.module.css"
import { Appearance } from "./Appearance"
import { useNavigate } from "react-router-dom"
import { HiMiniUser, HiMagnifyingGlass, HiHome, HiMiniStar, HiPlus } from "react-icons/hi2"

export function SidebarLg({ setIsAdding }) {
    const navigation = useNavigate()

    return <nav className={css.navigationBar}>
        <img src="logo.png" alt="brand simple logo" height={48} />

        <a onClick={() => navigateTo("/fare/")} className={css.wrapperBtn}>
            <HiHome size={22} />
        </a>

        <a onClick={() => navigateTo("/fare/favorites")} className={css.wrapperBtn}>
            <HiMiniStar size={22} />
        </a>

        <button onClick={() => setIsAdding(true)} className={css.wrapperBtn}>
            <HiPlus size={22} />
        </button>

        <button className={css.wrapperBtn}>
            <HiMagnifyingGlass size={22} />
        </button>

        <Appearance />

        <a onClick={() => navigateTo("/fare/profile")} className={css.wrapperBtn}>
            <HiMiniUser size={26} />
        </a>
    </nav>

    function navigateTo(route) {
        navigation(route)
    }
}