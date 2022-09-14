import React from "react";

const TopSaleProduct = () => {
    return (
        <React.Fragment>
            <div className="col-lg-5">
                <div className="card-style mb-30">
                    <div
                        className="
                    title
                    d-flex
                    flex-wrap
                    justify-content-between
                    align-items-center
                  "
                    >
                        <div className="left">
                            <h6 className="text-medium mb-30">Top Selling Products</h6>
                        </div>
                        <div className="right">
                            <div className="select-style-1">
                                <div className="select-position select-sm">
                                    <select className="light-bg">
                                        <option value="">Yearly</option>
                                        <option value="">Monthly</option>
                                        <option value="">Weekly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table top-selling-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <h6 className="text-sm text-medium">Products</h6>
                                    </th>
                                    <th className="min-width">
                                        <h6 className="text-sm text-medium">Category</h6>
                                    </th>
                                    <th className="min-width">
                                        <h6 className="text-sm text-medium">Price</h6>
                                    </th>
                                    <th className="min-width">
                                        <h6 className="text-sm text-medium">Sold</h6>
                                    </th>
                                    <th className="min-width">
                                        <h6 className="text-sm text-medium">Profit</h6>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="check-input-primary">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="checkbox-1"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="image">
                                                <img
                                                    src="assets/images/products/product-mini-1.jpg"
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
                                        <p className="text-sm">43</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">$45</p>
                                    </td>
                                    <td>
                                        <div className="action justify-content-end">
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
                                        <div className="check-input-primary">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="checkbox-1"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="image">
                                                <img
                                                    src="assets/images/products/product-mini-2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="text-sm">SOfa</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-sm">Interior</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">$145</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">13</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">$15</p>
                                    </td>
                                    <td>
                                        <div className="action justify-content-end">
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
                                        <div className="check-input-primary">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="checkbox-1"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="image">
                                                <img
                                                    src="assets/images/products/product-mini-3.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="text-sm">Dining Table</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-sm">Interior</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">$95</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">32</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">$215</p>
                                    </td>
                                    <td>
                                        <div className="action justify-content-end">
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
                                        <div className="check-input-primary">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="checkbox-1"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="image">
                                                <img
                                                    src="assets/images/products/product-mini-4.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="text-sm">Office Chair</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-sm">Interior</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">$105</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">23</p>
                                    </td>
                                    <td>
                                        <p className="text-sm">$345</p>
                                    </td>
                                    <td>
                                        <div className="action justify-content-end">
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
        </React.Fragment>
    )
}

export default TopSaleProduct
