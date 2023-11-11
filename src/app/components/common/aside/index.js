import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "features/AuthSlice"
import adminAside from "./AdminAside"
import vendorAside from "./VendorAside"
import { Button } from "react-bootstrap"


const Aside = () => {
    const dispatch = useDispatch()

    const { role } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        window.location.href = "/";
    }

    const commonAside = () => {
        return (
            <React.Fragment>
                <li className="nav-item nav-item-has-children">
                    <a
                        href="#2"
                        className="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#ddmenu_2"
                        aria-controls="ddmenu_2"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="text">Profile</span>
                    </a>
                    <ul id="ddmenu_2" className="collapse dropdown-nav">
                        <li>
                            <a href="#0">
                                <i className="lni lni-user"></i> View Profile
                            </a>
                        </li>
                        <li>
                            <a href="#0"> <i className="lni lni-cog"></i> Settings </a>
                        </li>
                        <li>
                            <a href="/" onClick={() => handleLogout()} variant="link" className="btn btn-md btn-link"> <i className="lni lni-exit"></i> Sign Out </a>
                        </li>
                    </ul>
                </li>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <aside className="sidebar-nav-wrapper">
                <div className="navbar-logo">
                    <h2> BVEND </h2>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        {role === 'admin' && adminAside()}
                        {role === 'vendor' && vendorAside()}
                        {/* {token && type === 'staff' && staffRoutes}
                        {token && type === 'customer' && customerRoutes} */}
                        {commonAside()}
                    </ul>
                </nav>
            </aside>
        </React.Fragment>
    )
}

export default Aside