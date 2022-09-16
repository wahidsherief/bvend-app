// Module: Product Category

import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    category: yup.string().min(2, "*Product category should be at least 2 characters").required('*Product category is required'),
    brand: yup.string().required('*Product brand is required')
})

const UpdateFormValidationRules = yup.object({
    category: yup.string().min(2, "*Product category should be at least 2 characters").required('*Product category is required'),
    brand: yup.string().required('*Product brand is required')
})

export { CreateFormValidationRules, UpdateFormValidationRules }