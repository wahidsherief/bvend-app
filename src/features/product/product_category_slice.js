import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            id: 1,
            category: 'Chips',
            brand: 'Bombay Sweets',
            display: false
        },
        {
            id: 2,
            category: 'Shoe',
            brand: 'Apex',
            display: false
        },
        {
            id: 3,
            category: 'Laptop',
            brand: 'HP',
            display: false
        }
    ]
}

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