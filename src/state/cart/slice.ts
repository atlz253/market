import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState } from "./types";
import { Product } from "../../cart/types";

export const initialState: CartState = {
  products: [],
} as const;

const cartSlice = createSlice({
  name: `${createSlice}`,
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload;
    },
  },
});

const cartReducer = cartSlice.reducer;

export const { setProducts } = cartSlice.actions;

export default cartReducer;
