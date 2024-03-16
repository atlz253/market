import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState } from "./types";
import { Product } from "../../cart/types";
import { default as errorMessages } from "./errorMessages";

export const initialState: CartState = {
  cartID: 1,
  products: [],
  productsIDs: [],
  productsQuantity: {},
} as const;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Product[]>) => {
      const productsQuantity: Record<number, number> = {};
      for (const product of payload) {
        productsQuantity[product.id] = product.quantity || 0;
      }
      state.productsQuantity = productsQuantity;

      state.products = payload;
      state.productsIDs = payload.map((product) => product.id);
    },
    deleteProduct: (state, { payload }: PayloadAction<number>) => {
      state.productsIDs = state.productsIDs.filter((id) => id !== payload);
      state.products = state.products.filter(({ id }) => id !== payload);
      delete state.productsQuantity[payload];
    },
    incrementProductQuantity: (state, { payload }: PayloadAction<number>) => {
      if (state.productsQuantity[payload] === undefined) {
        throw new Error(errorMessages.productWIthIDNotFound(payload));
      } else if (state.productsQuantity[payload] < 10) {
        state.productsQuantity[payload]++;
      }
    },
    decrementProductQuantity: (state, { payload }: PayloadAction<number>) => {
      if (state.productsQuantity[payload] === undefined) {
        throw new Error(errorMessages.productWIthIDNotFound(payload));
      } else if (state.productsQuantity[payload] > 1) {
        state.productsQuantity[payload]--;
      }
    },
  },
});

const cartReducer = cartSlice.reducer;

export const {
  setProducts,
  deleteProduct,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions;

export default cartReducer;
