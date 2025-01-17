// Module: Machine

import * as yup from "yup";

const CreateFormValidationRules = yup.object({
    machine_type: yup.string().required('*Type is required'),
    no_of_rows: yup.number().required('*No of rows is required'),
    no_of_trays: yup.number().required('*No of trays is required'),
    locks_per_tray: yup.number().required('*No of locks per tray is required')
})


const UpdateFormValidationRules = yup.object({
    machine_type: yup.string().required('*Type is required'),
    no_of_rows: yup.number().required('*No of rows is required'),
    no_of_trays: yup.number().required('*No of trays is required'),
    locks_per_tray: yup.number().required('*No of locks per tray is required')
})


const AssignFormValidationRules = yup.object({
    vendors_id: yup.number().required('*Vendor is required'),
    assign_date: yup.string().required('*Assign date is required'),
    location: yup.string().required('*Location is required')
})


export { CreateFormValidationRules, UpdateFormValidationRules, AssignFormValidationRules }