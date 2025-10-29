import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'Slice1',
    initialState: {
        data: [],
        item: [], 
        count: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.item.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.item.push({...action.payload, quantity: 1});
            }
            state.count = state.item.reduce((total, item) => total + item.quantity, 0);
        },
        incrementItem: (state, action) => {
            const element = state.item.find(item => item.id === action.payload.id);
            if (element) {
                element.quantity += 1;
                state.count += 1;
            }
        },
        decrementItem: (state, action) => {
            const element = state.item.find(item => item.id === action.payload.id);
            if (element) {
                if (element.quantity > 1) {
                    element.quantity -= 1;
                    state.count -= 1;
                } else {
                    state.item = state.item.filter(item => item.id !== action.payload.id);
                    state.count -= 1;
                }
            }
        },
        removeItem: (state, action) => {
            const element = state.item.find(item => item.id === action.payload.id);
            if (element) {
                state.count -= element.quantity;
                state.item = state.item.filter(item => item.id !== action.payload.id);
            }
        },
        clearCart: (state) => {
            state.item = [];
            state.count = 0;
        },
        setRestaurants: (state, action) => {
            state.data = action.payload;
        },
    }
})

export default cart.reducer;
export const { addItem, incrementItem, decrementItem, removeItem, clearCart, setRestaurants } = cart.actions;