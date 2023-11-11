import React from "react";
import { Link } from "react-router-dom";

const vendorAside = () => {
    return (
        <React.Fragment>
            <li className="nav-item">
                <Link to={'/vendor'} className="active">Dashboard</Link>
            </li>

            <li className="nav-item">
                <Link to={'/vendor/machines'}>My Bvends</Link>
            </li>
        </React.Fragment>
    )
}

export default vendorAside