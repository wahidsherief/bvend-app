import { Routes, Route } from "react-router-dom"
import Login from "app/components/pages/auth/Login";
import Registration from "app/components/pages/auth/Registration";
import React from "react";



const guestRoutes = () => (
    <React.Fragment>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
    </React.Fragment>
);

export default guestRoutes;
