import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services';

/* get all items */
export const getCategories = createAsyncThunk(
    'category/fetch',
    async () => {
        const url = `${API_URL}product/categories`
        try {
            const response = await axios.get(url)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

/* create new item */
export const createCategory = createAsyncThunk(
    'category/create',
    async (data) => {
        try {
            const url = `${API_URL}product/category/create`;
            const response = await axios.post(url, data)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

/* update existing item */
export const updateCategory = createAsyncThunk(
    'category/update',
    async (data) => {
        const url = `${API_URL}product/category/update/${data.id}`;
        try {
            const response = await axios.put(url, data)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

/* delete item */
export const deleteCategory = createAsyncThunk(
    'category/delete',
    async (data) => {
        const url = `${API_URL}product/category/delete/${data}`;
        try {
            const response = await axios.delete(url)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)


export const productCategory = createSlice({
    name: 'productCategory',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(getCategories.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(createCategory.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(createCategory.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(updateCategory.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(updateCategory.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(deleteCategory.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(deleteCategory.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export default productCategory.reducer;


