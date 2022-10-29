import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services';



/* save new item */
export const assignMachine = createAsyncThunk(
    'machine/assign',
    async (data) => {
        const url = `${API_URL}machine/assign`;
        try {
            const response = await axios.post(url, data)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)


export const assignVendorMachine = createSlice({
    name: 'assign_vendor_machine',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(assignVendorMachine.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(assignVendorMachine.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(assignVendorMachine.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export default assignVendorMachine.reducer;


