import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from 'services';

export const cart = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        add(state, action) {
            state.data.push(action.payload)
        },
        remove(state, action) {
            state = state.data.filter(item => item.id !== action.payload)
        }
    }
})

export const { add, remove } = cart.actions
export default cart.reducer;


