import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Backdrop from "../UI/backdrop";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { Fragment } from "react";
import { cartActions } from "../store/cart-slice";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const isEmpty = useSelector((state) => state.cart.isEmpty);

  const dispatcher = useDispatch();
  const isEmptyDispatcher = useDispatch();
  isEmptyDispatcher(cartActions.isEmpty());

  const clickHandler = function (e) {
    e.preventDefault();
    dispatcher(cartActions.unrender());
  };

  return createPortal(
    <Fragment>
      <Backdrop onClick={clickHandler} />
      <Card className={classes.cart}>
        {isEmpty ? <h2>No items found</h2> : <h2>Your Shopping Cart</h2>}
        <ul>
          {items.map((cur) => (
            <CartItem
              item={{
                id: cur.id,
                title: cur.title,
                quantity: cur.quantity,
                total: cur.total,
                price: cur.price,
              }}
            />
          ))}
        </ul>
      </Card>
    </Fragment>,
    document.querySelector("#cart")
  );
};

export default Cart;
