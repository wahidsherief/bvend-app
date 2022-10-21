import { ErrorMessage } from "formik";
import ErrorText from "app/components/common/ErrorText";

const File = ({ props, setFieldValue }) => {
    const { name, ...rest } = props

    return (
        <>
            <input
                className={props.error === true ? 'form-control shadow-none is-invalid' : null}
                onChange={(event) => {
                    setFieldValue('image', event.currentTarget.files[0]);
                }}

                {...rest}
            />
            <ErrorMessage name={name} component={ErrorText} />
        </>
    )
}


export default File