import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { Input, TextArea } from "app/components/utils/form_elements"
import { UpdateFormValidationRules } from "../validation";
import { updateVendor } from "features/VendorSlice";

const Assign = (props) => {

    const dispatch = useDispatch()

    const { handleClose, modalInfo } = props

    const { id } = modalInfo.data

    const initialValues = { ...modalInfo.data }

    const onSubmit = (values, onSubmitProps) => {
        // dispatch(updateVendor(updatedValues)) && onSubmitProps.resetForm()
        // handleClose()
    }

    const vendorProps = {
        name: 'vendor',
        placeholder: 'Choose vendor..',
        filterBy: null,
        optionFields: '',
    }

    const assignDateProps = {
        name: 'assign_date',
        type: 'date',
        placeholder: 'Enter assign date..',
    }

    const locationProps = {
        name: 'location'
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={UpdateFormValidationRules}
            onSubmit={onSubmit}
            className="accordion-body bg-light"
            enableReinitialize={true}
        >

            {({ values, errors, touched }) => (
                <Form>
                    <div className="input-style-1">
                        <Input props={vendorProps} error={errors.vendor && touched.vendor ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <Input props={assignDateProps} error={errors.assign_date && touched.assign_date ? true : false} />
                    </div>


                    <div className="input-style-1">
                        <TextArea props={locationProps} error={errors.location && touched.location ? true : false} />
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Assign</Button>
                        <Button type="button" onClick={handleClose} className="btn-dark btn-hover btn-sm">Cancel</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default Assign