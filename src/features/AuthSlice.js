import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "config";
import { STATUS } from 'services/CommonService';
import { storeAuthUser, getAuthRole, removeAuthUser } from 'services/AuthService';


export const login = createAsyncThunk(
    'auth/login',
    async (data) => {
        try {
            const url = `${API_URL}${data.role}/login`;
            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const response = await axios.post(url, data, headers)
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

const initialState = {
    data: [],
    status: STATUS.IDLE,
    role: null,
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            removeAuthUser()
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = STATUS.LOADING
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload) {
                    storeAuthUser(action.payload)
                    state.data = action.payload
                    state.status = STATUS.IDLE
                    state.role = getAuthRole()
                } else {
                    return state
                }
            })
            .addCase(login.rejected, (state) => {
                state.status = STATUS.ERROR
            })
    }
})

export const { logout } = auth.actions

export default auth.reducer;


