import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select, File, TextArea } from "app/components/utils/form_elements"
import { useSelector, useDispatch } from "react-redux"
import { create } from "features/MachineSlice"
import { getFileName } from "services";
import { CreateFormValidationRules } from "../validation";
import { machineCategoryTypesData } from "assets/data";


const Create = () => {

    const machineListSlice = useSelector((state) => {
        return state['machine']
    })

    const dispatch = useDispatch()

    const { machines } = machineListSlice

    const createMachine = (values, onSubmitProps) => {
        let { name, category, description, image } = values
        image = getFileName(image)
        const id = machines.length + 1
        const newValues = { id, name, category, description, image }
        dispatch(create(newValues)) && onSubmitProps.resetForm()
    }

    const initialValues = { name: '', category: '', description: '', image: '' }

    const onSubmit = (values, onSubmitProps) => {
        createMachine(values, onSubmitProps)
    }

    const nameProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Enter machine name..',
    }

    const categoryProps = {
        name: 'category',
        placeholder: 'Enter machine category..',
        filterBy: null,
        optionFields: machineCategoryTypesData.types,
    }

    const descriptionProps = {
        name: 'description',
        placeholder: 'Enter machine descriptions..',
    }

    const imageProps = {
        name: 'image',
        placeholder: 'Enter machine image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
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
                        <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Create</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default Create