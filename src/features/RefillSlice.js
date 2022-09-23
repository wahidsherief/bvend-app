import { createSlice } from "@reduxjs/toolkit";
import { refillListData } from "assets/data";


export const refill = createSlice({
    name: 'refill',
    initialState: refillListData,
    reducers: {
        get: (state, action) => {
            state.refills = state.refills.filter((refill => refill.id !== action.payload))
        }
    }
})

export const { get } = refill.actions
export default refill.reducer;