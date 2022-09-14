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
                        <li className="nav-item nav-item-has-children">
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
                                <span className="icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.8334 1.83325H5.50008C5.01385 1.83325 4.54754 2.02641 4.20372 2.37022C3.8599 2.71404 3.66675 3.18036 3.66675 3.66659V18.3333C3.66675 18.8195 3.8599 19.2858 4.20372 19.6296C4.54754 19.9734 5.01385 20.1666 5.50008 20.1666H16.5001C16.9863 20.1666 17.4526 19.9734 17.7964 19.6296C18.1403 19.2858 18.3334 18.8195 18.3334 18.3333V7.33325L12.8334 1.83325ZM16.5001 18.3333H5.50008V3.66659H11.9167V8.24992H16.5001V18.3333Z"
                                        />
                                    </svg>
                                </span>
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
                                <span className="icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.8334 1.83325H5.50008C5.01385 1.83325 4.54754 2.02641 4.20372 2.37022C3.8599 2.71404 3.66675 3.18036 3.66675 3.66659V18.3333C3.66675 18.8195 3.8599 19.2858 4.20372 19.6296C4.54754 19.9734 5.01385 20.1666 5.50008 20.1666H16.5001C16.9863 20.1666 17.4526 19.9734 17.7964 19.6296C18.1403 19.2858 18.3334 18.8195 18.3334 18.3333V7.33325L12.8334 1.83325ZM16.5001 18.3333H5.50008V3.66659H11.9167V8.24992H16.5001V18.3333Z"
                                        />
                                    </svg>
                                </span>
                                <span className="text">Vendor</span>
                            </a>
                            <ul id="ddmenu_2" className="collapse dropdown-nav">
                                <li>
                                    <Link to={'/vendors'}>Vendor List</Link>
                                </li>
                                <li>
                                    <Link to={'/vendor/requests'}>Vendor Requests</Link>
                                </li>
                                <li>
                                    <Link to={'/vendor/create'}>Vendor Create</Link>
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