// Module: Machine

import * as yup from "yup";

const RefillFormValidationRules = yup.object({

    products_id: yup.string().required('*Product is required'),
    quantity: yup.number().required('*Quantity is required'),
    price: yup.number().required('*Price is required')
})



export { RefillFormValidationRules }