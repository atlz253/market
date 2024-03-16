import { Product } from "../../cart/types";

export type CartState = {
  cartID: number;
  productsIDs: number[];
  products: Product[];
  productsQuantity: Record<number, number>;
};
