import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import PageNotFound from "app/components/pages/PageNotFound";
import StaffRoutes from "./StaffRoutes"
import guestRoutes from "./GuestRoutes"
import adminRoutes from "./AdminRoutes"
import VendorRoutes from "./VendorRoutes"
import CustomerRoutes from "./CustomerRoutes"
import { useSelector } from "react-redux"
import AuthLayout from "app/components/common/AuthLayout";
import GuestLayout from "app/components/common/GuestLayout";

const RootRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<GuestLayout />}>
                {guestRoutes()}
            </Route>
            <Route path='/' element={<AuthLayout />}>
                {adminRoutes()}
            </Route>
        </Routes>
    )

    // const { role } = useSelector((state) => state.auth)

    // const noRoutes = () => <Route path="*" element={<PageNotFound />} />

    // const userRoutes = () => (
    //     <React.Fragment>
    //         <Header />
    //         <Aside />
    //         <section className="section m-4 mt-2 m-auto col-lg-10" >
    //             <Routes>
    //                 {role === 'admin' && adminRoutes()}
    //                 {role === 'vendor' && vendorRoutes()}
    //                 {role === 'staff' && staffRoutes()}
    //                 {role === 'customer' && customerRoutes()}
    //                 {noRoutes()}
    //             </Routes>
    //         </section>
    //     </React.Fragment>
    // )

    // const gRoutes = () => (
    //     <React.Fragment>
    //         <section className="col-lg-10 col-sm-12" >
    //             <Routes>
    //                 {guestRoutes()}
    //             </Routes>
    //         </section>
    //     </React.Fragment>
    // )

    // return role ? userRoutes() : gRoutes()
}

export default RootRoute
