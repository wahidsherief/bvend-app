import { Form } from "react-bootstrap";
import { product_category_types_data } from "../../../assets/data";

const category_types = product_category_types_data.types


const CategorySelect = (props) => {

    const handleChange = e => {
        props.selectedCategory(e.target.value)
    }

    const categories = props.filterOption === null ? category_types : category_types.filter((category) => category.name !== props.filterOption)
    return (
        <Form.Control defaultValue={props.filterOption} name='category' required as="select" custom className="select-lg" onChange={handleChange}>
            {
                props.filterOption === null
                    ? <option value='' selected={false} hidden>Choose product category</option>
                    : <option value={props.filterOption}>{props.filterOption}</option>
            }
            {
                categories.map((category) => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))
            }
        </Form.Control>
    )
}


export default CategorySelect