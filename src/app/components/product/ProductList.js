import React, { useState } from "react"
import PageTitle from "../common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { create, update, remove } from "../../../features/product/product_list_slice"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CategorySelect from "../custom/CategorySelect";
import { Formik, useFormik } from "formik";
import * as yup from "yup";


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

    const cancelEditPanel = (id) => {
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

    const createProduct = (values) => {
        const id = products.length + 1
        // const new_product = { id, name, category, image }
        // dispatch(create(new_product))
    }

    const updateProduct = (id, e) => {
        // dispatch(update(updatedValues))
        // setEditPanel(null)
    }

    const removeProduct = (id) => {
        if (dispatch(remove(id)))
            setRemovePanel(null)
    }


    const createForm = useFormik({
        initialValues: {
            name: '',
            category: '',
            image: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Product name should be at least 2 characters").required('Product name is required'),
            category: yup.string().required('Product category is required'),
            image: yup.string().required('Product image is required'),
        }),
        onSubmit: (values) => {
            // createProduct(values)
        }
    })


    const updateForm = useFormik({
        initialValues: {
            name: '',
            category: '',
            image: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Product name should be at least 2 characters").required('Product name is required'),
            category: yup.string().required('Product category is required'),
            image: yup.string().required('Product image is required'),
        }),
        onSubmit: (values) => {
            // updateProduct(values)
            console.log(values)
        }
    })

    console.log(createForm.errors)
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
                                                <img src={require(`../../../../public/bvend/products/${product.image}`)} className="image-in-list" alt={product.name} />
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
                                                    <Form noValidate onSubmit={updateForm.handleSubmit}>
                                                        <Form.Group controlId="validationCustom01" className="input-style-1">
                                                            <Form.Control
                                                                className={updateForm.errors.name && "is-invalid"}
                                                                name="name"
                                                                required
                                                                type="text"
                                                                placeholder="Enter product name"
                                                                onChange={updateForm.handleChange}
                                                                onBlur={updateForm.handleBlur}
                                                                value={product.name}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {updateForm.errors.name && updateForm.errors.name}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group controlId="validationCustom02" className="select-style-2">
                                                            <CategorySelect
                                                                formik={updateForm}
                                                                filterOption={product.category} />
                                                            <Form.Control.Feedback type="invalid">
                                                                {updateForm.errors.category && updateForm.errors.category}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group controlId="formFileLg" className="input-style-1">
                                                            <Form.Control
                                                                className={updateForm.errors.image && "is-invalid"}
                                                                name="image"
                                                                required
                                                                type="file"
                                                                placeholder="Choose product image"
                                                                onChange={updateForm.handleChange}
                                                                onBlur={updateForm.handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {updateForm.errors.name && updateForm.errors.name}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                            <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Update Product</Button>
                                                        </div>
                                                    </Form>
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
                            <Form noValidate onSubmit={createForm.handleSubmit}>
                                <Form.Group controlId="validationCustom01" className="input-style-1">
                                    <Form.Control
                                        className={createForm.errors.name && "is-invalid"}
                                        name="name"
                                        required
                                        type="text"
                                        placeholder="Enter product name"
                                        onChange={createForm.handleChange}
                                        onBlur={createForm.handleBlur}
                                        value={createForm.values.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {createForm.errors.name && createForm.errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationCustom02" className="select-style-2">
                                    <CategorySelect
                                        formik={createForm}
                                        filterOption={null} />
                                    <Form.Control.Feedback type="invalid">
                                        {createForm.errors.category && createForm.errors.category}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formFileLg" className="input-style-1">
                                    <Form.Control
                                        className={createForm.errors.image && "is-invalid"}
                                        name="image"
                                        required
                                        type="file"
                                        placeholder="Choose product image"
                                        onChange={createForm.handleChange}
                                        onBlur={createForm.handleBlur}
                                        value={createForm.values.image}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {createForm.errors.name && createForm.errors.name}
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