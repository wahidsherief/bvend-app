import React, { useState } from "react"
import PageTitle from "../common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { remove } from "../../../features/product/product_list_slice"
import EditForm from "./EditForm";


const ProductList = () => {
    const product_list_state = useSelector((state) => {
        return state['product_list']
    })

    const dispatch = useDispatch()
    const { products } = product_list_state

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


    const removeProduct = (id) => {
        if (dispatch(remove(id)))
            setRemovePanel(null)
    }

    const action = {
        hasAction: true,
        actionTitle: 'Add Product',
        actionLink: '/product/create'
    }

    return (
        <React.Fragment>
            <PageTitle title='Product List' action={action} />
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <p className="text-sm mb-20">
                                Total products: {products.length}
                            </p>
                            {
                                products.length > 0 &&
                                products.map((product) => (
                                    <div key={product.id} className="accordion mb-2" id="accordionExample">
                                        <div className="accordion-item">
                                            <div className="accordion-header p-3" id="headingOne">
                                                <img src={require(`../../../../public/bvend/products/${product.image}`)} className="image-in-list" alt={product.name} />
                                                <span className="ms-3">{product.name}</span>
                                                <span className="ms-3">{product.category}</span>
                                                <span className="float-end">

                                                    <button onClick={() => showEditPanel(product.id)} className='text-decoration-none p-0 mt-2 text-primary btn-link btn'>
                                                        Edit <i className="lni lni-pencil-alt"></i>
                                                    </button>
                                                    <button onClick={() => showRemovePanel(product.id)} className='text-decoration-none p-0 ms-4 mt-2 text-danger btn-link btn'>
                                                        Delete  <i className="lni lni-trash-can"></i>
                                                    </button>
                                                </span>
                                            </div>
                                            <div
                                                id='edit-panel'
                                                className={editPanel === product.id ? 'd-block' : 'd-none'}
                                            >
                                                <div className="p-4">
                                                    <EditForm product={product} hideEditPanel={hideEditPanel} />
                                                </div>
                                            </div>
                                            <div id='remove-panel' className={removePanel === product.id ? 'd-block' : 'd-none'}>
                                                <div className="accordion-body bg-light">
                                                    <h3>Are you sure to delete?</h3>
                                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                                        <button onClick={() => removeProduct(product.id)} className="main-btn danger-btn btn-hover btn-sm">Move to trash</button>
                                                        <button onClick={() => setRemovePanel(null)} className="main-btn dark-btn btn-hover btn-sm">Cancel</button>
                                                    </div>
                                                </div>
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

export default ProductList