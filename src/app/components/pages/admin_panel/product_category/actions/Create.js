import { useEffect } from "react";
import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input } from "app/components/utils/form_elements"
import { useSelector, useDispatch } from "react-redux"
import { CreateFormValidationRules } from "../validation";
import { getCategories, createCategory } from "features/ProductCategorySlice";


const Create = () => {

    const dispatch = useDispatch()

    const { data: categories } = useSelector((state) => state.productCategory)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const createProductCategory = (values, onSubmitProps) => {
        let { category, brand } = values
        const id = categories.length + 1
        const newValues = { id, category, brand }
        console.log(newValues)
        dispatch(createCategory(newValues)) && onSubmitProps.resetForm()
    }

    const initialValues = { category: '', brand: '' }

    const onSubmit = (values, onSubmitProps) => {
        createProductCategory(values, onSubmitProps)
    }

    const categoryProps = {
        name: 'category',
        type: 'text',
        placeholder: 'Enter product category name..',
    }

    const brandProps = {
        name: 'brand',
        type: 'text',
        placeholder: 'Enter product brand name..',
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
                        <Input inputProps={categoryProps} error={errors.category && touched.category ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <Input inputProps={brandProps} error={errors.brand && touched.brand ? true : false} />
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