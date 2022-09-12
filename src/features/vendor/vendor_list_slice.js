import { createSlice } from "@reduxjs/toolkit";
import { vendor_list_data } from "../../assets/data";


const initialState = vendor_list_data

export const vendor_list = createSlice({
    name: 'vendor_list',
    initialState: initialState,
    reducers: {
        create: (state, action) => {
            state.vendors.push(action.payload)
        },
        update: (state, action) => {
            // console.log(action.payload)
            state.vendors.forEach((vendor) => {
                if (vendor.id === action.payload.id) {
                    vendor.name = action.payload.name
                    vendor.category = action.payload.category
                    vendor.image = action.payload.image
                }
            })
        },
        remove: (state, action) => {
            state.vendors = state.vendors.filter((vendor => vendor.id !== action.payload))
        }
    }
})

export const { create, update, remove } = vendor_list.actions
export default vendor_list.reducer;