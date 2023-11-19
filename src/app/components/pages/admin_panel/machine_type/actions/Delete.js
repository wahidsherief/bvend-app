import React from "react"
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { remove as deleteMachineType } from "features/MachineTypeSlice";


const Delete = (props) => {

    const dispatch = useDispatch()

    const { handleClose, modalInfo } = props

    const { id, type } = modalInfo.data

    const deleteItem = () => dispatch(deleteMachineType(id)) && handleClose()

    return (
        <div className="accordion-body">
            <h4>Are you sure to delete {type} ?</h4>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <Button onClick={() => deleteItem(id)} className="main-btn danger-btn btn-hover btn-sm">Delete</Button>
                <Button type="button" onClick={handleClose} className="btn-dark btn-hover btn-sm">Cancel</Button>
            </div>
        </div>
    )
}

export default Delete