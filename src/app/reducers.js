import product from "features/ProductSlice";
import productCategory from "features/ProductCategorySlice";
import vendor from "features/VendorSlice";
import transaction from "features/TransactionSlice";
import machine from "features/MachineSlice";
import vendorMachine from "features/VendorMachineSlice";
import store from "features/StoreSlice";
import cart from "features/CartSlice";
import auth from "features/AuthSlice";

const rootReducer = {
    auth,
    product,
    productCategory,
    vendor,
    transaction,
    machine,
    vendorMachine,
    store,
    cart
}

export default rootReducer;