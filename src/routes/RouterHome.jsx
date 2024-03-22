
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../views/Dashboard"
import { Profile } from "../views/Profile"
import { Favorites } from "../views/Favorites"
import { SidebarLg } from "../components/SidebarLg"
import { useState } from "react"

export function RouterHome() {
    const [isAdding, setIsAdding] = useState(false)

    return <section className="layoutDashboard">
        <SidebarLg setIsAdding={setIsAdding} />

        <Routes>
            <Route path="/fare/"
                Component={() => <Dashboard isAdding={isAdding} setIsAdding={setIsAdding} />} />
            <Route path="/fare/profile" Component={Profile} />
            <Route path="/fare/favorites" Component={Favorites} />
        </Routes>
    </section>
}
