import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
// import { vendor_category_types_data } from "../../../assets/data";
import Input from "../form_elements/Input";
import Select from "../form_elements/Select";
import File from "../form_elements/File";
import { useSelector, useDispatch } from "react-redux"
import { create } from "../../../features/vendor/vendor_list_slice"
import { getFileName } from "../../../services";
import VendorCreateFormValidationRules from "../validation/VendorCreateFormValidationRules";


const CreateForm = () => {

    const vendor_list_state = useSelector((state) => {
        return state['vendor_list']
    })

    const dispatch = useDispatch()

    const { vendors } = vendor_list_state

    const createVendor = (values, onSubmitProps) => {
        let { name, category, image } = values
        image = getFileName(image)
        const id = vendors.length + 1
        const newValues = { id, name, category, image }
        dispatch(create(newValues)) && onSubmitProps.resetForm()
    }

    const initialValues = { name: '', category: '', image: '' }

    const onSubmit = (values, onSubmitProps) => {
        createVendor(values, onSubmitProps)
    }

    const inputProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Enter vendor name..',
    }


    // const selectProps = {
    //     name: 'category',
    //     placeholder: 'Choose vendor category..',
    //     filterBy: null,
    //     optionFields: vendor_category_types_data.types,
    // }

    const fileProps = {
        name: 'image',
        placeholder: 'Choose vendor image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={VendorCreateFormValidationRules}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            <Form>
                <div className="input-style-1">
                    <Input inputProps={inputProps} />
                </div>
                {/* 
                <div className="select-style-2">
                    <div className="select-position">
                        <Select selectProps={selectProps} />
                    </div>
                </div> */}

                <div className="input-style-1">
                    <File fileProps={fileProps} />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Create vendor</Button>
                </div>
            </Form>
        </Formik >
    )
}

export default CreateForm