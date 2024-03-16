import { CardGrid } from "@vkontakte/vkui";
import {
  useCardsResizeObserverRef,
  useProductsIDs,
} from "../hooks/useProductsIDs";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";
import { cartSelectors } from "../state/cart/selectors";

function CartProducts() {
  const cartID = useSelector(cartSelectors.cartID);
  const products = useProductsIDs(cartID);
  const cardsResizeObserver = useCardsResizeObserverRef();

  return <CardGrid size="l">{createProductsCards(products)}</CardGrid>;

  function createProductsCards(products: number[]) {
    return products.map((id) => (
      <CartProduct
        key={id}
        productID={id}
        cardResizeObserver={cardsResizeObserver.current}
      />
    ));
  }
}

export default CartProducts;
