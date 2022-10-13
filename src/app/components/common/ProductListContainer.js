import { product } from "features/ProductSlice"
import React, { useState } from "react"

const ProductListContainer = ({ name, item }) => {

    const Edit = item.hasEdit ? item.edit : null
    const Remove = item.hasRemove ? item.remove : null
    const Detail = item.hasDetail ? item.detail : null

    const { items: products } = item

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

    const RenderItems = (props) => {
        // Object.entries(props.item.category).map(() =>())\
        const { product } = props
        return (
            // <div key={item.id} className="accordion mb-2" id="accordionExample" >
            //     <div className="accordion-item container">
            //         <div className="accordion-header row p-3" id="headingOne">
            //             <div className="col-lg-7 d-flex justify-content-start align-items-center">
            //                 {item.image !== undefined && item.image.length > 0 &&
            //                     < img src={require(`assets/bvend/${itemName}/${item.image}`)} className="image-in-list me-3" alt={item.name} />
            //                 }
            //                 {item.title !== undefined && <span className="me-3 text-bold">{item.title}</span>}
            //                 {item.name !== undefined && <span className="me-3 text-bold">{item.name}</span>}
            //                 {item.category.category !== undefined && <span className="me-3 text-bold">{item.category.category}</span>}
            //                 {item.category.brand !== undefined && <span className="me-3">{item.category.brand}</span>}


            //             </div>
            //             <div className="col-lg-5 d-flex justify-content-end align-items-center">
            //                 {Edit !== null &&
            //                     <button onClick={() => showEditPanel(item.id)} className='text-decoration-none p-0 text-primary btn-link btn'>
            //                         Edit <i className="lni lni-pencil-alt"></i>
            //                     </button>
            //                 }
            //                 {Remove !== null &&
            //                     <button onClick={() => showRemovePanel(item.id)} className='text-decoration-none p-0 ms-4 text-danger btn-link btn'>
            //                         Delete  <i className="lni lni-trash-can"></i>
            //                     </button>
            //                 }
            //                 {Detail !== null &&
            //                     <button onClick={() => toggleDetailPanel(item.id)} className='text-decoration-none p-0 ms-4 text-danger btn-link btn'>
            //                         <i className="lni lni-menu"></i>
            //                     </button>
            //                 }
            //             </div>
            //         </div>

            //         {/* {Edit !== null &&
            //             <div className={editPanel === item.id ? 'd-block p-4' : 'd-none'}>
            //                 <Edit item={item} hideEditPanel={hideEditPanel} />
            //             </div>
            //         }

            //         {Remove !== null &&
            //             <div id='remove-panel' className={removePanel === item.id ? 'd-block' : 'd-none'}>
            //                 <Remove item={item} setRemovePanel={setRemovePanel} />
            //             </div>
            //         }

            //         {Detail !== null &&
            //             <div id='detail-panel' className={detailPanel === item.id ? 'd-block' : 'd-none'}>
            //                 <Detail item={item} />
            //             </div>
            //         } */}

            //     </div>
            // </div>
            <>
                <tr>
                    <td>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="checkbox-1"
                        />
                    </td>
                    <td>
                        <img src="assets/images/lead/lead-1.png" alt="" />
                    </td>
                    <td class="min-width">
                        <p className="text-bold">{product.name}</p>
                    </td>
                    <td class="min-width">
                        <div>
                            <p>{product.category.category}</p>
                            <p className="text-black-50">{product.category.brand}</p>
                        </div>
                    </td>
                    <td class="min-width">
                        <span class="status-btn active-btn">Active</span>
                    </td>
                    <td>
                        <div class="action">
                            <button class="text-danger">
                                <i class="lni lni-trash-can"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }




    return (
        <React.Fragment>
            <AppModal modalInfo={modalInfo} modal={modal} hideModal={hideModal} />
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <h6 class="mb-10">Total Products : {products.length}</h6>
                            {/* <p class="text-sm mb-20">
                                For basic styling—light padding and only horizontal
                                dividers—use the class table.
                            </p> */}
                            <div class="table-wrapper table-responsive mt-4">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th><h6></h6></th>
                                            <th><h6>Product</h6></th>
                                            <th><h6>Name</h6></th>
                                            <th><h6>Category</h6></th>
                                            <th><h6>Status</h6></th>
                                            <th><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.length > 0 &&
                                            products.map((product) => (
                                                <RenderItems product={product} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </React.Fragment >
    )
}

export default ProductListContainer