import { createSlice } from "@reduxjs/toolkit";
import { productCategoryData } from "assets/data";

export const productCategory = createSlice({
    name: 'productCategory',
    initialState: productCategoryData,
    reducers: {
        create: (state, action) => {
            state.categories.push(action.payload)
        },
        update: (state, action) => {
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

export const { create, update, remove } = productCategory.actions
export default productCategory.reducer;