import {
  AppRoot,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
  usePlatform,
} from "@vkontakte/vkui";
import CartProducts from "./components/CartProducts";
import { useOnResizeDeviceDetection } from "./hooks/useDevice";

function App() {
  const platform = usePlatform();

  useOnResizeDeviceDetection();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        style={{justifyContent: "center"}}
      >
        <SplitCol autoSpaced maxWidth={1440}>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <CartProducts />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
