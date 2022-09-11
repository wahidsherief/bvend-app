import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Select = (props) => {
    const { name, placeholder, filterBy, optionFields, ...rest } = props.selectProps
    const options = filterBy === null ? optionFields : optionFields.filter((field) => field.name !== filterBy)

    return (
        <>
            <Field
                name={name}
                as="select"
                {...rest}
            // className={formik.errors.category ? 'is-invalid select-lg' : 'select-lg'}
            >
                {
                    filterBy === null
                        ? <option value='' disabled>{placeholder}</option>
                        : <option value={filterBy}>{filterBy}</option>
                }
                {
                    options.map((option) => (
                        <option key={option.id} value={option.name}>{option.name}</option>
                    ))
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </>
    )
}


export default Select