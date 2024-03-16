import { Text } from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import { cartSelectors } from "../state/cart/selectors";

function CartTotal() {
  const total = useSelector(cartSelectors.total);

  return <Text style={{ padding: "0px 5px" }}>Итого: {total} руб.</Text>;
}

export default CartTotal;
