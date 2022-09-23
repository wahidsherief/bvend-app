import { createSlice } from "@reduxjs/toolkit";
import { refillListData } from "assets/data";


export const refill = createSlice({
    name: 'refill',
    initialState: refillListData,
    reducers: {
    }
})

// export const { } = refill.actions
export default refill.reducer;