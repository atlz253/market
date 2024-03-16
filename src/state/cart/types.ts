import { Product } from "../../cart/types";

export type CartState = {
  productsIDs: number[];
  products: Product[];
  productsQuantity: Record<number, number>;
};
