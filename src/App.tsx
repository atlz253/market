import {
  AppRoot,
  Group,
  Header,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
  useAdaptivityConditionalRender,
  usePlatform,
} from "@vkontakte/vkui";
import CartProducts from "./components/CartProducts";
import { useDeviceInfo, useOnResizeDeviceDetection } from "./hooks/useDevice";
import { CSSProperties } from "react";
import { Device } from "./state/UI/types";
import CartTotal from "./components/CartTotal";

const CartHeader = <Header mode="secondary">Корзина</Header>;

function App() {
  const platform = usePlatform();
  const device = useDeviceInfo();
  const { viewWidth } = useAdaptivityConditionalRender() as {
    viewWidth: { tabletPlus: { className: string } }; // FIXME: В документации VKUI это работало без таких хаков
  };

  useOnResizeDeviceDetection();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        style={{ justifyContent: "center" }}
      >
        <SplitCol autoSpaced maxWidth={1080} style={getLeftColStyle(device)}>
          <Panel>
            <PanelHeader>VKUI</PanelHeader>
            <Group header={CartHeader}>
              <CartProducts />
            </Group>
          </Panel>
        </SplitCol>
        <SplitCol
          autoSpaced
          maxWidth={360}
          className={viewWidth.tabletPlus.className}
        >
          <Panel>
            <PanelHeader />
            <Group>
              <CartTotal />
            </Group>
          </Panel>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

function getLeftColStyle(device: Device): CSSProperties {
  switch (device) {
    case "desktop":
      return {
        marginRight: "0",
      };
    default:
      return {};
  }
}

export default App;
