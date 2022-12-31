import { createSlice } from "@reduxjs/toolkit"

export const cart = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, actions) {
            const { payload } = actions;
            const findIndex = state.findIndex((item) => item.id === payload.id)

            if (findIndex !== -1) state[findIndex].quantity++
            else state.push({ ...payload, quantity: 1 })
        },

        removeFromCart(state, actions) {
            const findIndex = state.findIndex((item) => item.id === actions.payload);

            if (state[findIndex].quantity > 1) state[findIndex].quantity--;
            else state.splice(findIndex, 1);
        },

        clearCart(state) {
            state.splice(0, state.length);
        },
    }
})

export const { addToCart, removeFromCart, clearCart } = cart.actions
export default cart.reducer;





