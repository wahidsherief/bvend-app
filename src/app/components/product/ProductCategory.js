import React, { useState } from "react"
import PageTitle from "../common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { create, update, remove } from "../../../features/product/product_category_slice"


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductCategory = () => {

    const product_category_state = useSelector((state) => {
        return state['product_category']
    })

    const dispatch = useDispatch()

    const { categories } = product_category_state

    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [updatedcategory, setUpdatedCategory] = useState("")
    const [updatedbrand, setUpdatedBrand] = useState("")
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

    const createProductCategory = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);

        }
        else {
            const id = categories.length + 1
            const new_category = { id, category, brand }

            if (dispatch(create(new_category))) {
                setValidated(false);
                form.category.value = ""
                form.brand.value = ""
            }
        }
    }

    const updateProductCategory = (id) => {
        if (dispatch(update({ id, updatedcategory, updatedbrand })))
            setEditPanel(null)
    }

    const removeProductCategory = (id) => {
        if (dispatch(remove(id)))
            setRemovePanel(null)
    }


    return (
        <React.Fragment>
            <PageTitle title='Product Category' />
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="card-style mb-30">
                            <p className="text-sm mb-20">
                                Total categories: {categories.length}
                            </p>
                            {
                                categories.length > 0 &&
                                categories.map((category) => (
                                    <div key={category.id} className="accordion mb-2" id="accordionExample">
                                        <div className="accordion-item">
                                            <p className="accordion-header p-3" id="headingOne">
                                                <span>{category.category}</span>
                                                <span className="ms-3">{category.brand}</span>
                                                <span className="float-end">
                                                    <button onClick={() => showEditPanel(category.id)} className='p-0 text-primary btn-link btn'>
                                                        <i className="lni lni-pencil-alt"></i>
                                                    </button>
                                                    <button onClick={() => showRemovePanel(category.id)} className='p-0 ms-2 text-danger btn-link btn'>
                                                        <i className="lni lni-trash-can"></i>
                                                    </button>
                                                </span>
                                            </p>
                                            <div id='edit-panel' className={editPanel === category.id ? 'd-block' : 'd-none'}>
                                                <div className="accordion-body bg-light">
                                                    <h4 className="mb-3">Edit Category</h4>
                                                    <div className="input-style-1">
                                                        <input
                                                            type="text"
                                                            placeholder={category.category}
                                                            onChange={(e) => { setUpdatedCategory(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="input-style-1">
                                                        <input
                                                            type="text"
                                                            placeholder={category.brand}
                                                            onChange={(e) => { setUpdatedBrand(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                        <button onClick={() => updateProductCategory(category.id)} className="main-btn dark-btn btn-hover btn-sm">Update Category</button>
                                                        <button onClick={() => setEditPanel(null)} className="main-btn light-btn btn-hover btn-sm">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id='remove-panel' className={removePanel === category.id ? 'd-block' : 'd-none'}>
                                                <div className="accordion-body bg-light">
                                                    <h3>Are you sure to remove?</h3>
                                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                                        <button onClick={() => removeProductCategory(category.id)} className="main-btn danger-btn btn-hover btn-sm">Move to trash</button>
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
                            <h4 className="mb-25">Add Category</h4>
                            <Form noValidate validated={validated} onSubmit={createProductCategory}>
                                <Form.Group controlId="validationCustom01" className="input-style-1">
                                    <Form.Control
                                        name="category"
                                        required
                                        type="text"
                                        placeholder="Enter category name"
                                        onChange={(e) => { setCategory(e.target.value) }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        *Category is required
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationCustom02" className="input-style-1">
                                    <Form.Control
                                        name="brand"
                                        required
                                        type="text"
                                        placeholder="Enter brand name"
                                        onChange={(e) => { setBrand(e.target.value) }}
                                        defaultValue={brand}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        *Brand is required
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Save Category</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >
    )
}

export default ProductCategory