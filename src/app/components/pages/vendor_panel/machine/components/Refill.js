import AppModal from "app/components/utils/AppModal";
import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap"
import { getImageURL } from "services";
import RefillForm from "../actions/RefillForm";


const Refill = (props) => {

    let { machineID, rowNumber, colNumber, refill } = props

    const [modal, setModal] = useState(false)

    const modalInfo = {
        title: `Row: ${rowNumber} : Tray: ${colNumber}`,
        body: RefillForm,
        info: {
            machineID, rowNumber, colNumber
        }
    }

    const image = refill.product && getImageURL('product') + refill.product.image

    const showModal = () => setModal(modal => !modal)
    const hideModal = () => setModal(false)


    return (
        <React.Fragment>
            <AppModal modalInfo={modalInfo} modal={modal} hideModal={hideModal} />
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <div className="card-style-2 p-2">
                    <div className="bg-white d-grid border-radius-2">
                        <h6 className="fw-bold">Tray: {colNumber}</h6>
                    </div>

                    <div className="row mt-2 mb-2">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="card-image">
                                <img
                                    className="fit-image"
                                    src={image}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <div className="card-title">
                                <h6>{refill.product && refill.product.name}</h6>
                                <p className="fw-light custom-small-text-12">
                                    Price: {refill.price} BDT
                                </p>
                            </div>
                        </div>
                    </div>

                    <ProgressBar now={refill.quantity * 10} label={refill.quantity + ' / 10'} className="border-radius-2" />

                    <div className="d-grid gap-2 mt-2">
                        <button onClick={showModal} className="btn btn-danger p-1 border-radius-2" type="button">Change</button>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Refill