import React from "react";
import { Link } from "react-router-dom";

const adminAside = () => {
    return (
        <React.Fragment>
            <li className="nav-item">
                <Link to={'/admin'} className="active">Dashboard</Link>
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
                        <Link to={'/products'}>Products</Link>
                    </li>
                    <li>
                        <Link to={'/product/category'}>Category</Link>
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
        </React.Fragment>
    )
}

export default adminAside