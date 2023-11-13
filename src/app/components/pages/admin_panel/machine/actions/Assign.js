import { useEffect } from "react";
import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux"
import { Input, Select, TextArea, Checkbox } from "app/components/utils/form_elements"
import { AssignFormValidationRules } from "../validation";
import { fetchVendor } from "features/VendorSlice";
import { updateMachine } from "features/MachineSlice";

const Assign = (props) => {

    const dispatch = useDispatch()

    const { data: vendors } = useSelector((state) => state.vendor)

    useEffect(() => {
        dispatch(fetchVendor())
    }, [dispatch])


    const { handleClose, modalInfo } = props

    const { machine } = modalInfo.data

    const initialValues = { ...modalInfo.data }

    const onSubmit = (values, onSubmitProps) => {
        const assignValues = { ...values, id: machine.id }
        console.log(assignValues)
        dispatch(updateMachine(assignValues)) && onSubmitProps.resetForm()
        handleClose()
    }

    const vendorProps = {
        name: 'vendors_id',
        placeholder: 'Choose vendor..',
        filterBy: null,
        optionFields: vendors,
    }

    const assignDateProps = {
        name: 'assign_date',
        type: 'date',
        placeholder: 'Enter assign date..'
    }

    const locationProps = {
        name: 'location'
    }

    const isActiveProps = {
        name: 'is_active',
        type: 'checkbox'
    }


    const MachineInfoCard = ({ machineInfo }) => (
        <div className="card text-dark bg-light mb-3">
            <div className="card-body">
                <h5 className="card-title">Machine Code: {machineInfo.machine_code}</h5>
                <div>
                    <p>Rows: {machineInfo.no_of_rows}</p>
                    <p>Trays: {machineInfo.no_of_trays}</p>
                    <p>Locks: {machineInfo.locks_per_tray}</p>
                </div>
            </div>
        </div>
    )


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={AssignFormValidationRules}
            onSubmit={onSubmit}
            className="accordion-body bg-light"
            enableReinitialize={true}
        >

            {({ values, errors, touched }) => (
                <Form>
                    <MachineInfoCard machineInfo={machine} />

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={vendorProps} error={errors.vendors_id && touched.vendors_id ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <Input props={assignDateProps} error={errors.assign_date && touched.assign_date ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <TextArea props={locationProps} error={errors.location && touched.location ? true : false} />
                    </div>

                    <div className="form-check form-switch toggle-switch mb-30">
                        <Checkbox
                            props={isActiveProps}
                            label={values.is_active === false ? 'Activate Vendor' : 'Deactivate Vendor'}
                            error={errors.is_active && touched.is_active ? true : false} />
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