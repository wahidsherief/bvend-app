import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select, File, TextArea } from "app/components/utils/form_elements"
import { useSelector, useDispatch } from "react-redux"
import { create } from "features/MachineSlice"
import { getFileName } from "services";
import { RefillFormValidationRules } from "../validation";
import { productListData, noOfProductsData, productCategoryTypesData } from "assets/data";


const RefillForm = () => {

    // const productListSlice = useSelector((state) => {
    //     return state['product']
    // })

    // const dispatch = useDispatch()

    // const { machines } = machineListSlice

    // const createMachine = (values, onSubmitProps) => {
    //     let { name, category, description, image } = values
    //     image = getFileName(image)
    //     const id = machines.length + 1
    //     const newValues = { id, name, category, description, image }
    //     dispatch(create(newValues)) && onSubmitProps.resetForm()
    // }

    const initialValues = { product_id: '', no_of_products: '', price: '' }

    const onSubmit = (values, onSubmitProps) => {
        //     createMachine(values, onSubmitProps)
    }


    // keys cannot be changed in select
    const productsProps = {
        name: 'product_id',
        placeholder: 'Choose product..',
        filterBy: null,
        optionFields: productListData.products,
        // optionFields: productCategoryTypesData.types,
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
                            <Select selectProps={productsProps} error={errors.product_id && touched.product_id ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <Input inputProps={priceProps} error={errors.price && touched.price ? true : false} />
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select selectProps={noOfProductsProps} error={errors.no_of_products && touched.no_of_products ? true : false} />
                        </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Create</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default RefillForm