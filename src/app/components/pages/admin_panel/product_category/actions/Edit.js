// Edit.js

import { useDispatch } from "react-redux";
import { UpdateFormValidationRules } from "../validation";
import { update as updateCategory } from "features/ProductCategorySlice";
import ProductCategoryForm from "./ProductCategoryForm";

const Edit = (props) => {
    const dispatch = useDispatch();
    const { handleClose, modalInfo } = props;

    const update = (values, onSubmitProps) => {
        let { id, name, brand } = values;
        const updatedValues = { id, name, brand };
        dispatch(updateCategory(updatedValues)) && onSubmitProps.resetForm();
    };

    const { id } = modalInfo.data;
    const initialValues = { ...modalInfo.data };

    const onSubmit = (values, onSubmitProps) => {
        update(values, onSubmitProps);
        handleClose();
    };

    const categoryProps = {
        id: id,
        name: 'name',
        type: 'text',
        placeholder: 'Choose product category name..',
    };

    return (
        <ProductCategoryForm
            initialValues={initialValues}
            validationSchema={UpdateFormValidationRules}
            onSubmit={onSubmit}
            handleClose={handleClose}
            categoryProps={categoryProps}
            buttonText="Update"
        />
    );
};

export default Edit;
