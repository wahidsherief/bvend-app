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

    const { data: categories } = useSelector((state) => state.productCategory)

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])

    const { handleClose, modalInfo } = props

    const { id, name, category, image } = modalInfo.data

    const initialValues = { name, product_categories_id: category.id, image }

    const update = (values, onSubmitProps) => {
        const updatedImage = values.new_image !== undefined ? getFileName(values.new_image) : image
        const updatedValues = { ...values, id, image: updatedImage }
        dispatch(updateProduct(updatedValues)) && onSubmitProps.resetForm()
        handleClose()
    }

    const onSubmit = (values, onSubmitProps) => {
        update(values, onSubmitProps)
    }

    const nameProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Choose product name..',
    }

    const categoryProps = {
        name: 'product_categories_id',
        placeholder: 'Choose product category..',
        filterBy: category,
        optionFields: categories,
    }

    const imageProps = {
        name: 'new_image',
        placeholder: 'Choose product image..',
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
                        <Input props={nameProps} error={errors.name && touched.name ? true : false} />
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={categoryProps} error={errors.product_categories_id && touched.product_categories_id ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <File props={imageProps} error={errors.new_image && touched.new_image ? true : false} />
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