import {
  Icon24Add,
  Icon24MinusOutline,
  Icon24TrashSimpleOutline,
} from "@vkontakte/icons";
import { ButtonGroup, IconButton, Text } from "@vkontakte/vkui";
import { useDeviceInfo } from "../hooks/useDevice";
import { Device } from "../state/UI/types";
import { CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProductQuantity,
  deleteProduct,
  incrementProductQuantity,
} from "../state/cart/slice";
import { cartSelectors } from "../state/cart/selectors";

const ICON_SIZE = 16;

interface CartProductButtonGroupProps {
  productID: number;
}

function CartProductButtonGroup({ productID }: CartProductButtonGroupProps) {
  const quantity = useSelector(cartSelectors.productQuantity(productID));
  const device = useDeviceInfo();
  const dispatch = useDispatch();

  return (
    <ButtonGroup style={getButtonGroupStyle(device)}>
      <IconButton
        label="Увеличить количество"
        style={getQuantityButtonStyle(device)}
        onClick={() => dispatch(incrementProductQuantity(productID))}
        disabled={quantity === 10}
      >
        <Icon24Add
          width={ICON_SIZE}
          height={ICON_SIZE}
          style={getIconStyle()}
        />
      </IconButton>
      <Text style={getTextStyle(device)}>{quantity}</Text>
      <IconButton
        label="Уменьшить количество"
        style={getQuantityButtonStyle(device)}
        onClick={() => dispatch(decrementProductQuantity(productID))}
        disabled={quantity === 1}
      >
        <Icon24MinusOutline
          width={ICON_SIZE}
          height={ICON_SIZE}
          style={getIconStyle()}
        />
      </IconButton>
      <IconButton
        label="Удалить товар из корзины"
        style={getTrashButtonStyle(device)}
        onClick={() => dispatch(deleteProduct(productID))}
      >
        <Icon24TrashSimpleOutline
          width={ICON_SIZE}
          height={ICON_SIZE}
          style={getIconStyle()}
        />
      </IconButton>
    </ButtonGroup>
  );
}

function getTextStyle(device: Device): CSSProperties {
  switch (device) {
    default:
      return {
        marginRight: "8px",
        lineHeight: "20px",
      };
  }
}

function getQuantityButtonStyle(device: Device): CSSProperties {
  switch (device) {
    default:
      return {
        height: "auto",
        backgroundColor: "var(--vkui--color_background_accent)",
        padding: "2px",
        marginRight: "8px",
      };
  }
}

function getTrashButtonStyle(device: Device): CSSProperties {
  switch (device) {
    default:
      return {
        height: "auto",
        padding: "2px",
        backgroundColor: "var(--vkui--color_background_accent)",
      };
  }
}

function getIconStyle(): CSSProperties {
  return {
    padding: "0",
  };
}

function getButtonGroupStyle(device: Device): CSSProperties {
  switch (device) {
    case "mobile":
      return {
        position: "absolute",
        right: "1px",
        top: "1px",
        backgroundColor: "var(--vkui--color_background)",
        padding: "2px",
        borderRadius: "4px",
      };
    default:
      return {
        marginTop: "8px",
      };
  }
}

export default CartProductButtonGroup;
