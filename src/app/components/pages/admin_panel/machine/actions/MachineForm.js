// MachineForm.js

import React from 'react';
import { Formik, Form } from 'formik';
import Button from 'react-bootstrap/Button';
import { Input, Select, Checkbox } from 'app/components/utils/form_elements';

const MachineForm = ({
    initialValues,
    validationSchema,
    onSubmit,
    machineTypeProps,
    noOfRowsProps,
    noOfColumnsProps,
    locksPerColumnProps,
    isActiveProps,
    buttonText,
}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={machineTypeProps} error={errors.machine_type && touched.machine_type} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <Input props={noOfRowsProps} error={errors.no_of_rows && touched.no_of_rows} />
                    </div>

                    <div className="input-style-1">
                        <Input props={noOfColumnsProps} error={errors.no_of_columns && touched.no_of_columns} />
                    </div>

                    <div className="input-style-1">
                        <Input props={locksPerColumnProps} error={errors.locks_per_column && touched.locks_per_column} />
                    </div>

                    <div className="form-check form-switch toggle-switch mb-30">
                        <Checkbox
                            props={isActiveProps}
                            label={values.is_active === false ? 'Maintainance On' : 'Machine Activated'}
                            error={errors.is_active && touched.is_active}
                        />
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">
                            {buttonText}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MachineForm;
