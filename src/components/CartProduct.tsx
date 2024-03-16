import { Card, Headline, Image, Paragraph, Title } from "@vkontakte/vkui";
import { CSSProperties, createRef } from "react";
import { useDeviceInfo } from "../hooks/useDevice";
import { Device } from "../state/UI/types";

import CartProductButtonGroup from "./CartProductButtonGroup";
import { cartSelectors } from "../state/cart/selectors";
import { useSelector } from "react-redux";

interface CartProductProps {
  productID: number;
}

function CartProduct({ productID }: CartProductProps) {
  const { id, thumbnail, title, price } = useSelector(
    cartSelectors.product(productID)
  );
  const rootRef = createRef<HTMLDivElement>();
  const device = useDeviceInfo();

  return (
    <Card getRootRef={rootRef} style={getCardStyle(device)}>
      <Image src={thumbnail} style={getImageStyle(device)} />
      <Paragraph style={getParagraphStyle(device)}>{price}₽</Paragraph>
      <Title style={getTitleStyle(device)} level="3">
        {title}
      </Title>
      <Headline style={getHeadLineStyle(device)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. quidem
        laborum!
      </Headline>
      <CartProductButtonGroup productID={id} />
    </Card>
  );
}

function getCardStyle(device: Device): CSSProperties {
  const defaultStyles: CSSProperties = {
    backgroundColor: "transparent",
    position: "relative",
    height: "200px",
  };

  switch (device) {
    case "desktop":
    case "tablet":
      return { ...defaultStyles, height: "300px" };
    default:
      return defaultStyles;
  }
}

function getImageStyle(device: Device): CSSProperties {
  const defaultStyles: CSSProperties = { width: "100%", height: "70%" };

  switch (device) {
    case "desktop":
    case "tablet":
      return {
        ...defaultStyles,
        height: "50%",
      };
    default:
      return defaultStyles;
  }
}

function getParagraphStyle(device: Device): CSSProperties {
  switch (device) {
    case "mobile":
      return {
        display: "block",
        fontSize: "12px",
        lineHeight: "1.3",
      };
    default:
      return {};
  }
}

function getTitleStyle(device: Device): CSSProperties {
  switch (device) {
    case "mobile":
      return {
        fontSize: "14px",
        lineHeight: "1.3",
        textWrap: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      };
    default:
      return {};
  }
}

function getHeadLineStyle(device: Device): CSSProperties {
  const defaultStyles: CSSProperties = {
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  switch (device) {
    case "desktop":
      return {
        ...defaultStyles,
        maxHeight: "60px",
      };
    case "tablet":
      return {
        ...defaultStyles,
        maxHeight: "37px"
      }
    default:
      return {
        ...defaultStyles,
        fontSize: "12px",
        lineHeight: "1.3",
        textWrap: "nowrap",
      };
  }
}

export default CartProduct;
