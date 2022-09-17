import React, { useState } from "react"
import { ProgressBar } from "react-bootstrap"

const HorizontalListContainer = () => {

    return (
        <React.Fragment>
            <section className="card-components">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="card-style-2 mb-30">
                                <div className="row machine-card-title-height-100">
                                    <div className="col-lg-8 col-sm-8">
                                        <div className="card-title">
                                            <div className="mb-2">
                                                <h4>Machine One</h4>
                                            </div>
                                            <div>
                                                <p className="fw-light custom-small-text-12">
                                                    Location: 33/A Gulshan, Dhaka
                                                    <span className="ms-1 text-primary"><i className="lni lni-map-marker"></i></span>
                                                </p>

                                                <p className="fw-light mt-1 mb-1 custom-small-text-12">
                                                    Status:
                                                    <span className="d-inline ms-2 fsize-10 text-white p-1 rounded-pill ps-2 pe-2 bg-success">
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
                                                src={require(`assets/bvend/machines/machine_3.jpg`)}
                                                alt=""
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
                                                <p className="fw-light custom-small-text-12"> Current Products: <span className='fw-700'>50/100</span></p>
                                            </div>
                                        </div>


                                        <ProgressBar now={40} label={4} className='mb-1' />
                                        <p className="fw-light custom-small-text-12"> Total Amount: <span className='fw-700'>BDT 10,000</span></p>
                                        <div class="d-grid gap-2 mt-2">
                                            <button class="btn btn-link" type="button">Button</button>
                                            <div className="row">
                                                <div className="d-grid col-lg-6"><button class="btn btn-primary" type="button">Button</button></div>
                                                <div className="d-grid col-lg-6"><button class="btn btn-primary" type="button">Button</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default HorizontalListContainer