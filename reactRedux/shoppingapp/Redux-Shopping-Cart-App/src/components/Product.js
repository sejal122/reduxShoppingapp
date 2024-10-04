import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const Product = ({ name, id, imgURL, price, category, description }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemsList);
  const addToCart = () => {
    dispatch(
      cartActions.addtocart({
        name,
        id,
        price,
      })
    );
  };
  const theme = useTheme();
  return (
    <div className="card">
      <Card sx={{ border: "none", boxShadow: "none" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 320,
            justifyContent: "space-around",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              sx={{ textAlign: "center", color: "#342d71" }}
              component="div"
              variant="h5"
            >
              {name}
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: 151, borderRadius: 4 }}
              image={imgURL}
              alt="Live from space album cover"
            />

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {category}
            </Typography>
            <div className="description">{description}</div>
          </CardContent>
          <div className="priceTag">
            <b sx={{ color: "#0b7fab" }}>₹ {price}</b>
          </div>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <button onClick={addToCart}>Add to cart</button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default Product;
