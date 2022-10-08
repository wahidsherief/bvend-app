import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from 'services';
import axios from 'axios';
import { API_URL } from "config";

export const productCategory = createSlice({
    name: 'productCategory',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        create: (state, action) => {
            state.categories.push(action.payload)
        },
        update: (state, action) => {
            state.categories.forEach((category) => {
                if (category.id === action.payload.id) {
                    category.category = action.payload.category
                    category.brand = action.payload.brand
                }
            })
        },
        remove: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export const { create, update, remove } = productCategory.actions
export default productCategory.reducer;

const fetchURL = `${API_URL}product/categories`
export const fetchCategories = createAsyncThunk(
    'category/fetch',
    async () => {
        try {
            const response = await axios.get(fetchURL)
            return [...response.data]
        } catch (err) {
            return err.message
        }
    }
)