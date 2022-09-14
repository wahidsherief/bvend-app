import React from "react";
import { Routes, Route } from "react-router-dom"
import Dashboard from "app/components/pages/dashboard"
import ProductList from "app/components/pages/product/ProductList"
import ProductCreate from "app/components/pages/product/ProductCreate"
import ProductCategoryList from "app/components/pages/product_category/ProductCategoryList"
import ProductCategoryCreate from "app/components/pages/product_category/ProductCategoryCreate"
import VendorList from "app/components/pages/vendor/VendorList"
import VendorCreate from "app/components/pages/vendor/VendorCreate"
import VendorRequest from "app/components/pages/vendor/VendorRequest"


const RootRoute = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path={'/'} element={<Dashboard />} />
                <Route path={'/products'} element={<ProductList />} />
                <Route path={'/product/create'} element={<ProductCreate />} />
                <Route path={'/product/category'} element={<ProductCategoryList />} />
                <Route path={'/product/category/create'} element={<ProductCategoryCreate />} />
                <Route path={'/vendors'} element={<VendorList />} />
                <Route path={'/vendor/create'} element={<VendorCreate />} />
                <Route path={'/vendor/requests'} element={<VendorRequest />} />
            </Routes>
        </React.Fragment>
    )
}

export default RootRoute