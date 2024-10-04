import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartitems = useSelector((state) => state.cart.itemsList);
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((element) => {
    total += element.totalPrice;
  });
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="total"> Total: ₹ {total}</div>
      <br />
      <div className="cartitems">
        <ul>
          {cartitems
            ? cartitems.map((item) => {
                return (
                  <li key={item.id}>
                    {" "}
                    <CartItem
                      quantity={item.quantity}
                      id={item.id}
                      total={item.totalPrice}
                      price={item.price}
                      name={item.name}
                    />
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
      {cartitems.length === 0 ? (
        <h1>Empty cart</h1>
      ) : (
        <div>
          <button className="placeOrderBtn">Place order</button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
