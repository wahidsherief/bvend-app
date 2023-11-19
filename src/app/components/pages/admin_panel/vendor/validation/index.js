// Module: Vendor

import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    name: yup.string().min(3, "Name should be at least 3 characters").required('*Name is required'),
    email: yup.string().email('Email is invalid').required('*Email is required'),
    password: yup.string().min(4, "Name should be at least 4 characters").required('*Password is required'),
    image: yup.string().required('Image is required'),
    // contact: yup.number().max(11, "Contact needs 11 digits").required('*Contact is required'),
    additional_contact: yup.number().max(11, "Contact needs 11 digits"),
    business_name: yup.string().min(3, "Name should be at least 2 characters"),
    nid: yup.string().min(5, "NID should be at least 2 characters"),
    trade_licence: yup.string().min(5, "Trade licence should be at least 5 characters"),
})


const UpdateFormValidationRules = yup.object({
    name: yup.string().min(3, "Name should be at least 3 characters").required('*Name is required'),
    email: yup.string().email('Email is invalid').required('*Email is required'),
    password: yup.string().min(4, "Name should be at least 4 characters").required('*Password is required'),
    image: yup.string().required('Image is required'),
    // contact: yup.number().min(11, "Contact needs 11 digits").required('*Contact is required'),
    additional_contact: yup.number().min(11, "Contact needs 11 digits"),
    business_name: yup.string().min(3, "Name should be at least 2 characters"),
    nid: yup.string().min(5, "NID should be at least 2 characters"),
    trade_licence: yup.string().min(5, "Trade licence should be at least 5 characters"),
})


export { CreateFormValidationRules, UpdateFormValidationRules }