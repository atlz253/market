import { Product } from "../cart/types";

export interface CartFetchResponse {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
  message?: string;
}