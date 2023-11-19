// Create.js

import { useDispatch, useSelector } from "react-redux";
import { CreateFormValidationRules } from "../validation";
import { useEffect } from "react";
import { fetch as fetchCategory } from "features/ProductCategorySlice";
import { save as saveProduct } from "features/ProductSlice";
import ProductForm from "./ProductForm";

const Create = () => {
    const dispatch = useDispatch();
    const { data: categories } = useSelector((state) => state.productCategory);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    const initialValues = { name: '', product_categories_id: '', image: '', brand: '' };

    const onSubmit = (values, onSubmitProps) => {
        dispatch(saveProduct(values)) && onSubmitProps.resetForm();
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
        filterBy: null,
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
            validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
            enableReinitialize={true}
            categoryProps={categoryProps}
            nameProps={nameProps}
            brandProps={brandProps}
            imageProps={imageProps}
            buttonText="Create"
        />
    );
};

export default Create;
