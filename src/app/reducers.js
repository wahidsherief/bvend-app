import product from "features/ProductSlice";
import productCategory from "features/ProductCategorySlice";
import vendor from "features/VendorSlice";
import transaction from "features/TransactionSlice";
import machine from "features/MachineSlice";
import vendorMachine from "features/VendorMachineSlice";

const rootReducer = {
    product,
    productCategory,
    vendor,
    transaction,
    machine,
    vendorMachine
}

export default rootReducer;