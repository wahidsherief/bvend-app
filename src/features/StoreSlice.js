import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services';

/* fetch all items */
export const fetchStore = createAsyncThunk(
    'store/fetch',
    async () => {
        const url = 'https://fakestoreapi.com/products'
        // const url = `${API_URL}machine/1`
        try {
            const response = await axios.get(url)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)


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


export const store = createSlice({
    name: 'store',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStore.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchStore.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(fetchStore.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export default store.reducer;


