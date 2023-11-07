import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services/CommonService';

/* fetch all items */
export const fetchMachine = createAsyncThunk(
    'machine/fetch',
    async () => {
        const url = `${API_URL}machine`
        try {
            const response = await axios.get(url)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

/* save new item */
export const saveMachine = createAsyncThunk(
    'machine/save',
    async (data) => {
        const url = `${API_URL}machine`;
        try {
            const response = await axios.post(url, data)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

/* update existing item */
export const updateMachine = createAsyncThunk(
    'machine/update',
    async (data) => {
        const url = `${API_URL}machine/${data.id}`;
        try {
            const response = await axios.put(url, data)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)

/* delete item */
export const deleteMachine = createAsyncThunk(
    'machine/delete',
    async (data) => {
        const url = `${API_URL}machine/${data}`;
        try {
            const response = await axios.delete(url)
            return response.data.data
        } catch (err) {
            return err.message
        }
    }
)


export const machine = createSlice({
    name: 'machine',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMachine.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchMachine.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(fetchMachine.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(saveMachine.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(saveMachine.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(saveMachine.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(updateMachine.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(updateMachine.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(updateMachine.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            .addCase(deleteMachine.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(deleteMachine.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(deleteMachine.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export default machine.reducer;


