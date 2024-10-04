import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div className="cartIcon">
      <div></div>
      <Link to="/cartItems">
        {" "}
        <Badge onClick={showCart} badgeContent={quantity} color="primary">
          <ShoppingCartIcon id="carticon" fontSize="large" />
        </Badge>
      </Link>
    </div>
  );
};

export default Cart;
