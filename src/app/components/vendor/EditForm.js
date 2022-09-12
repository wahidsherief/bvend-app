import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
// import { vendor_category_types_data } from "../../../assets/data";
import Input from "../form_elements/Input";
// import Select from "../form_elements/Select";
import File from "../form_elements/File";
import { useDispatch } from "react-redux"
import { update } from "../../../features/vendor/vendor_list_slice"
import { getFileName } from "../../../services";
import VendorUpdateFormValidationRules from "../validation/VendorUpdateFormValidationRules";

const EditForm = (props) => {

    const dispatch = useDispatch()

    const updateVendor = (values, onSubmitProps) => {
        let { id, name, category, image, newImage } = values
        image = newImage !== undefined ? getFileName(newImage) : image
        const updatedValues = { id, name, category, image }
        dispatch(update(updatedValues)) && onSubmitProps.resetForm()
    }

    const { id, category } = props.Vendor
    const initialValues = { ...props.Vendor }

    const onSubmit = (values, onSubmitProps) => {
        updateVendor(values, onSubmitProps)
    }

    const inputProps = {
        id: `vendor_${id}`,
        name: 'name',
        type: 'text',
        placeholder: 'Choose vendor name..',
    }


    // const selectProps = {
    //     id: `Vendor_${id}`,
    //     name: 'category',
    //     placeholder: 'Choose vendor category..',
    //     filterBy: category,
    //     optionFields: Vendor_category_types_data.types,
    // }

    const fileProps = {
        id: `vendor_${id}`,
        name: 'newImage',
        placeholder: 'Choose vendor image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={VendorUpdateFormValidationRules}
            onSubmit={onSubmit}
            className="accordion-body bg-light"
            enableReinitialize={true}
        >
            <Form>
                <div className="input-style-1">
                    <Input inputProps={inputProps} />
                </div>

                {/* <div className="select-style-2">
                    <div className="select-position">
                        <Select selectProps={selectProps} />
                    </div>
                </div> */}

                <div className="input-style-1">
                    <File fileProps={fileProps} />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Update Vendor</Button>
                    <Button type="button" onClick={() => props.hideEditPanel(id)} className="main-btn dark-btn btn-hover btn-sm">Cancel</Button>
                </div>
            </Form>
        </Formik >
    )
}

export default EditForm