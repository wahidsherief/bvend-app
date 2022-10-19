import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services';

/* fetch all items */
export const fetchProduct = createAsyncThunk(
    'product/fetch',
    async () => {
        const url = `${API_URL}product`
        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

/* save new item */
export const saveProduct = createAsyncThunk(
    'product/product/save',
    async (data) => {
        try {
            const url = `${API_URL}product`;
            const headers = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
            const response = await axios.post(url, data, headers)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

/* update existing item */
export const updateProduct = createAsyncThunk(
    'product/update',
    async (data) => {
        console.log('slice :', data.id)
        const url = `${API_URL}product/${data.id}`;
        try {
            const response = await axios.put(url, data)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

/* delete item */
export const deleteProduct = createAsyncThunk(
    'product/delete',
    async (data) => {
        const url = `${API_URL}product/${data}`;
        try {
            const response = await axios.delete(url)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)


export const product = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(saveProduct.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(saveProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(saveProduct.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(updateProduct.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(updateProduct.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(deleteProduct.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export default product.reducer;


