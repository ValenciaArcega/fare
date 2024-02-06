
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../views/Dashboard"

export function RouterDashboard() {
    return <Routes>
        <Route path="/fare/Dashboard" Component={Dashboard} />
    </Routes>
}
