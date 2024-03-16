import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsByCartID } from "../cart/cart";
import { setProducts } from "../state/cart/slice";
import { cartSelectors } from "../state/cart/selectors";

export function useProductsIDs(id: number): number[] {
  const products = useSelector(cartSelectors.productsIDs);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsByCartID(id).then((products) => dispatch(setProducts(products)));
  }, [dispatch, id]);

  return products;
}
