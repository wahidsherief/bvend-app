


import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { Input } from "app/components/utils/form_elements"
import { updateCategory } from "features/ProductCategorySlice";
import { UpdateFormValidationRules } from "../validation";

const Edit = (props) => {

    const dispatch = useDispatch()

    const { handleClose, modalInfo } = props

    const update = (values, onSubmitProps) => {
        let { id, name, brand } = values
        const updatedValues = { id, name, brand }
        dispatch(updateCategory(updatedValues)) && onSubmitProps.resetForm()
    }

    const { id } = modalInfo.data

    const initialValues = { ...modalInfo.data }

    const onSubmit = (values, onSubmitProps) => {
        update(values, onSubmitProps)
        handleClose()
    }

    const categoryProps = {
        id: id,
        name: 'name',
        type: 'text',
        placeholder: 'Choose product category name..',
    }

    const brandProps = {
        id: id,
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
                        <Input props={categoryProps} error={errors.name && touched.name ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <Input props={brandProps} error={errors.brand && touched.brand ? true : false} />
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="primary-btn btn-hover btn-sm">Update</Button>
                        <Button type="button" onClick={handleClose} className="btn-dark btn-hover btn-sm">Cancel</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default Edit