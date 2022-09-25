import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RefillForm from '../actions/RefillForm';

const RefillModal = (props) => {

    const { modal, hideRefillModal } = props
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
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RefillForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default RefillModal

