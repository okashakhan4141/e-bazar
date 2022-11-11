import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalAmount: 0,
    totalQuantity: 0,
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action) {
            state.totalAmount = action.payload.totalAmount;
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
