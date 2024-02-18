import { useNavigate } from "react-router-dom"
import css from "./SidebarLg.module.css"
import { IconStar, IconProfile, IconMagnify, IconHome } from "./icons/sidebar"

export function SidebarLg() {
    const navigation = useNavigate()

    function navigateTo(route) {
        navigation(route)
    }

    return <nav className={css.navigationBar}>
        <img src="logo.png" alt="brand simple logo" height={48} />

        <div onClick={() => navigateTo("/fare/")} className={css.wrapperBtn}>
            <IconHome fill="#181818" height={32} />
        </div>
    </nav>
}