import React, { useState } from "react"
import PageTitle from "../common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { create, update, remove } from "../../../features/product/product_list_slice"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductList = () => {

    const product_list_state = useSelector((state) => {
        return state['product_list']
    })

    const dispatch = useDispatch()

    const { products } = product_list_state

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [updatedproduct, setUpdatedProduct] = useState('')
    const [updatedcategory, setUpdatedCategory] = useState('')
    const [editPanel, setEditPanel] = useState(null)
    const [removePanel, setRemovePanel] = useState(null)
    const [validated, setValidated] = useState(false);

    const showEditPanel = (id) => {
        if (removePanel !== null) {
            setRemovePanel(null)
        }
        if (editPanel === id)
            return setEditPanel(null)
        setEditPanel(id)

    }

    const showRemovePanel = (id) => {
        if (editPanel !== null) {
            setEditPanel(null)
        }
        if (removePanel === id)
            return setRemovePanel(null)
        setRemovePanel(id)

    }

    const createProduct = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);

        }
        else {
            const id = products.length + 1
            const new_product = { id, name, category }

            if (dispatch(create(new_product))) {
                setValidated(false);
                form.name.value = ""
                form.category.value = ""
            }
        }
    }

    const updateProduct = (id) => {
        if (dispatch(update({ id, updatedproduct, updatedcategory })))
            setEditPanel(null)
    }

    const removeProduct = (id) => {
        if (dispatch(remove(id)))
            setRemovePanel(null)
    }


    return (
        <React.Fragment>
            <PageTitle title='Product List' />
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-7">
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
                                                <img src="..." className="img-thumbnail" alt="..." />
                                                <span className="ms-3">{product.name}</span>
                                                <span className="ms-3">{product.category}</span>
                                                <span className="float-end">
                                                    <button onClick={() => showEditPanel(product.id)} className='p-0 text-primary btn-link btn'>
                                                        <i className="lni lni-pencil-alt"></i>
                                                    </button>
                                                    <button onClick={() => showRemovePanel(product.id)} className='p-0 ms-2 text-danger btn-link btn'>
                                                        <i className="lni lni-trash-can"></i>
                                                    </button>
                                                </span>
                                            </div>
                                            <div id='edit-panel' className={editPanel === product.id ? 'd-block' : 'd-none'}>
                                                <div className="accordion-body bg-light">
                                                    <h4 className="mb-3">Edit Product</h4>
                                                    <div className="input-style-1">
                                                        <input
                                                            type="text"
                                                            placeholder={product.name}
                                                            onChange={(e) => { setUpdatedProduct(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="input-style-1">
                                                        <input
                                                            type="text"
                                                            placeholder={product.category}
                                                            onChange={(e) => { setUpdatedCategory(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                        <button onClick={() => updateProduct(product.id)} className="main-btn dark-btn btn-hover btn-sm">Update Category</button>
                                                        <button onClick={() => setEditPanel(null)} className="main-btn light-btn btn-hover btn-sm">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id='remove-panel' className={removePanel === product.id ? 'd-block' : 'd-none'}>
                                                <div className="accordion-body bg-light">
                                                    <h3>Are you sure to remove?</h3>
                                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                                        <button onClick={() => removeProduct(product.id)} className="main-btn danger-btn btn-hover btn-sm">Move to trash</button>
                                                        <button onClick={() => setRemovePanel(null)} className="main-btn light-btn btn-hover btn-sm">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card-style mb-30">
                            <h4 className="mb-25">Add Product</h4>
                            <Form noValidate validated={validated} onSubmit={createProduct}>
                                <Form.Group controlId="validationCustom01" className="input-style-1">
                                    <Form.Control
                                        name="product"
                                        required
                                        type="text"
                                        placeholder="Enter product name"
                                        onChange={(e) => { setName(e.target.value) }}
                                        defaultValue={name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        *Product name is required
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationCustom02" className="input-style-1">
                                    <Form.Control
                                        name="category"
                                        required
                                        type="text"
                                        placeholder="Enter brand name"
                                        onChange={(e) => { setCategory(e.target.value) }}
                                        defaultValue={category}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        *Category is required
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Save Product</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >
    )
}

export default ProductList