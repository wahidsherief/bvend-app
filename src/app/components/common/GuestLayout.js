import React from "react"
import { Outlet } from "react-router-dom"

const GuestLayout = () => (
    <main className="main-wrapper">
        <Outlet />
    </main>
)
export default GuestLayout