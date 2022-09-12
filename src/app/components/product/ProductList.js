import React from "react"
import ListContainer from "../common/ListContainer";
import PageTitle from "../common/PageTitle"
import EditForm from "./EditForm";
import { useSelector } from "react-redux"

const action = {
    hasAction: true,
    actionTitle: 'Add Product',
    actionLink: '/product/create'
}


const ProductList = () => {

    const productListState = useSelector((state) => {
        return state['product_list']
    })

    const { products } = productListState

    const item = {
        itemName: 'products',
        items: products
    }

    const editComponent = EditForm

    return (
        <React.Fragment>
            <PageTitle title='Product List' action={action} />
            <ListContainer item={item} component={editComponent} />
        </React.Fragment >
    )
}

export default ProductList