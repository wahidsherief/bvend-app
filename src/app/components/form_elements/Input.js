import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";


const Input = (props) => {

    const { name, ...rest } = props.inputProps

    return (
        <>
            <Field name={name} {...rest} />
            <ErrorMessage name={name} component={ErrorText} />
        </>
    )
}


export default Input