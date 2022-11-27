import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      // action.payload = one item object
      state.items.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
