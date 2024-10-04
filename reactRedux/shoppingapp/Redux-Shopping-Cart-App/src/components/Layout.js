import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((element) => {
    total += element.totalPrice;
  });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
      </div>
    </React.Fragment>
  );
};

export default Layout;
