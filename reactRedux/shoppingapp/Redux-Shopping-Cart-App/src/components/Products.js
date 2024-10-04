import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { fetchProducts } from "../store/products-slice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Products = () => {
  const products = useSelector((state) => state);

  useEffect(() => {
    fetchProducts();
  }, []);
  if (products.products.dataLoaded === false) {
    return (
      <div>
        {" "}
        <h1 className="loadingIcon">...</h1>{" "}
        <Box sx={{ display: "flex" }}>
          <CircularProgress className="loadingIcon" />{" "}
        </Box>
      </div>
    );
  }
  return (
    <div>
      <ul className="products-container">
        {products.products.productList &&
          products.products.productList.map((product) => {
          })}
        {products.products.productList &&
          products.products.productList.map((product) => {
            return (
              <Product
                id={product.id}
                name={product.title}
                imgURL={product.image}
                price={product.price}
                category={product.category.name}
                description={product.description}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Products;
