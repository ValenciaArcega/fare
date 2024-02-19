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

        <a onClick={() => navigateTo("/fare/")} className={css.wrapperBtn}>
            <IconHome fill="#181818" height={22} />
        </a>

        <a onClick={() => navigateTo("/fare/favorites")} className={css.wrapperBtn}>
            <IconStar fill="#181818" height={22} />
        </a>

        <a onClick={() => navigateTo("/fare/search")} className={css.wrapperBtn}>
            <IconMagnify fill="#181818" height={22} />
        </a>

        <a onClick={() => navigateTo("/fare/profile")} className={css.wrapperBtn}>
            <IconProfile fill="#181818" height={22} />
        </a>
    </nav>
}