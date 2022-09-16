import React, { useState } from "react"

const ListContainer = ({ item }) => {

    const Edit = item.hasEdit ? item.edit : null
    const Remove = item.hasRemove ? item.remove : null
    const Detail = item.hasDetail ? item.detail : null

    const { itemName, items } = item

    const [editPanel, setEditPanel] = useState(null)
    const [removePanel, setRemovePanel] = useState(null)
    const [detailPanel, setDetailPanel] = useState(null)

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

    const toggleDetailPanel = (id) => {
        if (detailPanel === id)
            return setDetailPanel(null)
        setDetailPanel(id)
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
                                                    {item.title !== undefined && <span className="me-3 text-bold">{item.title}</span>}
                                                    {item.name !== undefined && <span className="me-3 text-bold">{item.name}</span>}
                                                    {item.category !== undefined && <span className="me-3 text-bold">{item.category}</span>}
                                                    {item.brand !== undefined && <span className="me-3">{item.brand}</span>}
                                                </div>
                                                <div className="col-lg-5 d-flex justify-content-end align-items-center">
                                                    {Edit !== null &&
                                                        <button onClick={() => showEditPanel(item.id)} className='text-decoration-none p-0 text-primary btn-link btn'>
                                                            Edit <i className="lni lni-pencil-alt"></i>
                                                        </button>
                                                    }
                                                    {Remove !== null &&
                                                        <button onClick={() => showRemovePanel(item.id)} className='text-decoration-none p-0 ms-4 text-danger btn-link btn'>
                                                            Delete  <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    }
                                                    {Detail !== null &&
                                                        <button onClick={() => toggleDetailPanel(item.id)} className='text-decoration-none p-0 ms-4 text-danger btn-link btn'>
                                                            <i className="lni lni-menu"></i>
                                                        </button>
                                                    }
                                                </div>
                                            </div>

                                            {Edit !== null &&
                                                <div className={editPanel === item.id ? 'd-block p-4' : 'd-none'}>
                                                    <Edit item={item} hideEditPanel={hideEditPanel} />
                                                </div>
                                            }

                                            {Remove !== null &&
                                                <div id='remove-panel' className={removePanel === item.id ? 'd-block' : 'd-none'}>
                                                    <Remove item={item} setRemovePanel={setRemovePanel} />
                                                </div>
                                            }

                                            {Detail !== null &&
                                                <div id='detail-panel' className={detailPanel === item.id ? 'd-block' : 'd-none'}>
                                                    <Detail item={item} />
                                                </div>
                                            }

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