import React, { useEffect, useState } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { fetch as fetchProduct } from "features/ProductSlice";
import PageContent from "app/components/common/PageContent";
import ProductTableContent from "./ProductTableContent";


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

    const ProductTable = ({ items, status }) => {
        return (
            <div className="table-wrapper table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.length > 0 &&
                            items?.map((item) => (
                                <ProductTableContent key={item.id} item={item} status={status} />
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <React.Fragment>
            <PageTitle title='Product List' action={action} />
            <PageContent items={products} status={status} component={ProductTable} />
        </React.Fragment>
    )
}

export default ProductList

