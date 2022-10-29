import product from "features/ProductSlice";
import productCategory from "features/ProductCategorySlice";
import vendor from "features/VendorSlice";
import transaction from "features/TransactionSlice";
import machine from "features/MachineSlice";
import refill from "features/RefillSlice";
// import assignVendorMachine from "features/VendorMachineSlice";

const rootReducer = {
    product,
    productCategory,
    vendor,
    transaction,
    machine,
    // assignVendorMachine,
    refill
}

export default rootReducer;