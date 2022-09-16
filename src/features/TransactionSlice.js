import { createSlice } from "@reduxjs/toolkit";
import { transactionListData } from "assets/data";


export const transaction = createSlice({
    name: 'transaction',
    initialState: transactionListData,
    reducers: {
    }
})

// export const { create, update, remove } = transaction.actions
export default transaction.reducer;