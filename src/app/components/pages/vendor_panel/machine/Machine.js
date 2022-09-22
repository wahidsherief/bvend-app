import React from "react";
import { ProgressBar } from "react-bootstrap";

const Refill = () => {
    return (
        <React.Fragment>

            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3">


                <div class="bg-warning p-1 justify-content-center d-grid">
                    <h6>Tray: 1</h6>
                </div>
                <div className="card-style-2 p-3">
                    <div className="card-image mb-2">
                        <img
                            className="fit-image"
                            src={require('assets/bvend/products/adidas.jpg')}
                            alt=""
                        />
                    </div>
                    <h6 className="justify-content-center d-grid mb-2">
                        5 / 10
                    </h6>
                    <ProgressBar now={40} label={4} />

                    <div className="card-title mt-2">
                        <h6>Lays Chips</h6>
                        <p className="fw-light custom-small-text-12">
                            Price: 500 BDT
                        </p>
                    </div>
                    <div className="">
                        <div class="d-grid gap-2 mt-2">
                            <button class="btn btn-danger p-1" type="button">Refill</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Refill