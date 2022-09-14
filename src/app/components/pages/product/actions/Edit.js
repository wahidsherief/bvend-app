import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { productCategoryTypesData } from "assets/data";
import { Input, Select, File } from "app/components/utils/form_elements"
import { update } from "features/ProductSlice";
import { getFileName } from "services";
import { UpdateFormValidationRules } from "../validation";

const Edit = (props) => {

    const dispatch = useDispatch()

    const updateProduct = (values, onSubmitProps) => {
        let { id, name, category, image, newImage } = values
        image = newImage !== undefined ? getFileName(newImage) : image
        const updatedValues = { id, name, category, image }
        dispatch(update(updatedValues)) && onSubmitProps.resetForm()
    }

    const { id, category } = props.item
    const initialValues = { ...props.item }

    const onSubmit = (values, onSubmitProps) => {
        updateProduct(values, onSubmitProps)
    }

    const nameProps = {
        id: `product_${id}`,
        name: 'name',
        type: 'text',
        placeholder: 'Choose product name..',
    }


    const categoryProps = {
        id: `product_${id}`,
        name: 'category',
        placeholder: 'Choose product category..',
        filterBy: category,
        optionFields: productCategoryTypesData.types,
    }

    const imageProps = {
        id: `product_${id}`,
        name: 'newImage',
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
            <Form>
                <div className="input-style-1">
                    <Input inputProps={nameProps} />
                </div>

                <div className="select-style-2">
                    <div className="select-position">
                        <Select selectProps={categoryProps} />
                    </div>
                </div>

                <div className="input-style-1">
                    <File fileProps={imageProps} />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button type="submit" className="primary-btn btn-hover btn-sm">Update Product</Button>
                    <Button type="button" onClick={() => props.hideEditPanel(null)} className="btn-dark btn-hover btn-sm">Cancel</Button>
                </div>
            </Form>
        </Formik >
    )
}

export default Edit