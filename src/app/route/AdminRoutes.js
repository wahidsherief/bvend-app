import { Route, Routes } from "react-router-dom"
import AdminDashboard from "app/components/pages/admin_panel/dashboard"
import ProductList from "app/components/pages/admin_panel/product/ProductList"
import ProductCreate from "app/components/pages/admin_panel/product/ProductCreate"
import ProductCategoryList from "app/components/pages/admin_panel/product_category/ProductCategoryList"
import ProductCategoryCreate from "app/components/pages/admin_panel/product_category/ProductCategoryCreate"
import VendorList from "app/components/pages/admin_panel/vendor/VendorList"
import VendorCreate from "app/components/pages/admin_panel/vendor/VendorCreate"
import VendorRequest from "app/components/pages/admin_panel/vendor/VendorRequest"
import TransactionList from "app/components/pages/admin_panel/transaction/TransactionList";
import MachineTypeList from "app/components/pages/admin_panel/machine_type/MachineTypeList";
import MachineTypeCreate from "app/components/pages/admin_panel/machine_type/MachineTypeCreate";
import MachineList from "app/components/pages/admin_panel/machine/MachineList";
import MachineCreate from "app/components/pages/admin_panel/machine/MachineCreate";
import React from "react"

const adminRoutes = () => (
    <React.Fragment>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path={'/products'} element={<ProductList />} />
        <Route path={'/product/create'} element={<ProductCreate />} />
        <Route path={'/product/category'} element={<ProductCategoryList />} />
        <Route path={'/product/category/create'} element={<ProductCategoryCreate />} />
        <Route path={'/transactions'} element={<TransactionList />} />
        <Route path={'/machines'} element={<MachineList />} />
        <Route path={'/machine/create'} element={<MachineCreate />} />
        <Route path={'/machine/type'} element={<MachineTypeList />} />
        <Route path={'/machine/type/create'} element={<MachineTypeCreate />} />
        <Route path={'/vendors'} element={<VendorList />} />
        <Route path={'/vendor/create'} element={<VendorCreate />} />
        <Route path={'/vendor/requests'} element={<VendorRequest />} />
    </React.Fragment>
)

export default adminRoutes