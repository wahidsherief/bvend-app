import { useDispatch } from "react-redux";
import { CreateFormValidationRules } from "../validation";
import { save as saveMachineType } from "features/MachineTypeSlice";
import MachineTypeForm from "./MachineTypeForm";

const Create = () => {
    const dispatch = useDispatch();
    const initialValues = { type: '' };

    const onSubmit = (values, onSubmitProps) => {
        console.log(values)
        // alert('values')
        dispatch(saveMachineType(values)) && onSubmitProps.resetForm();
    };

    const machineTypeProps = {
        name: 'type',
        type: 'text',
        placeholder: 'Enter machine type..',
    };

    const handleClose = () => {

    }


    return (
        <MachineTypeForm
            initialValues={initialValues}
            validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
            handleClose={handleClose}
            machineTypeProps={machineTypeProps}
            buttonText="Create"
        />
    );
};

export default Create;
