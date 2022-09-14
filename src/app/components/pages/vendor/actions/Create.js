import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, File } from "app/components/utils/form_elements"
import { useSelector, useDispatch } from "react-redux"
import { create } from "features/VendorSlice"
import { getFileName } from "services";
import { CreateFormValidationRules } from "../validation";


const Create = () => {

    const vendorListSlice = useSelector((state) => {
        return state['vendor']
    })

    const dispatch = useDispatch()

    const { vendors } = vendorListSlice

    const createVendor = (values, onSubmitProps) => {
        let { name, email, image } = values
        image = getFileName(image)
        const id = vendors.length + 1
        const newValues = { id, name, email, image }
        dispatch(create(newValues)) && onSubmitProps.resetForm()
    }

    const initialValues = { name: '', email: '', image: '' }

    const onSubmit = (values, onSubmitProps) => {
        createVendor(values, onSubmitProps)
    }

    const nameProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Enter vendor name..',
    }

    const emailProps = {
        name: 'email',
        type: 'text',
        placeholder: 'Enter vendor email..',
    }

    const imageProps = {
        name: 'image',
        placeholder: 'Enter vendor image..',
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

                    <div className="input-style-1">
                        <Input inputProps={emailProps} error={errors.email && touched.email ? true : false} />
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