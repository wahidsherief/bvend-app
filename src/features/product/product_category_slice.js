import { createSlice } from "@reduxjs/toolkit";
import { product_category_data } from "../../assets/data";

const initialState = product_category_data

export const product_category = createSlice({
    name: 'product_category',
    initialState: initialState,
    reducers: {
        create: (state, action) => {
            state.categories.push(action.payload)
        },
        update: (state, action) => {
            console.log(action.payload)
            state.categories.forEach((category) => {
                if (category.id === action.payload.id) {
                    category.category = action.payload.updatedcategory
                    category.brand = action.payload.updatedbrand
                }
            })
        },
        remove: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload)
        }
    }
})

export const { create, update, remove } = product_category.actions
export default product_category.reducer;