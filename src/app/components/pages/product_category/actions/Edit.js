import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { Input } from "app/components/utils/form_elements"
import { update } from "features/ProductCategorySlice";
import { getFileName } from "services";
import { UpdateFormValidationRules } from "../validation";

const Edit = (props) => {

    const dispatch = useDispatch()

    const updateProductCategory = (values, onSubmitProps) => {
        let { id, name, category, image, newImage } = values
        image = newImage !== undefined ? getFileName(newImage) : image
        const updatedValues = { id, name, category, image }
        dispatch(update(updatedValues)) && onSubmitProps.resetForm()
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
            <Form>
                <div className="input-style-1">
                    <Input inputProps={categoryProps} />
                </div>

                <div className="input-style-1">
                    <Input inputProps={brandProps} />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button type="submit" className="primary-btn btn-hover btn-sm">Update Category</Button>
                    <Button type="button" onClick={() => props.hideEditPanel(null)} className="btn-dark btn-hover btn-sm">Cancel</Button>
                </div>
            </Form>
        </Formik >
    )
}

export default Edit