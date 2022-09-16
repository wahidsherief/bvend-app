// Module: Machine

import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    name: yup.string().min(2, "*Machine name should be at least 2 characters").required('*Machine name is required'),
    description: yup.string().min(10, "*Machine description should be at least 10 characters").required('*Machine description is required'),
    category: yup.string().required('*Machine category is required'),
    image: yup.string().required('*Machine image is required'),
})


const UpdateFormValidationRules = yup.object({
    name: yup.string().min(2, "*Machine name should be at least 2 characters").required('*Machine name is required'),
    description: yup.string().min(10, "*Machine description should be at least 10 characters").required('*Machine description is required'),
    category: yup.string().required('*Machine category is required'),
    image: yup.string().required('*Machine image is required'),
})


export { CreateFormValidationRules, UpdateFormValidationRules }