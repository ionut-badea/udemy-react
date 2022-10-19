import { useContext } from "react";
import CartContext from "../../../context/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = props => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = amount => {
    cartCtx.addItem({
      amount,
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{props.price}</div>
      <MealItemForm addToCart={addToCartHandler} id={props.id} />
    </li>
  );
};

export default MealItem;
