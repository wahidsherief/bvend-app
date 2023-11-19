import React from "react"
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { remove as deleteMachine } from "features/MachineSlice"


const Delete = (props) => {

    const dispatch = useDispatch()

    const { handleClose, modalInfo } = props

    const { id, machine_code } = modalInfo.data

    const deleteItem = () => dispatch(deleteMachine(id)) && handleClose()

    return (
        <div className="accordion-body">
            <h4>Are you sure to delete {machine_code} ?</h4>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <Button onClick={() => deleteItem(id)} className="main-btn danger-btn btn-hover btn-sm">Delete</Button>
                <Button type="button" onClick={handleClose} className="btn-dark btn-hover btn-sm">Cancel</Button>
            </div>
        </div>
    )
}

export default Delete