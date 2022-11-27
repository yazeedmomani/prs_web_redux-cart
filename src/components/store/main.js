import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shop-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
