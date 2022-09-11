import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const File = (props) => {
    const { name, ...rest } = props.fileProps

    return (
        <>
            <Field name={name} type='file' {...rest} />
            <ErrorMessage name={name} component={ErrorText} />
        </>
    )
}


export default File