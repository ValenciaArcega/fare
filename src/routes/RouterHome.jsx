import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../views/Dashboard"
import { Profile } from "../views/Profile"
import { Favorites } from "../views/Favorites"
import { SidebarLg } from "../components/SidebarLg"
import { useContext, useEffect, useState } from "react"
import { NavigationBar } from "../components/NavigationBar"
import { AddTask } from "../components/AddTask"
import { contextMessage } from "../context/messageContext"
import { Message } from "../components/messages/Message"
import { HiOutlineX } from "react-icons/hi"
import { IconVerified } from "../components/icons/message"

export function RouterHome() {
    let viewPort = window.matchMedia("(max-width: 664px)")

    const [isMobile, setIsMobile] = useState(false)
    const [isAdding, setIsAdding] = useState(false)

    const { msgDone, msgError } = useContext(contextMessage)

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

        {isAdding && <AddTask setIsAdding={setIsAdding} />}

        {msgError !== "" && <Message txt={msgError}>
            <HiOutlineX size={28} color="#ff2c2c" />
        </Message>}

        {msgDone !== "" && <Message txt={msgDone}>
            <IconVerified height={28} fill="green" />
        </Message>}

        <Routes>
            <Route path="/fare/" Component={Dashboard} />
            <Route path="/fare/profile" Component={Profile} />
            <Route path="/fare/favorites" Component={Favorites} />
        </Routes>
    </section>
}
