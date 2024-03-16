import { useDispatch, useSelector } from "react-redux";
import { Product } from "../cart/types";
import { RefObject, useEffect, useRef } from "react";
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

export type CardResizeObserver = {
  observe: (element: HTMLDivElement) => void;
  unobserve: (element: HTMLDivElement) => void;
};

export function useCardResizeEffect(
  rootRef: RefObject<HTMLDivElement>,
  cardResizeObserver: CardResizeObserver
) {
  return useEffect(() => {
    if (rootRef.current === null) {
      return;
    }

    const current = rootRef.current;

    cardResizeObserver.observe(current);

    return () => cardResizeObserver.unobserve(current);
  }, [rootRef, cardResizeObserver]);
}

export function useCardsResizeObserverRef() {
  return useRef<CardResizeObserver>(
    new ResizeObserver(cardResizeObserverCallback)
  );
}

function cardResizeObserverCallback(entries: ResizeObserverEntry[]) {
  if (entries.length === 0) {
    return;
  }

  const cardHeight = entries[0].target.clientWidth / 3;
  const cardHeightStyle = `${cardHeight}px`;

  for (const entry of entries) {
    const htmlElement = entry.target as HTMLElement;
    htmlElement.style.height = cardHeightStyle;
  }
}
