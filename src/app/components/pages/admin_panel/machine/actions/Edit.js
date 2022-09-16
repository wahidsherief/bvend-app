import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { machineCategoryTypesData } from "assets/data";
import { Input, Select, File, TextArea } from "app/components/utils/form_elements"
import { update } from "features/MachineSlice";
import { getFileName } from "services";
import { UpdateFormValidationRules } from "../validation";

const Edit = (props) => {

    const dispatch = useDispatch()

    const updatemachine = (values, onSubmitProps) => {
        let { id, name, category, description, image, newImage } = values
        image = newImage !== undefined ? getFileName(newImage) : image
        const updatedValues = { id, name, category, description, image }
        dispatch(update(updatedValues)) && onSubmitProps.resetForm()
    }

    const { id, category } = props.item
    const initialValues = { ...props.item }

    const onSubmit = (values, onSubmitProps) => {
        updatemachine(values, onSubmitProps)
    }

    const nameProps = {
        id: `machine_${id}`,
        name: 'name',
        type: 'text',
        placeholder: 'Enter machine name..',
    }


    const categoryProps = {
        id: `machine_${id}`,
        name: 'category',
        placeholder: 'Enter machine category..',
        filterBy: category,
        optionFields: machineCategoryTypesData.types,
    }

    const descriptionProps = {
        name: 'description',
        placeholder: 'Enter machine descriptions..',
    }

    const imageProps = {
        id: `machine_${id}`,
        name: 'newImage',
        placeholder: 'Enter machine image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={UpdateFormValidationRules}
            onSubmit={onSubmit}
            className="accordion-body bg-light"
            enableReinitialize={true}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="input-style-1">
                        <Input inputProps={nameProps} error={errors.name && touched.name ? true : false} />
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select selectProps={categoryProps} error={errors.category && touched.category ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <TextArea inputProps={descriptionProps} error={errors.description && touched.description ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <File fileProps={imageProps} error={errors.image && touched.image ? true : false} />
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="primary-btn btn-hover btn-sm">Update</Button>
                        <Button type="button" onClick={() => props.hideEditPanel(null)} className="btn-dark btn-hover btn-sm">Cancel</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default Edit