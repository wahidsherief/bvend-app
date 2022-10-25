// Module: Product

import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    name: yup.string().min(3, "*Name should be at least 3 characters").required('*Name is required'),
    product_categories_id: yup.number().required('*Category is required'),
    image: yup.string().required('*Image is required')
})


const UpdateFormValidationRules = yup.object({
    name: yup.string().min(3, "*Name should be at least 3 characters").required('*Name is required'),
    product_categories_id: yup.number().required('*Category is required'),
    image: yup.string()
})


export { CreateFormValidationRules, UpdateFormValidationRules }