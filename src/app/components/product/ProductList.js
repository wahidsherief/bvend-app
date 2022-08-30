import React from "react";
import PageTitle from "../common/PageTitle";

const ProductList = () => {
    return (
        <React.Fragment>
            <PageTitle title='Product List' />
            <div class="tables-wrapper">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="card-style mb-30">
                            <h6 class="mb-10">Data Table</h6>
                            <p class="text-sm mb-20">
                                For basic styling—light padding and only horizontal
                                dividers—use the class table.
                            </p>
                            <div class="table-wrapper table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th><h6>Lead</h6></th>
                                            <th><h6>Email</h6></th>
                                            <th><h6>Phone No</h6></th>
                                            <th><h6>Company</h6></th>
                                            <th><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="min-width">
                                                <div class="lead">
                                                    <div class="lead-image">
                                                        <img
                                                            src="assets/images/lead/lead-1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="lead-text">
                                                        <p>Courtney Henry</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="min-width">
                                                <p><a href="#0">yourmail@gmail.com</a></p>
                                            </td>
                                            <td class="min-width">
                                                <p>(303)555 3343523</p>
                                            </td>
                                            <td class="min-width">
                                                <p>UIdeck digital agency</p>
                                            </td>
                                            <td>
                                                <div class="action">
                                                    <button class="text-danger">
                                                        <i class="lni lni-trash-can"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card-style mb-30">
                            <h4 className="mb-25">Add Product</h4>
                            <div className="input-style-1">
                                <input type="text" placeholder="Enter product name" />
                            </div>
                            <div class="select-style-2">
                                <div class="select-position">
                                    <select placeholder="Enter product name">
                                        <option value="">Select category</option>
                                        <option value="">Category one</option>
                                        <option value="">Category two</option>
                                        <option value="">Category three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-style-1">
                                <input type="text" placeholder="Enter brand name" />
                            </div>
                            <div className="input-style-1">
                                <input type="file" placeholder="Upload image" />
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="main-btn primary-btn btn-hover">Save Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductList