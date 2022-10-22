import { Field } from "formik";


const Checkbox = ({ props, label }) => {

    const { name, ...rest } = props

    return (
        <>
            <Field name={name} {...rest} className='form-check-input' />
            <label class="form-check-label mt-2" for="checkbox-remember">{label}</label>
        </>
    )
}


export default Checkbox