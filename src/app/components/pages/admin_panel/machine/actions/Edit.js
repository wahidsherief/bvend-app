// Edit.js

import { useDispatch } from 'react-redux';
import { UpdateFormValidationRules } from '../validation';
import { update as updateMachine } from 'features/MachineSlice';
import { machineTypes } from 'services/CommonService';
import MachineForm from './MachineForm';

const Edit = (props) => {
    console.log('edit ', props)
    const dispatch = useDispatch();
    const { handleClose, modalInfo } = props;
    const { id, machine_type, no_of_rows, no_of_columns, locks_per_column, is_active } = modalInfo.data;

    const initialValues = { id, machine_type, no_of_rows, no_of_columns, locks_per_column, is_active };

    const onSubmit = (values, onSubmitProps) => {
        dispatch(updateMachine(values)) && onSubmitProps.resetForm();
        handleClose();
    };

    const machineTypeProps = {
        name: 'machine_type',
        placeholder: 'Choose machine types..',
        filterBy: null,
        optionFields: machineTypes,
    };

    const noOfRowsProps = {
        name: 'no_of_rows',
        type: 'number',
        placeholder: 'Enter no of rows..',
    };

    const noOfColumnsProps = {
        name: 'no_of_columns',
        type: 'number',
        placeholder: 'Enter no of columns..',
    };

    const locksPerColumnProps = {
        name: 'locks_per_column',
        type: 'number',
        placeholder: 'Enter no of locks per column..',
    };

    const isActiveProps = {
        name: 'is_active',
        type: 'checkbox',
    };

    return (
        <MachineForm
            initialValues={initialValues}
            validationSchema={UpdateFormValidationRules}
            onSubmit={onSubmit}
            machineTypeProps={machineTypeProps}
            noOfRowsProps={noOfRowsProps}
            noOfColumnsProps={noOfColumnsProps}
            locksPerColumnProps={locksPerColumnProps}
            isActiveProps={isActiveProps}
            buttonText="Update"
        />
    );
};

export default Edit;
