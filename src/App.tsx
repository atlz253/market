import {
  AppRoot,
  Group,
  Header,
  Panel,
  PanelHeader,
  SimpleCell,
  SplitCol,
  SplitLayout,
  View,
  usePlatform,
} from "@vkontakte/vkui";
import { useProducts } from "./hooks/useProducts";

function App() {
  const platform = usePlatform();
  const cartID = 1;
  const products = useProducts(cartID);

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
      >
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <Group header={<Header mode="secondary">Products</Header>}>
                {products.map(({ id, title }) => (
                  <SimpleCell key={id}>{title}</SimpleCell>
                ))}
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
