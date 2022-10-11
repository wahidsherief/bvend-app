


import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { Input } from "app/components/utils/form_elements"
import { updateCategory } from "features/ProductCategorySlice";
import { UpdateFormValidationRules } from "../validation";

const Edit = (props) => {

    const dispatch = useDispatch()

    const updateProductCategory = (values, onSubmitProps) => {
        let { id, category, brand } = values
        const updatedValues = { id, category, brand }
        dispatch(updateCategory(updatedValues)) && onSubmitProps.resetForm()
    }

    const { id } = props.item
    const initialValues = { ...props.item }

    const onSubmit = (values, onSubmitProps) => {
        updateProductCategory(values, onSubmitProps)
    }

    const categoryProps = {
        id: `product_category_${id}`,
        name: 'category',
        type: 'text',
        placeholder: 'Choose product category name..',
    }

    const brandProps = {
        id: `product_category_${id}`,
        name: 'brand',
        type: 'text',
        placeholder: 'Choose product brand name..',
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={UpdateFormValidationRules}
            onSubmit={onSubmit}
            className="accordion-body bg-light"
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
                        <Button type="submit" className="primary-btn btn-hover btn-sm">Update</Button>
                        <Button type="button" onClick={() => props.hideEditPanel(null)} className="btn-dark btn-hover btn-sm">Cancel</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default Edit