import React from "react";
import { Routes, Route } from "react-router-dom"
import Dashboard from "../components/dashboard"
import ProductList from "../components/product/ProductList"
import ProductCreate from "../components/product/ProductCreate"
import ProductCategory from "../components/product/ProductCategory"
import VendorList from "../components/vendor/VendorList"
import VendorCreate from "../components/vendor/VendorCreate"
import VendorRequest from "../components/vendor/VendorRequest"


const RootRoute = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path={'/'} element={<Dashboard />} />
                <Route path={'/products'} element={<ProductList />} />
                <Route path={'/product/create'} element={<ProductCreate />} />
                <Route path={'/product/category'} element={<ProductCategory />} />
                <Route path={'/vendors'} element={<VendorList />} />
                <Route path={'/vendor/create'} element={<VendorCreate />} />
                <Route path={'/vendor/requests'} element={<VendorRequest />} />
            </Routes>
        </React.Fragment>
    )
}

export default RootRoute