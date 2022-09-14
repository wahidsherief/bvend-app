import React from "react"
import ListContainer from "app/components/common/ListContainer";
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Edit from "./actions/Edit";
import Remove from "./actions/Remove";

const action = {
    hasAction: true,
    actionTitle: 'Add Product',
    actionLink: '/product/create'
}


const ProductList = () => {

    const productListState = useSelector((state) => {
        return state['product']
    })

    const { products } = productListState

    const item = {
        itemName: 'products',
        items: products,
        hasEdit: true,
        edit: Edit,
        hasRemove: true,
        remove: Remove
    }

    return (
        <React.Fragment>
            <PageTitle title='Product List' action={action} />
            <ListContainer item={item} />
        </React.Fragment >
    )
}

export default ProductList