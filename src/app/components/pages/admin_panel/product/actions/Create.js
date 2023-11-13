import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select, File } from "app/components/utils/form_elements"
import { useSelector, useDispatch } from "react-redux"
import { saveProduct } from "features/ProductSlice"
import { CreateFormValidationRules } from "../validation";
import { useEffect } from "react";
import { fetchCategory } from "features/ProductCategorySlice";


const Create = () => {

    const dispatch = useDispatch()

    const { data: categories } = useSelector((state) => state.productCategory)

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])

    const initialValues = { name: '', product_categories_id: '', image: '', brand: '' }

    const onSubmit = (values, onSubmitProps) => {
        dispatch(saveProduct(values)) && onSubmitProps.resetForm()
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
        filterBy: null,
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
            validationSchema={CreateFormValidationRules}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            {({ errors, touched, setFieldValue }) => (
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
                        <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Create</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default Create