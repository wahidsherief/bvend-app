
import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    type: yup.string().min(2, "Type should be at least 2 characters").required('*Type is required')
})

export { CreateFormValidationRules }