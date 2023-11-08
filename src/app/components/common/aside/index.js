import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "features/AuthSlice";
import { Button } from "react-bootstrap";


const Aside = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <React.Fragment>
            <aside className="sidebar-nav-wrapper">
                <div className="navbar-logo">
                    <h2> BVEND </h2>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="nav-item">
                            <Link to={'/'} className="active">Dashboard</Link>
                        </li>
                        <li className="nav-item nav-item-has-children">
                            <a
                                href="#1"
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#ddmenu_1"
                                aria-controls="ddmenu_1"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="text">Product</span>
                            </a>
                            <ul id="ddmenu_1" className="collapse dropdown-nav">
                                <li>
                                    <Link to={'/products'}>Product List</Link>
                                </li>
                                <li>
                                    <Link to={'/product/category'}>Product Category</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={'/vendors'}>Vendor</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/machines'}>Machine</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/transactions'}>Transaction</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/vendor/machines'}>My Bvends</Link>
                        </li>
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
                                    <Button onClick={() => handleLogout()} variant="link" className="btn btn-md btn-link"> <i className="lni lni-exit"></i> Sign Out </Button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        </React.Fragment>
    )
}

export default Aside