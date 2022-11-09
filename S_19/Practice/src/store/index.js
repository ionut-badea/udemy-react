import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import product from "./product";

const store = configureStore({
  reducer: { cart, product },
});

export default store;
