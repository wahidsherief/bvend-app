import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services/CommonService';

export const fetchVendorMachines = createAsyncThunk(
    'vendor_machine/fetch',
    async () => {
        const url = `${API_URL}vendor/machines/1`
        try {
            const response = await axios.get(url)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

export const fetchRefills = createAsyncThunk(
    'vendor_machine/refills/fetch',
    async () => {
        const url = `${API_URL}vendor/machine/refill/1`
        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

export const storeRefill = createAsyncThunk(
    'vendor_machine/refill/store',
    async (data) => {
        const url = `${API_URL}vendor/machine/refill`
        try {
            const response = await axios.post(url, data)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

export const vendorMachine = createSlice({
    name: 'vendorMachine',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVendorMachines.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchVendorMachines.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(fetchVendorMachines.rejected, (state) => {
                state.status = STATUS.ERROR
            })
            .addCase(fetchRefills.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchRefills.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(fetchRefills.rejected, (state) => {
                state.status = STATUS.ERROR
            })
            .addCase(storeRefill.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(storeRefill.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(storeRefill.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export default vendorMachine.reducer;


