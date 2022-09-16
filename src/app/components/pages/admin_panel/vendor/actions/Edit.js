import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { Input, File } from "app/components/utils/form_elements"
import { update } from "features/VendorSlice";
import { getFileName } from "services";
import { UpdateFormValidationRules } from "../validation";

const Edit = (props) => {

    const dispatch = useDispatch()

    const updateVendor = (values, onSubmitProps) => {
        let { id, name, category, image, newImage } = values
        image = newImage !== undefined ? getFileName(newImage) : image
        const updatedValues = { id, name, category, image }
        dispatch(update(updatedValues)) && onSubmitProps.resetForm()
    }

    const { id } = props.item
    const initialValues = { ...props.item }

    const onSubmit = (values, onSubmitProps) => {
        updateVendor(values, onSubmitProps)
    }

    const nameProps = {
        id: `vendor_${id}`,
        name: 'name',
        type: 'text',
        placeholder: 'Enter vendor name..',
    }

    const emailProps = {
        name: 'email',
        type: 'email',
        placeholder: 'Email vendor email..',
    }


    const imageProps = {
        id: `vendor_${id}`,
        name: 'newImage',
        placeholder: 'Enter vendor image..',
        type: 'file'
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
                        <Input inputProps={nameProps} error={errors.name && touched.name ? true : false} />
                    </div>


                    <div className="input-style-1">
                        <Input inputProps={emailProps} error={errors.email && touched.email ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <File fileProps={imageProps} error={errors.image && touched.image ? true : false} />
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