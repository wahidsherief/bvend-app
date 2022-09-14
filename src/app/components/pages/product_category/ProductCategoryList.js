import React from "react"
import ListContainer from "app/components/common/ListContainer";
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Edit from "./actions/Edit";
import Remove from "./actions/Remove";

const action = {
    hasAction: true,
    actionTitle: 'Add Product Category',
    actionLink: '/product/category/create'
}

const ProductCategoryList = () => {

    const productCategoryListState = useSelector((state) => {
        return state['productCategory']
    })

    const { categories } = productCategoryListState

    const item = {
        itemName: 'categories',
        items: categories
    }

    return (
        <React.Fragment>
            <PageTitle title='Product Category List' action={action} />
            <ListContainer item={item}>
                <Edit />
                <Remove />
            </ListContainer>
        </React.Fragment >
    )
}

export default ProductCategoryList