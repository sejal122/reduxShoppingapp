import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import productsSlice from "./products-slice";

const store =configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
        products:productsSlice.reducer
    }
})
export default store;