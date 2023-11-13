import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./header"
import Aside from "./aside"

const UserLayout = () => (
    <main className="main-wrapper">
        <Header />
        <Aside />
        <section className="section m-4 mt-2 m-auto col-lg-10" >
            <Outlet />
        </section>
    </main>
)

export default UserLayout