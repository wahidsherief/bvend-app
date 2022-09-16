// Module: Vendor

import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    name: yup.string().min(2, "*Vendor name should be at least 2 characters").required('*Vendor name is required'),
    email: yup.string().email('*Email is invalid').required('*Vendor email is required'),
    image: yup.string().required('*Vendor image is required'),
})


const UpdateFormValidationRules = yup.object({
    name: yup.string().min(2, "*Vendor name should be at least 2 characters").required('*Vendor name is required'),
    email: yup.string().email('*Email is invalid').required('*Vendor email is required'),
    image: yup.string().required('*Vendor image is required'),
})


export { CreateFormValidationRules, UpdateFormValidationRules }