import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services';

/* fetch all items */
export const fetchVendor = createAsyncThunk(
    'vendor/fetch',
    async () => {
        const url = `${API_URL}vendor`
        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

/* save new item */
export const saveVendor = createAsyncThunk(
    'vendor/save',
    async (data) => {
        try {
            const url = `${API_URL}vendor`;
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
export const updateVendor = createAsyncThunk(
    'vendor/update',
    async (data) => {
        console.log('slice :', data.id)
        const url = `${API_URL}vendor/${data.id}`;
        try {
            const response = await axios.put(url, data)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

/* delete item */
export const deleteVendor = createAsyncThunk(
    'vendor/delete',
    async (data) => {
        const url = `${API_URL}vendor/${data}`;
        try {
            const response = await axios.delete(url)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)


export const vendor = createSlice({
    name: 'vendor',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVendor.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchVendor.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(fetchVendor.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(saveVendor.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(saveVendor.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(saveVendor.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(updateVendor.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(updateVendor.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(updateVendor.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(deleteVendor.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(deleteVendor.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(deleteVendor.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export default vendor.reducer;


