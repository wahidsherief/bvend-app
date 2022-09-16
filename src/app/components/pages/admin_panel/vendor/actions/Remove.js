import React from "react"
import { useDispatch } from "react-redux"
import { remove } from "features/VendorSlice"


const Remove = (props) => {

    const dispatch = useDispatch()

    const removeitem = (id) => {
        if (dispatch(remove(id)))
            props.setRemovePanel(null)
    }

    return (
        <div className="accordion-body">
            <h3>Are you sure to delete {props.item.name} ?</h3>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <button onClick={() => removeitem(props.item.id)} className="main-btn danger-btn btn-hover btn-sm">Move to trash</button>
                <button onClick={() => props.setRemovePanel(null)} className="main-btn dark-btn btn-hover btn-sm">Cancel</button>
            </div>
        </div>
    )
}

export default Remove