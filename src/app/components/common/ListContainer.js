import React, { useState } from "react"
import { useDispatch } from "react-redux"
// import { remove } from "../../../features/item/item_list_slice"



const ListContainer = (props) => {



    const { itemName, items } = props.item

    console.log('xy', props)

    // const dispatch = useDispatch()

    const [editPanel, setEditPanel] = useState(null)
    const [removePanel, setRemovePanel] = useState(null)

    const showEditPanel = (id) => {
        if (removePanel !== null) {
            setRemovePanel(null)
        }
        if (editPanel === id)
            return setEditPanel(null)
        setEditPanel(id)

    }

    const hideEditPanel = (id) => {
        setEditPanel(null)
    }

    const showRemovePanel = (id) => {
        if (editPanel !== null) {
            setEditPanel(null)
        }
        if (removePanel === id)
            return setRemovePanel(null)
        setRemovePanel(id)

    }


    // const removeitem = (id) => {
    //     if (dispatch(remove(id)))
    //         setRemovePanel(null)
    // }


    return (
        <React.Fragment>
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <p className="text-sm mb-20">
                                Total {itemName}: {items.length}
                            </p>
                            {
                                items.length > 0 &&
                                items.map((item) => (
                                    <div key={item.id} className="accordion mb-2" id="accordionExample">
                                        <div className="accordion-item">
                                            <div className="accordion-header p-3" id="headingOne">
                                                <img src={require(`../../../../public/bvend/${itemName}/${item.image}`)} className="image-in-list" alt={item.name} />
                                                <span className="ms-3">{item.name}</span>
                                                <span className="ms-3">{item.category}</span>
                                                <span className="float-end">

                                                    <button onClick={() => showEditPanel(item.id)} className='text-decoration-none p-0 mt-2 text-primary btn-link btn'>
                                                        Edit <i className="lni lni-pencil-alt"></i>
                                                    </button>
                                                    <button onClick={() => showRemovePanel(item.id)} className='text-decoration-none p-0 ms-4 mt-2 text-danger btn-link btn'>
                                                        Delete  <i className="lni lni-trash-can"></i>
                                                    </button>
                                                </span>
                                            </div>
                                            <div
                                                id='edit-panel'
                                                className={editPanel === item.id ? 'd-block' : 'd-none'}
                                            >
                                                <div className="p-4">
                                                    {/* <EditForm item={item} /> */}
                                                    {/* {props.editForm} */}
                                                    {props.component}
                                                </div>
                                            </div>
                                            {/* <div id='remove-panel' className={removePanel === item.id ? 'd-block' : 'd-none'}>
                                                <div className="accordion-body bg-light">
                                                    <h3>Are you sure to delete?</h3>
                                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                                        <button onClick={() => removeitem(item.id)} className="main-btn danger-btn btn-hover btn-sm">Move to trash</button>
                                                        <button onClick={() => setRemovePanel(null)} className="main-btn dark-btn btn-hover btn-sm">Cancel</button>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >
    )
}

export default ListContainer