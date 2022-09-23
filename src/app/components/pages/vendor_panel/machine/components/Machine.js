import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Machine = ({ machines }) => {
    return (
        <React.Fragment>
            {machines.map((machine) => {
                return (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="card-style-2 mb-30">
                            <div className="row machine-card-top-height-160">
                                <div className="col-lg-8 col-sm-8">
                                    <div className="card-title">
                                        <div className="mb-2">
                                            <h4>{machine.title}</h4>
                                        </div>
                                        <div>
                                            <p className="fw-light custom-small-text-12">
                                                Location: {machine.location}
                                                <span className="ms-1 text-primary"><i className="lni lni-map-marker"></i></span>
                                            </p>

                                            <p className="fw-light mt-1 mb-1 custom-small-text-12">
                                                Status:
                                                <span className="d-inline ms-2 fsize-10 text-white p-1 border-radius-2 ps-2 pe-2 bg-success">
                                                    Active
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="card-image">
                                        <img
                                            className="fit-image"
                                            src={require(`assets/bvend/machines/${machine.image}`)}
                                            alt={machine.title}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card-content">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <h5 className="mb-2 mt-2">Refill Status</h5>
                                        </div>
                                        <div className="col-lg-7 d-grid custom-small-text-12 align-items-center justify-content-end">
                                            <p className="fw-light custom-small-text-12"> Current Products: <span className='fw-700'>50 / 100</span></p>
                                        </div>
                                    </div>

                                    <ProgressBar now={40} label={4} className='mb-1 border-radius-2' />

                                    <p className="fw-light custom-small-text-12">
                                        Total Amount:
                                        <span className='fw-700'>
                                            {machine.totalAmount}
                                        </span>
                                    </p>

                                    <div class="d-grid gap-2 mt-2">
                                        <Link to={`/vendor/refill/${machine.id}`} class="btn btn-danger p-1 border-radius-2">
                                            Refill
                                        </Link>

                                        <div className="row mt-2">
                                            <div className="d-grid col-lg-6">
                                                <button class="main-btn secondary-btn p-1 border-radius-2" type="button">All Products</button>
                                            </div>
                                            <div className="d-grid col-lg-6">
                                                <button class="main-btn dark-btn p-1 border-radius-2" type="button">Transactions</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default Machine