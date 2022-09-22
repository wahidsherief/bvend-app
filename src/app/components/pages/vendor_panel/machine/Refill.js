import React from "react";

const Refill = () => {
    return (
        <React.Fragment>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card-style-2 mb-30">
                    <div className="row machine-card-top-height-100">
                        <div className="col-lg-8 col-sm-8">
                            <div className="card-title">
                                <div className="mb-2">
                                    <h4>uuu</h4>
                                </div>
                                <div>
                                    <p className="fw-light custom-small-text-12">
                                        Location:
                                        <span className="ms-1 text-primary"><i className="lni lni-map-marker"></i></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4">
                            <div className="card-image">
                                <img
                                    className="fit-image"
                                    src={require(`assets/bvend/machines/machain_1.jpg`)}
                                    alt=
                                        />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-content">
                            <div class="d-grid gap-2 mt-4">
                                <button class="btn btn-danger p-1" type="button">Refill</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Refill