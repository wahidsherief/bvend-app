// Module: Product Category

import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    name: yup.string().min(2, "Category should be at least 2 characters").required('*Category is required')
})

const UpdateFormValidationRules = yup.object({
    name: yup.string().min(2, "*Product category should be at least 2 characters").required('*Category is required')
})

export { CreateFormValidationRules, UpdateFormValidationRules }