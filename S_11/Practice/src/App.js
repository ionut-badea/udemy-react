import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./context/CartProvider";

function App() {
  const [cart, setCart] = useState(false);

  const showCart = () => setCart(true);
  const hideCart = () => setCart(false);

  return (
    <CartProvider>
      {cart && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
