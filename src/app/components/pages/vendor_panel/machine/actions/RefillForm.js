import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select } from "app/components/utils/form_elements"
import { RefillFormValidationRules } from "../validation";
import { noOfProductsData } from "assets/data";
import { fetchProduct } from "features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const RefillForm = (props) => {

    const dispatch = useDispatch()

    const { data: products, status } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    const { handleClose } = props

    const initialValues = { product_id: '', quantity: '', price: '' }

    const onSubmit = (values, onSubmitProps) => {
        //     createMachine(values, onSubmitProps)
    }

    console.log(products)


    // keys cannot be changed in select
    const productsProps = {
        name: 'product_id',
        placeholder: 'Choose product..',
        filterBy: null,
        optionFields: products,
    }

    const noOfProductsProps = {
        name: 'no_of_products',
        placeholder: 'Number of products..',
        filterBy: null,
        optionFields: noOfProductsData.data,
    }

    const priceProps = {
        name: 'price',
        placeholder: 'Enter price..',
        type: 'number'
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RefillFormValidationRules}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={productsProps} error={errors.product_id && touched.product_id ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <Input props={priceProps} error={errors.price && touched.price ? true : false} />
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={noOfProductsProps} error={errors.no_of_products && touched.no_of_products ? true : false} />
                        </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Create</Button>
                        <Button type="button" onClick={handleClose} className="btn-dark btn-hover btn-sm">Cancel</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default RefillForm