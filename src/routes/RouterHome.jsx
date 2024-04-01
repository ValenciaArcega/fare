
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../views/Dashboard"
import { Profile } from "../views/Profile"
import { Favorites } from "../views/Favorites"
import { SidebarLg } from "../components/SidebarLg"
import { useEffect, useState } from "react"
import { NavigationBar } from "../components/NavigationBar"

export function RouterHome() {
    let viewPort = window.matchMedia("(max-width: 664px)")
    const [isMobile, setIsMobile] = useState(false)
    const [isAdding, setIsAdding] = useState(false)

    useEffect(function () {
        const mediaScreen = y => {
            if (y.matches) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        mediaScreen(viewPort)
        viewPort.addListener(mediaScreen)
    }, [])

    return <section className="layoutDashboard">
        {isMobile
            ? <NavigationBar setIsAdding={setIsAdding} />
            : <SidebarLg setIsAdding={setIsAdding} />}

        <Routes>
            <Route path="/fare/"
                Component={() => <Dashboard isAdding={isAdding} setIsAdding={setIsAdding} />} />
            <Route path="/fare/profile" Component={Profile} />
            <Route path="/fare/favorites" Component={Favorites} />
        </Routes>
    </section>
}
