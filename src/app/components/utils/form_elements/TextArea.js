import { Field, ErrorMessage } from "formik";
import ErrorText from "app/components/common/ErrorText";


const TextArea = ({ props }) => {

    const { name, ...rest } = props

    return (
        <>
            <Field name={name} as='textarea' {...rest} className={props.error === true ? 'form-control shadow-none is-invalid' : null} />
            <ErrorMessage name={name} component={ErrorText} />
        </>
    )
}


export default TextArea