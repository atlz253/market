import { RootState } from "../store";
import { default as errorMessages } from "./errorMessages";

const total = (state: RootState) =>
  productsIDs(state).reduce(
    (accumulator, id) => accumulator + productTotalPrice(id)(state),
    0
  );

const productTotalPrice = (id: number) => (state: RootState) =>
  product(id)(state).price * productQuantity(id)(state);

const product = (id: number) => (state: RootState) => {
  const findResult = products(state).find((product) => product.id === id);

  if (findResult === undefined) {
    throw Error(errorMessages.productWIthIDNotFound(id));
  } else {
    return findResult;
  }
};

const products = (state: RootState) => cart(state).products;

const productQuantity = (id: number) => (state: RootState) => {
  const productQuantity = productsQuantity(state)[id];

  if (productQuantity === undefined) {
    throw Error(errorMessages.productWIthIDNotFound(id));
  } else {
    return productQuantity;
  }
};

const productsQuantity = (state: RootState) => cart(state).productsQuantity;

const productsIDs = (state: RootState) => cart(state).productsIDs;

const cartID = (state: RootState) => cart(state).cartID;

const cart = (state: RootState) => state.cart;

export const cartSelectors = {
  total,
  product,
  products,
  productQuantity,
  cartID,
  productsIDs,
} as const;
