import { Field } from "formik";


const Checkbox = ({ props }) => {

    const { name, ...rest } = props

    return (
        <>
            <Field name={name} {...rest} className='form-check-input' />
            <label class="form-check-label" for="checkbox-remember"></label>
        </>
    )
}


export default Checkbox