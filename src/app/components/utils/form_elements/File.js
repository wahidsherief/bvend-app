import { Field, ErrorMessage } from "formik";
import ErrorText from "app/components/common/ErrorText";

const File = (props) => {
    const { name, ...rest } = props.fileProps

    return (
        <>
            <input
                // name={name}
                type='file'
                className={props.error === true ? 'form-control shadow-none is-invalid' : null}
                onChange={(event) => {
                    props.setFieldValue('image', event.currentTarget.files[0]);
                }}

                {...rest}
            />
            <ErrorMessage name={name} component={ErrorText} />
        </>
    )
}


export default File