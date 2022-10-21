import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, File } from "app/components/utils/form_elements"
import { useDispatch } from "react-redux"
import { saveVendor } from "features/VendorSlice"


const Create = () => {

    const dispatch = useDispatch()

    const initialValues = { name: '', email: '', contact: '', additional_contact: '', business_name: '', trade_licence: '', nid: '', is_active: 1, image: '' }

    const onSubmit = (values, onSubmitProps) => {
        dispatch(saveVendor(values)) && onSubmitProps.resetForm()
    }

    const nameProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Enter name..',
    }

    const emailProps = {
        name: 'email',
        type: 'email',
        placeholder: 'Enter email..',
    }

    const passwordProps = {
        name: 'password',
        type: 'password',
        placeholder: 'Enter password..',
    }

    const contactProps = {
        name: 'contact',
        type: 'number',
        placeholder: 'Enter contact..',
    }

    const additionalContactProps = {
        name: 'additional_contact',
        type: 'number',
        placeholder: 'Enter additional contact..',
    }

    const businessNameProps = {
        name: 'business_name',
        type: 'input',
        placeholder: 'Enter business name..',
    }

    const tradeLicenceProps = {
        name: 'trade_licence',
        type: 'input',
        placeholder: 'Enter trade licence number..',
    }

    const nidProps = {
        name: 'nid',
        type: 'input',
        placeholder: 'Enter national identification (nid) number..',
    }

    // const isActiveProps = {
    //     name: 'is_active',
    //     type: 'checkbox'
    // }

    const imageProps = {
        name: 'image',
        placeholder: 'Enter image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            {({ errors, touched, setFieldValue }) => (
                <Form>
                    <div className="input-style-1">
                        <Input props={nameProps} error={errors.name && touched.name ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <Input props={emailProps} error={errors.email && touched.email ? true : false} />
                    </div>

                    {/* password */}
                    <div className="input-style-1">
                        <Input props={passwordProps} error={errors.password && touched.password ? true : false} />
                    </div>

                    {/* contact */}
                    <div className="input-style-1">
                        <Input props={contactProps} error={errors.contact && touched.contact ? true : false} />
                    </div>

                    {/* additional contact */}
                    <div className="input-style-1">
                        <Input props={additionalContactProps} error={errors.additional_contact && touched.additional_contact ? true : false} />
                    </div>

                    {/* business name */}
                    <div className="input-style-1">
                        <Input props={businessNameProps} error={errors.business_name && touched.business_name ? true : false} />
                    </div>

                    {/* trade licence */}
                    <div className="input-style-1">
                        <Input props={tradeLicenceProps} error={errors.trade_licence && touched.trade_licence ? true : false} />
                    </div>

                    {/* nid */}
                    <div className="input-style-1">
                        <Input props={nidProps} error={errors.nid && touched.nid ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <File props={imageProps} setFieldValue={setFieldValue} error={errors.image && touched.image ? true : false} />
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