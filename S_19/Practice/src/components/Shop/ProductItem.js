import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = props => {
  const { description, id, price, title } = props;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.add({ description, id, price, quantity: 1, title }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
