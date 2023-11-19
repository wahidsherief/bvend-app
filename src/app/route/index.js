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

const RootRoute = () => (
    <Routes>
        <Route path='/' element={<GuestLayout />}>
            {guestRoutes()}
            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Route>
        <Route path='/' element={<AuthLayout />}>
            {adminRoutes()}
            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Route>
    </Routes>
)

export default RootRoute
