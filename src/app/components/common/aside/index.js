import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
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
                                <span className="text">Vendor</span>
                            </a>
                            <ul id="ddmenu_2" className="collapse dropdown-nav">
                                <li>
                                    <Link to={'/vendors'}>Vendor List</Link>
                                </li>
                                <li>
                                    <Link to={'/vendor/requests'}>Vendor Requests</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={'/machines'}>Machine</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/transactions'}>Transaction</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </React.Fragment>
    )
}

export default Aside