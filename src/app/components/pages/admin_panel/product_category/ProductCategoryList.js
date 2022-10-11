import React, { useEffect } from "react"
import ListContainer from "app/components/common/ListContainer";
import PageTitle from "app/components/common/PageTitle"
import { useDispatch, useSelector } from "react-redux"
import Edit from "./actions/Edit";
import Remove from "./actions/Remove";
import { getCategories } from "features/ProductCategorySlice";
import { STATUS } from "services";


const action = {
    hasAction: true,
    actionTitle: 'Add Product Category',
    actionLink: '/product/category/create'
}

const ProductCategoryList = () => {

    const dispatch = useDispatch()

    const { data: categories, status } = useSelector((state) => state.productCategory)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const item = {
        itemName: 'categories',
        items: categories,
        hasEdit: true,
        edit: Edit,
        hasRemove: true,
        remove: Remove
    }

    const Loading = () => <h2>Loading...</h2>

    return (
        <React.Fragment>
            <PageTitle title='Product Category List' action={action} />
            {status === STATUS.LOADING
                ? <Loading />
                : <ListContainer item={item} />
            }
        </React.Fragment >
    )
}

export default ProductCategoryList