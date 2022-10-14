import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux"
import { Input, Select, File } from "app/components/utils/form_elements"
import { updateProduct } from "features/ProductSlice";
import { getFileName } from "services";
import { UpdateFormValidationRules } from "../validation";
import { fetchCategory } from "features/ProductCategorySlice";
import { useEffect } from "react";

const Edit = (props) => {

    const dispatch = useDispatch()

    const { handleClose, modalInfo } = props

    const { id, category, categories } = modalInfo.data

    const initialValues = { ...modalInfo.data }

    const update = (values, onSubmitProps) => {
        let { id, name, category, image, newImage } = values
        image = newImage !== undefined ? getFileName(newImage) : image
        const updatedValues = { id, name, category, image }

        console.log('uv :', updatedValues)
        dispatch(updateProduct(updatedValues)) && onSubmitProps.resetForm()
    }

    const onSubmit = (values, onSubmitProps) => {
        update(values, onSubmitProps)
    }

    const nameProps = {
        id: id,
        name: 'name',
        type: 'text',
        placeholder: 'Choose product name..',
    }

    const categoryProps = {
        id: id,
        name: 'category',
        placeholder: 'Choose product category..',
        filterBy: category,
        optionFields: categories,
    }

    const imageProps = {
        id: id,
        name: 'newImage',
        placeholder: 'Choose product image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={UpdateFormValidationRules}
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
                        <File fileProps={imageProps} error={errors.image && touched.image ? true : false} />
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="primary-btn btn-hover btn-sm">Update</Button>
                        <Button type="button" onClick={handleClose} className="btn-dark btn-hover btn-sm">Cancel</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default Edit