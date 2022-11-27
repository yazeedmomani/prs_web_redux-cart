import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const dispatcher = useDispatch();

  const { id, title, quantity, total, price } = props.item;

  const addHandler = function (e) {
    e.preventDefault();

    dispatcher(cartActions.increaseItem({ id: id }));
  };

  const removeHandler = function (e) {
    e.preventDefault();

    dispatcher(cartActions.decreaseItem({ id: id }));
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
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
