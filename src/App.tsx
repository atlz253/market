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
import { useDispatch, useSelector } from "react-redux";
import { State } from "./state/store";
import { decrement, increment } from "./state/cartSlice";

function App() {
  const platform = usePlatform();
  const count = useSelector((state: State) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
      >
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <Group header={<Header mode="secondary">Items</Header>}>
                <SimpleCell>
                  <div>
                    <div>
                      <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                      >
                        Increment
                      </button>
                      <span>{count}</span>
                      <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                      >
                        Decrement
                      </button>
                    </div>
                  </div>
                </SimpleCell>
                <SimpleCell>World</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
