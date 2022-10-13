import React, { useEffect } from "react"
import ProductListContainer from "app/components/common/ProductListContainer";
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import Edit from "./actions/Edit";
import Remove from "./actions/Remove";
import { fetchProduct } from "features/ProductSlice";
import { STATUS, Loading } from "services"

const action = {
    hasAction: true,
    actionTitle: 'Add Product',
    actionLink: '/product/create'
}


const ProductList = () => {

    const dispatch = useDispatch()

    const { data: products, status } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])


    const item = {
        items: products,
        hasEdit: true,
        edit: Edit,
        hasRemove: true,
        remove: Remove
    }

    return (
        <React.Fragment>
            <PageTitle title='Product List' action={action} />
            {status === STATUS.LOADING
                ? <Loading />
                : <ProductListContainer name='products' item={item} />
            }
        </React.Fragment >
    )
}

export default ProductList