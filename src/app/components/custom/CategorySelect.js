import { Form } from "react-bootstrap";
import { product_category_types_data } from "../../../assets/data";

const category_types = product_category_types_data.types

const CategorySelect = (props) => {
    const categories = props.filterOption === null ? category_types : category_types.filter((category) => category.name !== props.filterOption)
    return (
        <Form.Select className="select-position" size="lg">
            {
                props.filterOption === null
                    ? <option value={null}>Choose product category</option>
                    : <option value={props.filterOption}>{props.filterOption}</option>
            }
            {
                categories.map((category) => (
                    <option value={category.name}>{category.name}</option>
                ))
            }
        </Form.Select>
    )
}


export default CategorySelect