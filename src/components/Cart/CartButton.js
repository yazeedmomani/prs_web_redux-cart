import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartButton = (props) => {
  const dispatcher = useDispatch();

  const clickHandler = function (e) {
    e.preventDefault();

    dispatcher(cartActions.render());
  };

  return (
    <button
      className={classes.button}
      onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
