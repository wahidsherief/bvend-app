import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services';

/* fetch all items */
export const fetchCategory = createAsyncThunk(
    'fetch',
    async () => {
        const url = `${API_URL}product/category`
        try {
            const response = await axios.get(url)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

/* save new item */
export const saveCategory = createAsyncThunk(
    'save',
    async (data) => {
        try {
            const url = `${API_URL}product/category`;
            const response = await axios.post(url, data)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

/* update existing item */
export const updateCategory = createAsyncThunk(
    'update',
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
    'delete',
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
            .addCase(fetchCategory.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(fetchCategory.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(saveCategory.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(saveCategory.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(saveCategory.rejected, (state) => {
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


