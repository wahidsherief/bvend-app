import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            name: 'Chips',
            category: 'Bombay Sweets',
            display: false
        },
        {
            id: 2,
            name: 'Shoe',
            category: 'Apex',
            display: false
        },
        {
            id: 3,
            name: 'Laptop',
            category: 'HP',
            display: false
        }
    ]
}

export const product_list = createSlice({
    name: 'product_list',
    initialState: initialState,
    reducers: {
        create: (state, action) => {
            state.products.push(action.payload)
        },
        update: (state, action) => {
            console.log(action.payload)
            state.products.forEach((product) => {
                if (product.id === action.payload.id) {
                    product.name = action.payload.updatedproduct
                    product.category = action.payload.updatedcategory
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