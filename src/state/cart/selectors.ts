import { RootState } from "../store";

const products = (state: RootState) => state.cart.products;

export const cartSelectors = {
  products,
} as const;
