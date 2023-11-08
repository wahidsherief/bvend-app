import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services/CommonService';
import { storeAuthUser, getAuthToken, getAuthUser, removeAuthUser } from 'services/AuthService';


export const login = createAsyncThunk(
    'auth/login',
    async ({ type, data }) => {
        try {
            const url = `${API_URL}${type}/login`;
            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const response = await axios.post(url, data, headers)
            return { ...response.data, type }
        } catch (err) {
            return err.message
        }
    }
)

const initialState = {
    data: [],
    status: STATUS.IDLE,
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadUser(state) {
            const token = getAuthToken()
            if (token) {
                state.data = getAuthUser()
            }
        },
        logout(state) {
            removeAuthUser()
            state.data = []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload) {
                    state.data = {
                        ...action.payload,
                        type: action.payload.type,
                    }
                    state.status = STATUS.IDLE
                    storeAuthUser(action.payload)
                } else {
                    return state
                }
            })
            .addCase(login.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export const { loadUser, logout } = auth.actions

export default auth.reducer;


