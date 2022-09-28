// Module: Machine

import * as yup from "yup";

const RefillFormValidationRules = yup.object({

    product_id: yup.string().required('*Product is required'),
    price: yup.string().required('*Price is required'),
    no_of_products: yup.string(),
})



export { RefillFormValidationRules }