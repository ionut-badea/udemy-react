import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
  const [btnAnimation, setBtnAnimation] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const itemNumber = items.reduce((curr, item) => curr + item.amount, 0);

  useEffect(() => {
    if (items.length > 0) {
      setBtnAnimation(true);
    }
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);

  const btnClasses = `${classes.button} ${btnAnimation && classes.bump}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{itemNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
