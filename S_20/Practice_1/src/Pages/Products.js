import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Another Book</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
