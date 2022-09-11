import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { product_category_types_data } from "../../../assets/data";
import Input from "../form_elements/Input";
import Select from "../form_elements/Select";
import File from "../form_elements/File";
import { useDispatch } from "react-redux"
import { update } from "../../../features/product/product_list_slice"
import { getFileName } from "../../../services";
import { ProductUpdateFormValidationRules } from "../validation";

const EditForm = (props) => {

    const dispatch = useDispatch()

    const updateProduct = (values, onSubmitProps) => {
        let { id, name, category, image, newImage } = values
        image = newImage !== undefined ? getFileName(newImage) : image
        const updatedValues = { id, name, category, image }
        dispatch(update(updatedValues)) && onSubmitProps.resetForm()
    }

    const { id, category } = props.product
    const initialValues = { ...props.product }

    const onSubmit = (values, onSubmitProps) => {
        updateProduct(values, onSubmitProps)
    }

    const inputProps = {
        id: `product_${id}`,
        name: 'name',
        type: 'text',
        placeholder: 'Choose product name..',
    }


    const selectProps = {
        id: `product_${id}`,
        name: 'category',
        placeholder: 'Choose product category..',
        filterBy: category,
        optionFields: product_category_types_data.types,
    }

    const fileProps = {
        id: `product_${id}`,
        name: 'newImage',
        placeholder: 'Choose product image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ProductUpdateFormValidationRules}
            onSubmit={onSubmit}
            className="accordion-body bg-light"
            enableReinitialize={true}
        >

            <Form>
                <div className="input-style-1">
                    <Input inputProps={inputProps} />
                </div>

                <div className="select-style-2">
                    <div className="select-position">
                        <Select selectProps={selectProps} />
                    </div>
                </div>

                <div className="input-style-1">
                    <File fileProps={fileProps} />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Update Product</Button>
                </div>
            </Form>
        </Formik >
    )
}

export default EditForm