// Create.js

import { useDispatch } from "react-redux";
import { CreateFormValidationRules } from "../validation";
import { save as saveCategory } from "features/ProductCategorySlice";
import ProductCategoryForm from "./ProductCategoryForm";

const Create = () => {
    const dispatch = useDispatch();
    const initialValues = { name: '' };

    const onSubmit = (values, onSubmitProps) => {
        dispatch(saveCategory(values)) && onSubmitProps.resetForm();
    };

    const categoryProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Enter category name..',
    };

    const handleClose = () => {
        // Define handleClose function for Create if needed
    };

    return (
        <ProductCategoryForm
            initialValues={initialValues}
            validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
            handleClose={handleClose}
            categoryProps={categoryProps}
            buttonText="Create"
        />
    );
};

export default Create;
