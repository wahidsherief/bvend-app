import React, { useState, useEffect, Children } from 'react';
import Modal from 'react-bootstrap/Modal';

const AppModal = ({ modalInfo, modal, hideModal }) => {

    const { title: modalTitle, body: ModalBody } = modalInfo

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        hideModal()
    }

    const showModal = () => setShow(modal);

    useEffect(() => {
        showModal();
    });

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>{modalTitle}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalBody modalInfo={modalInfo} handleClose={handleClose} />
                    {/* <Children /> */}
                </Modal.Body>
            </Modal>
        </>
    );
}


export default AppModal

