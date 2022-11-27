import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    items: [
      {
        id: "m1",
        title: "test",
        description: "This is a first product - amazing!",
        price: 6,
      },
    ],
  },
  reducers: {},
});

export const shopActions = shopSlice.actions;
export default shopSlice;
