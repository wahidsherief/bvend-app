import React from "react";
import { Routes, Route } from "react-router-dom"
import Dashboard from "app/components/pages/admin_panel/dashboard"
import ProductList from "app/components/pages/admin_panel/product/ProductList"
import ProductCreate from "app/components/pages/admin_panel/product/ProductCreate"
import ProductCategoryList from "app/components/pages/admin_panel/product_category/ProductCategoryList"
import ProductCategoryCreate from "app/components/pages/admin_panel/product_category/ProductCategoryCreate"
import VendorList from "app/components/pages/admin_panel/vendor/VendorList"
import VendorCreate from "app/components/pages/admin_panel/vendor/VendorCreate"
import VendorRequest from "app/components/pages/admin_panel/vendor/VendorRequest"
import TransactionList from "app/components/pages/admin_panel/transaction/TransactionList";
import MachineList from "app/components/pages/admin_panel/machine/MachineList";
import MachineCreate from "app/components/pages/admin_panel/machine/MachineCreate";
import VendorMachineList from "app/components/pages/vendor_panel/machine/VendorMachineList";
import RefillList from "app/components/pages/vendor_panel/machine/RefillList";


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
                <Route path={'/transactions'} element={<TransactionList />} />
                <Route path={'/machines'} element={<MachineList />} />
                <Route path={'/machine/create'} element={<MachineCreate />} />
                <Route path={'/vendor/machines'} element={<VendorMachineList />} />
                <Route path={'/vendor/refills/:machineID'} element={<RefillList />} />
            </Routes>
        </React.Fragment>
    )
}

export default RootRoute