import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS, transformErrorData } from 'services/CommonService';
import { storeAuthUser, getAuthRole, removeAuthUser } from 'services/AuthService';

export const login = createAsyncThunk(
    'auth/login',
    async (data) => {
        try {
            const url = `${API_URL}/${data.role}/login`;
            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const response = await axios.post(url, data, headers)
            return response.data

        } catch (error) {
            const transformedError = error && JSON.stringify(transformErrorData(error.response))
            throw new Error(transformedError)
        }
    }
)

const initialState = {
    data: [],
    status: STATUS.IDLE,
    role: '',
    validationErrors: {}
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = STATUS.LOADING;
                state.validationErrors = {};
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload) {
                    storeAuthUser(action.payload);
                    state.data = action.payload;
                    state.role = getAuthRole();
                    state.validationErrors = {};
                    state.status = STATUS.IDLE;
                } else {
                    return state;
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.status = STATUS.ERROR
                state.validationErrors = action.error.message ? JSON.parse(action.error.message) : {}
            });

    }
})

export const { logout } = auth.actions

export default auth.reducer;


