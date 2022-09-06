import { createSlice } from "@reduxjs/toolkit";
import { product_list_data } from "../../assets/data";


const initialState = product_list_data

export const product_list = createSlice({
    name: 'product_list',
    initialState: initialState,
    reducers: {
        create: (state, action) => {
            state.products.push(action.payload)
        },
        update: (state, action) => {
            // console.log(action.payload)
            state.products.forEach((product) => {
                if (product.id === action.payload.id) {
                    product.name = action.payload.updatedname
                    product.category = action.payload.updatedcategory
                    // product.image = action.payload.updatedimage
                }
            })
        },
        remove: (state, action) => {
            state.products = state.products.filter((product => product.id !== action.payload))
        }
    }
})

export const { create, update, remove } = product_list.actions
export default product_list.reducer;