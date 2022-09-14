import { createSlice } from "@reduxjs/toolkit";
import { productListData } from "assets/data";


export const product = createSlice({
    name: 'product',
    initialState: productListData,
    reducers: {
        create: (state, action) => {
            state.products.push(action.payload)
        },
        update: (state, action) => {
            // console.log(action.payload)
            state.products.forEach((product) => {
                if (product.id === action.payload.id) {
                    product.name = action.payload.name
                    product.category = action.payload.category
                    product.image = action.payload.image
                }
            })
        },
        remove: (state, action) => {
            state.products = state.products.filter((product => product.id !== action.payload))
        }
    }
})

export const { create, update, remove } = product.actions
export default product.reducer;