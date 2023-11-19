// Create.js

import { useDispatch } from 'react-redux';
import { CreateFormValidationRules } from '../validation';
import { save as saveMachine, } from 'features/MachineSlice';
import { machineTypes } from 'services/CommonService';
import MachineForm from './MachineForm';

const Create = () => {
    const dispatch = useDispatch();

    const initialValues = { machine_type: '', no_of_rows: '', no_of_columns: '', locks_per_column: '', is_active: false };

    const onSubmit = (values, onSubmitProps) => {
        dispatch(saveMachine(values)) && onSubmitProps.resetForm();
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
            validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
            machineTypeProps={machineTypeProps}
            noOfRowsProps={noOfRowsProps}
            noOfColumnsProps={noOfColumnsProps}
            locksPerColumnProps={locksPerColumnProps}
            isActiveProps={isActiveProps}
            buttonText="Create"
        />
    );
};

export default Create;
