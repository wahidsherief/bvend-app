import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select, File } from "app/components/utils/form_elements"
import { useSelector, useDispatch } from "react-redux"
import { saveProduct } from "features/ProductSlice"
import { fetchCategory } from "features/ProductCategorySlice"
import { getFileName } from "services";
import { CreateFormValidationRules } from "../validation";
import { useEffect } from "react";


const Create = () => {

    const dispatch = useDispatch()

    const { data: categories } = useSelector((state) => state.productCategory)

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])

    // const create = (values, onSubmitProps) => {
    //     console.log(values);

    //     // let { image } = values
    //     // const newImage = getFileName(image)
    //     // const newValues = { ...values, image: newImage }

    //     // console.log(newValues);
    //     dispatch(saveProduct(values)) && onSubmitProps.resetForm()
    // }

    const initialValues = { name: '', product_categories_id: '', image: '' }

    const onSubmit = (values, onSubmitProps) => {
        console.log(values)
        // dispatch(saveProduct(values)) && onSubmitProps.resetForm()
        dispatch(saveProduct(values))
    }


    const nameProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Choose product name..',
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
                        <Input inputProps={nameProps} error={errors.name && touched.name ? true : false} />
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select selectProps={categoryProps} error={errors.product_categories_id && touched.product_categories_id ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <File fileProps={imageProps} setFieldValue={setFieldValue} error={errors.image && touched.image ? true : false} />
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