import { Card, Headline, Image, Paragraph, Title } from "@vkontakte/vkui";
import { CSSProperties, createRef } from "react";
import { CardResizeObserver, useCardResizeEffect } from "../hooks/useProductsIDs";
import { useDeviceInfo } from "../hooks/useDevice";
import { Device } from "../state/UI/types";

import CartProductButtonGroup from "./CartProductButtonGroup";
import { cartSelectors } from "../state/cart/selectors";
import { useSelector } from "react-redux";

interface CartProductProps {
  productID: number;
  cardResizeObserver: CardResizeObserver;
}

function CartProduct({ productID, cardResizeObserver }: CartProductProps) {
  const { id, thumbnail, title, price } = useSelector(
    cartSelectors.product(productID)
  );
  const rootRef = createRef<HTMLDivElement>();
  const device = useDeviceInfo();

  useCardResizeEffect(rootRef, cardResizeObserver);

  return (
    <Card
      getRootRef={rootRef}
      style={{ backgroundColor: "transparent", position: "relative" }}
    >
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

function getImageStyle(device: Device): CSSProperties {
  const defaultStyles: CSSProperties = { width: "100%", height: "40%" };

  switch (device) {
    case "desktop":
    case "tablet":
      return {
        ...defaultStyles,
        height: "60%",
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
  switch (device) {
    case "mobile":
      return {
        fontSize: "12px",
        lineHeight: "1.3",
        textWrap: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      };
    default:
      return {};
  }
}

export default CartProduct;
