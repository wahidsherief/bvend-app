import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select } from "app/components/utils/form_elements"
import { RefillFormValidationRules } from "../validation";
import { noOfProductsData } from "assets/data";
import { fetch as fetchProduct } from "features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { storeRefill } from "features/VendorMachineSlice";

const RefillForm = (props) => {

    const dispatch = useDispatch()

    const { data: products } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    const { handleClose } = props
    const { machineID, rowNumber, colNumber } = props.modalInfo.info

    const initialValues = {
        machines_id: machineID,
        row: rowNumber,
        tray: colNumber,
        products_id: '',
        quantity: '',
        price: ''
    }

    const onSubmit = (values, onSubmitProps) => {
        dispatch(storeRefill(values)) && onSubmitProps.resetForm()
    }

    const productsProps = {
        name: 'products_id',
        placeholder: 'Choose product..',
        filterBy: null,
        optionFields: products,
    }

    const quantityProps = {
        name: 'quantity',
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
                            <Select props={productsProps} error={errors.products_id && touched.products_id ? true : false} />
                        </div>
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={quantityProps} error={errors.quantity && touched.quantity ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <Input props={priceProps} error={errors.price && touched.price ? true : false} />
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