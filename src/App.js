import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const isShown = useSelector((state) => state.cart.isRendered);

  return (
    <Layout>
      {isShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
