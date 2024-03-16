import { CardGrid } from "@vkontakte/vkui";
import { useCardsResizeObserverRef, useProducts } from "../hooks/useProducts";
import CartProduct from "./CartProduct";
import { Product } from "../cart/types";

function CartProducts() {
  const cartID = 1;
  const products = useProducts(cartID);
  const cardsResizeObserver = useCardsResizeObserverRef();

  return <CardGrid size="l">{createProductsCards(products)}</CardGrid>;

  function createProductsCards(products: Product[]) {
    return products.map((product) => (
      <CartProduct
        key={product.id}
        product={product}
        cardResizeObserver={cardsResizeObserver.current}
      />
    ));
  }
}

export default CartProducts;
