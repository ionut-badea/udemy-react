import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import classes from "./CartItem.module.css";

const CartItem = props => {
  const { price, quantity, title } = props.item;
  const dispatch = useDispatch();

  const total = price * quantity;
  const increase = () => {
    dispatch(cartActions.add(props.item));
  };
  const decrease = () => {
    dispatch(cartActions.remove(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrease}>-</button>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
