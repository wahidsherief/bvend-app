import React from "react";
import { Routes, Route } from "react-router-dom"
import PageNotFound from "app/components/pages/PageNotFound";
import { useSelector } from "react-redux";
import { staffRoutes } from "./StaffRoutes";
import { guestRoutes } from "./GuestRoutes";
import { adminRoutes } from "./AdminRoutes";
import { vendorRoutes } from "./VendorRoutes";
import { customerRoutes } from "./CustomerRoutes";


const RootRoute = () => {
    const { access_token: token, type } = useSelector((state) => state.auth.data)

    const noRoutes = <Route path="*" element={<PageNotFound />} />

    return (
        <React.Fragment>
            <Routes>
                {token && type === 'admin' && adminRoutes}
                {token && type === 'vendor' && vendorRoutes}
                {token && type === 'staff' && staffRoutes}
                {token && type === 'customer' && customerRoutes}
                {guestRoutes}
                {noRoutes}
            </Routes>
        </React.Fragment>
    );
}

export default RootRoute;
