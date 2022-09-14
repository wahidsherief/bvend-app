import { Field, ErrorMessage } from "formik";
import ErrorText from "app/components/common/ErrorText";

const File = (props) => {
    const { name, ...rest } = props.fileProps

    return (
        <>
            <Field name={name} type='file' {...rest} className={props.error === true ? 'form-control shadow-none is-invalid' : null} />
            <ErrorMessage name={name} component={ErrorText} />
        </>
    )
}


export default File