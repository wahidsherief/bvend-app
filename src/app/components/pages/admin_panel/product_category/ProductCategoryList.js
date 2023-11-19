import React, { useEffect, useState } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { fetch as fetchProductCategory } from "features/ProductCategorySlice";
import PageContent from "app/components/common/PageContent";
import ProductCategoryTableContent from "./ProductCategoryTableContent";


const action = {
    hasAction: true,
    actionTitle: 'Add Product Category',
    actionLink: '/product/category/create'
}

const ProductCategoryList = () => {

    const dispatch = useDispatch()

    const { data: categories, status } = useSelector((state) => state.productCategory)

    useEffect(() => {
        dispatch(fetchProductCategory())
    }, [dispatch])

    const ProductCategoryTable = ({ items, status }) => {
        return (
            <div className="table-wrapper table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.length > 0 &&
                            items?.map((item) => (
                                <ProductCategoryTableContent key={item.id} item={item} status={status} />
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <React.Fragment>
            <PageTitle title='Product Category List' action={action} />
            <PageContent items={categories} status={status} component={ProductCategoryTable} />
        </React.Fragment>
    )
}

export default ProductCategoryList;

