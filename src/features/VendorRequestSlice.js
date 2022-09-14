import { createSlice } from "@reduxjs/toolkit";
import { vendorRequestListData } from "assets/data";


export const VendorRequest = createSlice({
    name: 'vendorRequest',
    initialState: vendorRequestListData,
    reducers: {
        // create: (state, action) => {
        //     state.vendors.push(action.payload)
        // },
        // update: (state, action) => {
        //     state.vendors.forEach((vendor) => {
        //         if (vendor.id === action.payload.id) {
        //             vendor.name = action.payload.name
        //             vendor.email = action.payload.email
        //             vendor.image = action.payload.image
        //         }
        //     })
        // },
        // remove: (state, action) => {
        //     state.vendors = state.vendors.filter((vendor => vendor.id !== action.payload))
        // }
    }
})

// export const { create, update, remove } = vendor.actions
export default VendorRequest.reducer;