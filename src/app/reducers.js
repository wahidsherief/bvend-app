import product from "features/ProductSlice";
import productCategory from "features/ProductCategorySlice";
import vendor from "features/VendorSlice";
import vendorRequest from "features/VendorRequestSlice";

const rootReducer = {
    product,
    productCategory,
    vendor,
    vendorRequest
}

export default rootReducer;