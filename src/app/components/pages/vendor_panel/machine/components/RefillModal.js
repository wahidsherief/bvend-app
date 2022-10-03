import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RefillForm from '../actions/RefillForm';

const RefillModal = (props) => {

    const { modalInfo, modal, hideRefillModal } = props
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        hideRefillModal()
    }

    const showRefillModal = () => setShow(modal);


    useEffect(() => {
        showRefillModal();
    });

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3>Row : {modalInfo.rowNumber} - Tray : {modalInfo.colNumber}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RefillForm modalInfo={modalInfo} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}


export default RefillModal

