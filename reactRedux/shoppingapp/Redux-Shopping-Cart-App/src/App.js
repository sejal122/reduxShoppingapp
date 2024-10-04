import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CartItems from "./components/CartItems";
import About from "./components/About";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && <Route path="/" element={<Auth />} />}
        {isLoggedIn && <Route path="/" element={<Layout />} />}
        <Route path="/cartItems" element={<CartItems />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
