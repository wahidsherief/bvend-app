import product from "features/ProductSlice";
import productCategory from "features/ProductCategorySlice";
import vendor from "features/VendorSlice";
import transaction from "features/TransactionSlice";
import machine from "features/MachineSlice";
import vendorMachine from "features/VendorMachineSlice";
import store from "features/StoreSlice";

const rootReducer = {
    product,
    productCategory,
    vendor,
    transaction,
    machine,
    vendorMachine,
    store
}

export default rootReducer;