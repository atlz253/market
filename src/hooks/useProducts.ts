import { useDispatch, useSelector } from "react-redux";
import { Product } from "../cart/types";
import { useEffect } from "react";
import { getProductsByCartID } from "../cart/cart";
import { setProducts } from "../state/cart/slice";
import { cartSelectors } from "../state/cart/selectors";

export function useProducts(id: number): Product[] {
  const products = useSelector(cartSelectors.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsByCartID(id).then((products) => dispatch(setProducts(products)));
  }, [dispatch, id]);

  return products;
}
