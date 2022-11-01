import { useContext } from "react";

import useFetch from "../../hooks/use-fetch";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
  const cartCtx = useContext(CartContext);

  const { error, isLoading, sendRequest } = useFetch();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map(item => (
        <CartItem
          amount={item.amount}
          key={item.id}
          name={item.name}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          price={item.price}
        />
      ))}
    </ul>
  );

  const order = () => {
    const config = {
      body: cartCtx.items,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      url: "https://powerful-tree-300811-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    };
    sendRequest(config);
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={order}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
