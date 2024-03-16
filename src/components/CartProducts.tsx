import { CardGrid } from "@vkontakte/vkui";
import { useProductsIDs } from "../hooks/useProductsIDs";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";
import { cartSelectors } from "../state/cart/selectors";
import { useDeviceInfo } from "../hooks/useDevice";
import { Device } from "../state/UI/types";

function CartProducts() {
  const cartID = useSelector(cartSelectors.cartID);
  const products = useProductsIDs(cartID);
  const device = useDeviceInfo();

  return (
    <CardGrid size={getCardGridSize(device)}>
      {createProductsCards(products)}
    </CardGrid>
  );

  function createProductsCards(products: number[]) {
    return products.map((id) => <CartProduct key={id} productID={id} />);
  }
}

function getCardGridSize(device: Device): "l" | "m" | "s" {
  switch (device) {
    case "desktop":
      return "s";
    case "tablet":
      return "m";
    default:
      return "l";
  }
}

export default CartProducts;
