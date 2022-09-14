import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select, File } from "app/components/utils/form_elements"
import { useSelector, useDispatch } from "react-redux"
import { create } from "features/ProductSlice"
import { getFileName } from "services";
import { CreateFormValidationRules } from "../validation";
import { productCategoryTypesData } from "assets/data";


const Create = () => {

    const productListSlice = useSelector((state) => {
        return state['product']
    })

    const dispatch = useDispatch()

    const { products } = productListSlice

    const createProduct = (values, onSubmitProps) => {
        let { name, category, image } = values
        image = getFileName(image)
        const id = products.length + 1
        const newValues = { id, name, category, image }
        dispatch(create(newValues)) && onSubmitProps.resetForm()
    }

    const initialValues = { name: '', category: '', image: '' }

    const onSubmit = (values, onSubmitProps) => {
        createProduct(values, onSubmitProps)
    }

    const nameProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Choose product name..',
    }

    const categoryProps = {
        name: 'category',
        placeholder: 'Choose product category..',
        filterBy: null,
        optionFields: productCategoryTypesData.types,
    }


    const imageProps = {
        name: 'newImage',
        placeholder: 'Choose product image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            <Form>
                <div className="input-style-1">
                    <Input inputProps={nameProps} />
                </div>

                <div className="select-style-2">
                    <div className="select-position">
                        <Select selectProps={categoryProps} />
                    </div>
                </div>

                <div className="input-style-1">
                    <File fileProps={imageProps} />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Create Product</Button>
                </div>
            </Form>
        </Formik >
    )
}

export default Create