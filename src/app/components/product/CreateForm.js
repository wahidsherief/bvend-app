import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { product_category_types_data } from "../../../assets/data";
import Input from "../form_elements/Input";
import Select from "../form_elements/Select";
import File from "../form_elements/File";
import { useSelector, useDispatch } from "react-redux"
import { create } from "../../../features/product/product_list_slice"
import { getFileName } from "../../../services";
import ProductCreateFormValidationRules from "../validation/ProductCreateFormValidationRules";


const CreateForm = () => {

    const product_list_state = useSelector((state) => {
        return state['product_list']
    })

    const dispatch = useDispatch()

    const { products } = product_list_state

    const createProduct = (values, onSubmitProps) => {
        let { name, category, image } = values
        image = getFileName(image)
        const id = products.length + 1
        const newValues = { id, name, category, image }
        dispatch(create(newValues)) && onSubmitProps.resetForm()
    }

    const initialValues = { name: '', category: '', image: '' }

    const onSubmit = (values, onSubmitProps) => {
        createProduct(values, onSubmitProps)
    }

    const inputProps = {
        name: 'name',
        type: 'text',
        placeholder: 'Enter product name..',
    }


    const selectProps = {
        name: 'category',
        placeholder: 'Choose product category..',
        filterBy: null,
        optionFields: product_category_types_data.types,
    }

    const fileProps = {
        name: 'image',
        placeholder: 'Choose product image..',
        type: 'file'
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ProductCreateFormValidationRules}
            onSubmit={onSubmit}
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
                    <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Create Product</Button>
                </div>
            </Form>
        </Formik >
    )
}

export default CreateForm