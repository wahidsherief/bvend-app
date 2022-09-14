import React, { useState } from "react"

const ListContainer = (props) => {

    const Edit = props.children[0].type
    const Remove = props.children[1].type

    const { itemName, items } = props.item

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

    const hideEditPanel = () => {
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
                                        <div className="accordion-item container">
                                            <div className="accordion-header row p-3" id="headingOne">
                                                <div className="col-lg-7 d-flex justify-content-start align-items-center">
                                                    {item.image !== undefined &&
                                                        <img src={require(`../../../../public/bvend/${itemName}/${item.image}`)} className="image-in-list me-3" alt={item.name} />
                                                    }

                                                    <span>{item.name}</span>
                                                    <span className="ms-3">{item.category}</span>
                                                </div>
                                                <div className="col-lg-5 d-flex justify-content-end align-items-center">
                                                    <button onClick={() => showEditPanel(item.id)} className='text-decoration-none p-0 text-primary btn-link btn'>
                                                        Edit <i className="lni lni-pencil-alt"></i>
                                                    </button>
                                                    <button onClick={() => showRemovePanel(item.id)} className='text-decoration-none p-0 ms-4 text-danger btn-link btn'>
                                                        Delete  <i className="lni lni-trash-can"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={editPanel === item.id ? 'd-block p-4' : 'd-none'}>
                                                <Edit item={item} hideEditPanel={hideEditPanel} />
                                            </div>
                                            <div id='remove-panel' className={removePanel === item.id ? 'd-block' : 'd-none'}>
                                                <Remove item={item} setRemovePanel={setRemovePanel} />
                                            </div>
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