import React, { useRef, useState } from "react"
import PageTitle from "../common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { create, update, remove } from "../../../features/product/product_list_slice"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import { product_category_types_data } from "../../../assets/data";


const ProductList = () => {

    const category_options = product_category_types_data.types

    const product_list_state = useSelector((state) => {
        return state['product_list']
    })

    const dispatch = useDispatch()

    const { products } = product_list_state
    const createFormRef = useRef(null)
    const updateFormRef = useRef(null)
    const categoryRef = useRef(null)
    const updateCategoryRef = useRef(null)

    const [name, setName] = useState('')
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('')
    const [updatedname, setUpdatedName] = useState('')
    const [updatedcategory, setUpdatedCategory] = useState('')
    const [updatedimage, setUpdatedImage] = useState('')
    const [editPanel, setEditPanel] = useState(null)
    const [removePanel, setRemovePanel] = useState(null)
    const [validated, setValidated] = useState(false);
    const [updateValidated, setUpdateValidated] = useState(false);

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

    const createProductFormValidation = (e) => {
        if (category === '') {
            setCategory(null)
        }
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation()
            setValidated(true)
            return false
        }

        return true
    }

    const resetCreateProductForm = () => {
        createFormRef.current.product.value = ""
        createFormRef.current.image.value = ""
        categoryRef.current.clear()
        setValidated(false);
    };

    const createProduct = (e) => {
        console.log(e.target)
        if (createProductFormValidation(e)) {
            const id = products.length + 1
            const new_product = { id, name, category, image }

            if (dispatch(create(new_product))) {
                setValidated(false);
                resetCreateProductForm()
            }
        }
    }

    const updateProductFormValidation = (e) => {
        e.preventDefault()
        const form = e.target;
        if (form.checkValidity() === false) {
            e.stopPropagation()
            setUpdateValidated(true)
            return false
        }

        if (updatedname !== '' && updatedcategory !== '' && updatedimage === '') {
            return false
        }

        return true
    }

    const updateProduct = (id, e) => {
        if (updateProductFormValidation(e)) {
            dispatch(update({ id, updatedname, updatedcategory, updatedimage }))
            setEditPanel(null)
        }
    }

    const removeProduct = (id) => {
        if (dispatch(remove(id)))
            setRemovePanel(null)
    }

    const handleSetCategory = selected => {
        const selected_category = selected.toString()
        setCategory(selected_category)
    }


    const handleSetUpdatedCategory = selected => {
        console.log(selected)
        const selected_category = selected.toString()
        setUpdatedCategory(selected_category)
    }

    const handleUploadImage = (e) => {
        setImage(e.target.files[0].name);
    }


    const handleSetUpdatedUploadImage = (e) => {
        setUpdatedImage(e.target.files[0].name);
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
                                                    <Form ref={updateFormRef} id={product.id} noValidate validated={updateValidated} onSubmit={(e) => updateProduct(product.id, e)}>
                                                        <Form.Group controlId="validationCustom01" className="input-style-1">
                                                            <Form.Control
                                                                required
                                                                name="product"
                                                                type="text"
                                                                placeholder="Enter product name"
                                                                onChange={(e) => { setUpdatedName(e.target.value) }}
                                                                defaultValue={product.name}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                *Product name is required
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group controlId="validationCustom02" className="input-style-1">
                                                            <Typeahead
                                                                ref={updateCategoryRef}
                                                                className={category === null ? 'is-invalid' : ''}
                                                                id="basic-typeahead-single"
                                                                inputProps={{ required: true, name: "category" }}
                                                                onChange={handleSetUpdatedCategory}
                                                                options={category_options}
                                                                placeholder="Choose a category..."
                                                                defaultInputValue={product.category}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                *Category is required
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group controlId="formFileLg" className="input-style-1">
                                                            <Form.Control
                                                                required={product.image === '' ? 'required' : ''}
                                                                name="image"
                                                                type="file"
                                                                placeholder="Choose product image"
                                                                onChange={handleSetUpdatedUploadImage}
                                                            />
                                                        </Form.Group>
                                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                            <button type='submit' className="main-btn dark-btn btn-hover btn-sm">Update Product</button>
                                                            <button onClick={() => setEditPanel(null)} type='button' className="main-btn light-btn btn-hover btn-sm">Cancel</button>
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
                            <Form ref={createFormRef} noValidate validated={validated} onSubmit={createProduct}>
                                <Form.Group controlId="validationCustom01" className="input-style-1">
                                    <Form.Control
                                        name="product"
                                        required
                                        type="text"
                                        placeholder="Enter product name"
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        *Product name is required
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationCustom02" className="input-style-1">
                                    <Typeahead
                                        ref={categoryRef}
                                        className={category === null ? 'is-invalid' : ''}
                                        id="basic-typeahead-single"
                                        inputProps={{ required: true }}
                                        name="category"
                                        onChange={handleSetCategory}
                                        options={category_options}
                                        placeholder="Choose a category..."
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        *Category is required
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formFileLg" className="input-style-1">
                                    <Form.Control
                                        name="image"
                                        required
                                        type="file"
                                        placeholder="Choose product image"
                                        onChange={handleUploadImage}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        *Product image is required
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