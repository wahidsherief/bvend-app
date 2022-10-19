import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input } from "app/components/utils/form_elements"
import { useDispatch } from "react-redux"
import { CreateFormValidationRules } from "../validation";
import { saveCategory } from "features/ProductCategorySlice";


const Create = () => {

    const dispatch = useDispatch()

    const initialValues = { name: '', brand: '' }

    const onSubmit = (values, onSubmitProps) => {
        dispatch(saveCategory(values)) && onSubmitProps.resetForm()
    }

    const categoryProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Enter product category name..',
    }

    const brandProps = {
        name: 'brand',
        type: 'text',
        placeholder: 'Enter product brand name..',
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
                        <Input inputProps={categoryProps} error={errors.category && touched.category ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <Input inputProps={brandProps} error={errors.brand && touched.brand ? true : false} />
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