import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services/CommonService';
import { storeAuthUser } from 'services/AuthService';


export const login = createAsyncThunk(
    'auth/login',
    async (data) => {
        try {
            const url = `${API_URL}${data.type}/login`;
            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const response = await axios.post(url, data, headers)
            if (response.data) {
                storeAuthUser(response.data)
            }
        } catch (err) {
            return err.message
        }
    }
)

export const auth = createSlice({
    name: 'auth',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(login.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            })
            .addCase(login.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export default auth.reducer;


