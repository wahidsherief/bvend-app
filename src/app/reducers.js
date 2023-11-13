import product from "features/ProductSlice";
import productCategory from "features/ProductCategorySlice";
import vendor from "features/VendorSlice";
import transaction from "features/TransactionSlice";
import machine from "features/MachineSlice";
import vendorMachine from "features/VendorMachineSlice";
import store from "features/StoreSlice";
import cart from "features/CartSlice";
import auth from "features/AuthSlice";
import { combineReducers } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage"

const appReducer = combineReducers({
    auth,
    product,
    productCategory,
    vendor,
    transaction,
    machine,
    vendorMachine,
    store,
    cart
})
const rootReducer = (state, action) => {
    if (action.type === "reset/logout") {
        storage.removeItem('persist:root')
        return appReducer(undefined, action);
    }

    return appReducer(state, action);
};

export default rootReducer;