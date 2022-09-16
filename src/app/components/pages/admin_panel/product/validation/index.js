// Module: Product

import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    name: yup.string().min(2, "*Product name should be at least 2 characters").required('*Product name is required'),
    category: yup.string().required('*Product category is required'),
    image: yup.string().required('*Product image is required'),
})


const UpdateFormValidationRules = yup.object({
    name: yup.string().min(2, "*Product name should be at least 2 characters").required('*Product name is required'),
    category: yup.string().required('*Product category is required'),
    image: yup.string().required('*Product image is required'),
})


export { CreateFormValidationRules, UpdateFormValidationRules }