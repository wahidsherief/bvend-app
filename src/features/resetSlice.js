// resetSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { persistor } from 'app/store';
import { useSelector } from 'react-redux';
import { logoutUser, removeAuthUser } from 'services/AuthService';


export const logout = createAsyncThunk('reset/logout', async (role) => {
    await logoutUser(role);
    await persistor.purge();
    removeAuthUser();
});

const resetSlice = createSlice({
    name: 'reset',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, (state) => {
            // Any additional state changes after successful logout
            // toast('Logout successful');
        });
    }
});

// export { logout };
export default resetSlice.reducer;
