// Edit.js

import { useDispatch, useSelector } from "react-redux";
import { UpdateFormValidationRules } from "../validation";
import { update as updateProduct } from "features/ProductSlice";
import { fetch as fetchCategory } from "features/ProductCategorySlice";
import { useEffect } from "react";
import ProductForm from "./ProductForm";

const Edit = (props) => {
    const dispatch = useDispatch();
    const { handleClose, modalInfo } = props;
    const { data: categories } = useSelector((state) => state.productCategory);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    const { id, name, category, image, brand } = modalInfo.data;

    const initialValues = { name, product_categories_id: category?.id, image, brand };

    const onSubmit = (values, onSubmitProps) => {
        const updatedImage = values?.image.size !== undefined ? values?.image : image;
        const updatedValues = { ...values, id, image: updatedImage };
        dispatch(updateProduct(updatedValues)) && onSubmitProps.resetForm();
        handleClose();
    };

    const nameProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Choose product name..',
    };

    const brandProps = {
        name: 'brand',
        type: 'text',
        placeholder: 'Choose brand name..',
    };

    const categoryProps = {
        name: 'product_categories_id',
        placeholder: 'Choose product category..',
        filterBy: category,
        optionFields: categories,
    };

    const imageProps = {
        name: 'image',
        placeholder: 'Choose product image..',
        type: 'file'
    };

    return (
        <ProductForm
            initialValues={initialValues}
            validationSchema={UpdateFormValidationRules}
            onSubmit={onSubmit}
            handleClose={handleClose}
            categoryProps={categoryProps}
            nameProps={nameProps}
            brandProps={brandProps}
            imageProps={imageProps}
            buttonText="Update"
        />
    );
};

export default Edit;
