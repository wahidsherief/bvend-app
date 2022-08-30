import React from "react";
import { Routes, Route } from "react-router-dom"
import Dashboard from "../components/dashboard"
import ProductList from "../components/product/ProductList"
import ProductCategory from "../components/product/ProductCategory"


const RootRoute = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path={'/'} element={<Dashboard />} />
                <Route path={'/products'} element={<ProductList />} />
                <Route path={'/product/category'} element={<ProductCategory />} />
            </Routes>
        </React.Fragment>
    )
}

export default RootRoute