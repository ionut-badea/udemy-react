import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { actions } from "./store/cart";

let init = true;

function App() {
  const isCartDisplayed = useSelector(state => state.cart.isDisplayed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (init) {
      init = false;
      dispatch(actions.getCart());
    }
  }, [init]);

  return (
    <Layout>
      {isCartDisplayed && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
