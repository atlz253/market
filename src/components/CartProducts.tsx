import { CardGrid } from "@vkontakte/vkui";
import {
  useCardsResizeObserverRef,
  useProductsIDs,
} from "../hooks/useProductsIDs";
import CartProduct from "./CartProduct";

function CartProducts() {
  const cartID = 1;
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
