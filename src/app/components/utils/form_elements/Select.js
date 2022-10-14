import { Field, ErrorMessage } from "formik";
import ErrorText from "app/components/common/ErrorText";

const Select = (props) => {
    const { name, placeholder, filterBy, optionFields, ...rest } = props.selectProps

    const options = filterBy === null ? optionFields : optionFields.filter((field) => field.id !== filterBy.id)

    console.log('filter options : ', options)

    return (
        <>
            <Field
                name={name}
                as="select"
                {...rest}
                className={props.error === true ? 'form-control shadow-none is-invalid' : null}
            >
                {
                    filterBy === null
                        ? <option value='' disabled>{placeholder}</option>
                        : <option value={filterBy.id}>{filterBy.name}</option>
                }
                {
                    options.map((option) => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </>
    )
}


export default Select