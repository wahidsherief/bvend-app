// Module: Auth

import * as yup from "yup";

const LoginFormValidationRules = yup.object().shape({
    email: yup.string().email('*Email is required').required('*Email is required'),
    password: yup.string().required('*Password is required'),
    role: yup.string().required('*Role is required'),
});

export { LoginFormValidationRules }