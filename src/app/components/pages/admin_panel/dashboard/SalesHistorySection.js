import React from "react";
import TopSaleProduct from './TopSaleProduct'

const SalesHistorySection = () => {
    return (
        <React.Fragment>
            <div className="row">
                <TopSaleProduct />
                <div className="col-lg-7">
                    <div className="card-style mb-30">
                        <div
                            className="
                    title
                    d-flex
                    flex-wrap
                    align-items-center
                    justify-content-between
                  "
                        >
                            <div className="left">
                                <h6 className="text-medium mb-30">Sales History</h6>
                            </div>
                            <div className="right">
                                <div className="select-style-1">
                                    <div className="select-position select-sm">
                                        <select className="light-bg">
                                            <option value="">Today</option>
                                            <option value="">Yesterday</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table top-selling-table">
                                <thead>
                                    <tr>
                                        <th>
                                            <h6 className="text-sm text-medium">Products</h6>
                                        </th>
                                        <th className="min-width">
                                            <h6 className="text-sm text-medium">
                                                Category <i className="lni lni-arrows-vertical"></i>
                                            </h6>
                                        </th>
                                        <th className="min-width">
                                            <h6 className="text-sm text-medium">
                                                Revenue <i className="lni lni-arrows-vertical"></i>
                                            </h6>
                                        </th>
                                        <th className="min-width">
                                            <h6 className="text-sm text-medium">
                                                Status <i className="lni lni-arrows-vertical"></i>
                                            </h6>
                                        </th>
                                        <th>
                                            <h6 className="text-sm text-medium text-end">
                                                Actions <i className="lni lni-arrows-vertical"></i>
                                            </h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="product">
                                                <div className="image">
                                                    <img
                                                        src="assets/images/products/product-mini-1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="text-sm">Bedroom</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-sm">Interior</p>
                                        </td>
                                        <td>
                                            <p className="text-sm">$345</p>
                                        </td>
                                        <td>
                                            <span className="status-btn close-btn">Pending</span>
                                        </td>
                                        <td>
                                            <div className="action justify-content-end">
                                                <button className="edit">
                                                    <i className="lni lni-pencil"></i>
                                                </button>
                                                <button
                                                    className="more-btn ml-10 dropdown-toggle"
                                                    id="moreAction1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="lni lni-more-alt"></i>
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="moreAction1"
                                                >
                                                    <li className="dropdown-item">
                                                        <a href="#0" className="text-gray">Remove</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a href="#0" className="text-gray">Edit</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="product">
                                                <div className="image">
                                                    <img
                                                        src="assets/images/products/product-mini-2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="text-sm">Arm Chair</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-sm">Interior</p>
                                        </td>
                                        <td>
                                            <p className="text-sm">$345</p>
                                        </td>
                                        <td>
                                            <span className="status-btn warning-btn">Refund</span>
                                        </td>
                                        <td>
                                            <div className="action justify-content-end">
                                                <button className="edit">
                                                    <i className="lni lni-pencil"></i>
                                                </button>
                                                <button
                                                    className="more-btn ml-10 dropdown-toggle"
                                                    id="moreAction1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="lni lni-more-alt"></i>
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="moreAction1"
                                                >
                                                    <li className="dropdown-item">
                                                        <a href="#0" className="text-gray">Remove</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a href="#0" className="text-gray">Edit</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="product">
                                                <div className="image">
                                                    <img
                                                        src="assets/images/products/product-mini-3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="text-sm">Sofa</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-sm">Interior</p>
                                        </td>
                                        <td>
                                            <p className="text-sm">$345</p>
                                        </td>
                                        <td>
                                            <span className="status-btn success-btn">Completed</span>
                                        </td>
                                        <td>
                                            <div className="action justify-content-end">
                                                <button className="edit">
                                                    <i className="lni lni-pencil"></i>
                                                </button>
                                                <button
                                                    className="more-btn ml-10 dropdown-toggle"
                                                    id="moreAction1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="lni lni-more-alt"></i>
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="moreAction1"
                                                >
                                                    <li className="dropdown-item">
                                                        <a href="#0" className="text-gray">Remove</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a href="#0" className="text-gray">Edit</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="product">
                                                <div className="image">
                                                    <img
                                                        src="assets/images/products/product-mini-4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="text-sm">Kitchen</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-sm">Interior</p>
                                        </td>
                                        <td>
                                            <p className="text-sm">$345</p>
                                        </td>
                                        <td>
                                            <span className="status-btn close-btn">Canceled</span>
                                        </td>
                                        <td>
                                            <div className="action justify-content-end">
                                                <button className="edit">
                                                    <i className="lni lni-pencil"></i>
                                                </button>
                                                <button
                                                    className="more-btn ml-10 dropdown-toggle"
                                                    id="moreAction1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="lni lni-more-alt"></i>
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="moreAction1"
                                                >
                                                    <li className="dropdown-item">
                                                        <a href="#0" className="text-gray">Remove</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a href="#0" className="text-gray">Edit</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SalesHistorySection