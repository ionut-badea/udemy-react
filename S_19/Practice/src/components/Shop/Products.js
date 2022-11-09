import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = props => {
  const items = useSelector(state => state.product.items);
  const products = items.map(item => (
    <ProductItem
      description={item.description}
      id={item.id}
      key={item.id}
      price={item.price}
      title={item.title}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
