import Consumo from "./components/Consumo";
import Container from "./components/Container";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { menuItems } from "./data";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem, removeItem, order, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <Header />
      <Container>
        <Menu data={menuItems} addItem={addItem} />
        <Consumo
          order={order}
          removeItem={removeItem}
          tip={tip}
          setTip={setTip}
          placeOrder={placeOrder}
        />
      </Container>
    </>
  );
}

export default App;
