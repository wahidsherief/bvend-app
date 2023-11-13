import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux"
import { Input, Select, File } from "app/components/utils/form_elements"
import { updateProduct } from "features/ProductSlice";
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

    const { id, name, category, image, brand } = modalInfo.data

    const initialValues = { name, product_categories_id: category.id, image, brand }

    const onSubmit = (values, onSubmitProps) => {
        const updatedImage = values.image.size !== undefined ? values.image : image
        const updatedValues = { ...values, id, image: updatedImage }
        dispatch(updateProduct(updatedValues)) && onSubmitProps.resetForm()
        handleClose()
    }

    const nameProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Choose product name..',
    }

    const brandProps = {
        name: 'brand',
        type: 'text',
        placeholder: 'Choose brand name..',
    }

    const categoryProps = {
        name: 'product_categories_id',
        placeholder: 'Choose product category..',
        filterBy: category,
        optionFields: categories,
    }

    const imageProps = {
        name: 'image',
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
            {({ values, errors, touched, setFieldValue }) => (
                <Form encType="multipart/form-data">
                    <div className="input-style-1">
                        <Input props={nameProps} error={errors.name && touched.name ? true : false} />
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={categoryProps} error={errors.product_categories_id && touched.product_categories_id ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <Input props={brandProps} error={errors.brand && touched.brand ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <File props={imageProps} setFieldValue={setFieldValue} error={errors.image && touched.image ? true : false} />
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