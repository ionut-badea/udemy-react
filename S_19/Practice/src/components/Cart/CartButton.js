import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import classes from "./CartButton.module.css";

const CartButton = props => {
  const dispatch = useDispatch();
  const itemsNumber = useSelector(state => state.cart.items.length);

  const toggle = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsNumber}</span>
    </button>
  );
};

export default CartButton;
