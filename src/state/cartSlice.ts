import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  value: 0,
} as const;

const cartSlice = createSlice({
  name: `${createSlice}`,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const cartReducer = cartSlice.reducer;

export const { increment, decrement } = cartSlice.actions;

export default cartReducer;
