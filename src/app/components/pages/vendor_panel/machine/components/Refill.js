import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap"
import RefillModal from "./RefillModal";

const Refill = (props) => {

    let { rowNumber, colNumber, refill } = props

    const [modal, setModal] = useState(false)

    const modalInfo = {
        rowNumber,
        colNumber
    }

    const showRefillModal = () => setModal(modal => !modal)
    const hideRefillModal = () => setModal(false)


    return (
        <React.Fragment>
            <RefillModal modalInfo={modalInfo} modal={modal} hideRefillModal={hideRefillModal} />

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <div className="card-style-2 p-2">
                    <div className="bg-white d-grid border-radius-2">
                        <h6 className="text-danger fw-bold">Tray: {colNumber}</h6>
                    </div>

                    <div className="row mt-2 mb-2">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="card-image">
                                <img
                                    className="fit-image"
                                    src={require(`assets/bvend/products/${refill.image}`)}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <div className="card-title">
                                <h6>{refill.title}</h6>
                                <p className="fw-light custom-small-text-12">
                                    Price: {refill.totalAmount} BDT
                                </p>
                            </div>
                        </div>
                    </div>

                    <ProgressBar now={60} label="6 / 10" className="border-radius-2" />

                    <div className="d-grid gap-2 mt-2">
                        <button onClick={showRefillModal} className="btn btn-danger p-1 border-radius-2" type="button">Change</button>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Refill