import { Form } from "react-bootstrap";
import { product_category_types_data } from "../../../assets/data";

const category_types = product_category_types_data.types


const CategorySelect = (props) => {

    const { formik, filterOption } = props
    const categories = filterOption === null ? category_types : category_types.filter((category) => category.name !== filterOption)
    const default_value = filterOption === null ? formik.values.category : filterOption

    return (
        <Form.Control
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={default_value}
            name='category'
            required as="select" custom
            className={formik.errors.category ? 'is-invalid select-lg' : 'select-lg'}  >
            {
                filterOption === null
                    ? <option value='' hidden>Choose product category</option>
                    : <option value={filterOption}>{filterOption}</option>
            }
            {
                categories.map((category) => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))
            }
        </Form.Control >
    )
}


export default CategorySelect