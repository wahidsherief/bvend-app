import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select, Checkbox } from "app/components/utils/form_elements"
import { useDispatch } from "react-redux"
import { saveMachine } from "features/MachineSlice"
import { CreateFormValidationRules } from "../validation"
import { machineTypes } from "services";


const Create = () => {

    const dispatch = useDispatch()

    const initialValues = { machine_type: '', no_of_rows: '', no_of_trays: '', locks_per_tray: '', is_active: false }

    const onSubmit = (values, onSubmitProps) => {
        dispatch(saveMachine(values)) && onSubmitProps.resetForm()
    }

    const machineTypeProps = {
        name: 'machine_type',
        placeholder: 'Choose machine types..',
        filterBy: null,
        optionFields: machineTypes,
    }

    const noOfRowsProps = {
        name: 'no_of_rows',
        type: 'number',
        placeholder: 'Enter no of rows..',
    }

    const noOfTraysProps = {
        name: 'no_of_trays',
        type: 'number',
        placeholder: 'Enter no of trays..',
    }

    const locksPerTrayProps = {
        name: 'locks_per_tray',
        type: 'number',
        placeholder: 'Enter no of locks per tray..',
    }

    const isActiveProps = {
        name: 'is_active',
        type: 'checkbox'
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={machineTypeProps} error={errors.machine_type && touched.machine_type ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <Input props={noOfRowsProps} error={errors.no_of_rows && touched.no_of_rows ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <Input props={noOfTraysProps} error={errors.no_of_trays && touched.no_of_trays ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <Input props={locksPerTrayProps} error={errors.locks_per_tray && touched.locks_per_tray ? true : false} />
                    </div>

                    <div className="form-check form-switch toggle-switch mb-30">
                        <Checkbox
                            props={isActiveProps}
                            label={values.is_active === false ? 'Maintainance On' : 'Machine Activated'}
                            error={errors.is_active && touched.is_active ? true : false} />
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