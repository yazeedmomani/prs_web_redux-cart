import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = (props) => {
  const items = useSelector((state) => state.shop.items);

  console.log(items);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((current) => (
          <ProductItem
            id={current.id}
            key={current.id}
            title={current.title}
            price={Number(current.price)}
            description={current.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
