import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ProductItem = (props) => {
  const dispatcher = useDispatch();

  const { title, price, description } = props;

  const clickHandler = function (e) {
    e.preventDefault();

    dispatcher(
      cartActions.addToCart({
        price,
        title,
        id: props.id,
      })
    );
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
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
