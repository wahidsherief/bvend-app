import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select, File } from "app/components/utils/form_elements"
import { useSelector, useDispatch } from "react-redux"
import { fetchProduct, saveProduct } from "features/ProductSlice"
import { getFileName } from "services";
import { CreateFormValidationRules } from "../validation";
import { productCategoryTypesData } from "assets/data";
import { useEffect } from "react";


const Create = () => {

    const dispatch = useDispatch()

    const { data: products } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    const create = (values, onSubmitProps) => {
        let { name, category, image } = values
        image = getFileName(image)
        const id = products.length + 1
        const newValues = { id, name, category, image }
        dispatch(saveProduct(newValues)) && onSubmitProps.resetForm()
    }

    const initialValues = { name: '', category: '', image: '' }

    const onSubmit = (values, onSubmitProps) => {
        create(values, onSubmitProps)
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
        name: 'image',
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
            {({ errors, touched }) => (
                <Form>
                    <div className="input-style-1">
                        <Input inputProps={nameProps} error={errors.name && touched.name ? true : false} />
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select selectProps={categoryProps} error={errors.category && touched.category ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <File fileProps={imageProps} error={errors.image && touched.image ? true : false} />
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Create</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default Create