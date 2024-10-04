import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removefromcart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addtocart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2 style={{width:'400px'}}> {name}</h2>
      <p>₹ {price} /-</p>
      <p>x {quantity}</p>
      <article>Total : ₹ {total}</article>
      <div>
        <button className="cart-actions" onClick={removeHandler}>
          -
        </button>
        <button className="cart-actions" onClick={addHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
