import product from "features/ProductSlice";
import productCategory from "features/ProductCategorySlice";
import vendor from "features/VendorSlice";
import vendorRequest from "features/VendorRequestSlice";
import transaction from "features/TransactionSlice";
import machine from "features/MachineSlice";

const rootReducer = {
    product,
    productCategory,
    vendor,
    vendorRequest,
    transaction,
    machine
}

export default rootReducer;