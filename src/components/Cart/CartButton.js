import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartButton = (props) => {
  const items = useSelector((state) => state.cart.items);
  const dispatcher = useDispatch();

  const itemsCount = items
    .map((cur) => cur.quantity)
    .reduce((acc, cur) => (acc += cur), 0);

  const clickHandler = function (e) {
    e.preventDefault();

    dispatcher(cartActions.render());
  };

  return (
    <button
      className={classes.button}
      onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default CartButton;
