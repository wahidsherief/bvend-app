import * as yup from "yup";


const VendorCreateFormValidationRules = yup.object({
    name: yup.string().min(2, "*Vendor name should be at least 2 characters").required('*Vendor name is required'),
    image: yup.string().required('*Vendor image is required'),
})

export default VendorCreateFormValidationRules