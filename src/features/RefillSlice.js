import { createSlice } from "@reduxjs/toolkit";
import { refillListData } from "assets/data";


export const refill = createSlice({
    name: 'refill',
    initialState: refillListData,
    reducers: {
        getRefillData: (state, action) => {
            state.refills = state.refills.filter((refill => refill.machine_id !== action.payload))
        }
    }
})

export const { getRefillData } = refill.actions
export default refill.reducer;