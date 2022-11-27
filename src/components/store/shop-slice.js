import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    items: [
      {
        id: "m1",
        title: "Redux Headphones",
        description: "Listen to your favourite music with ease",
        price: 6,
      },
      {
        id: "m2",
        title: "Redux Bank",
        description: "Keep your phone alive all the time, anywhere",
        price: 18,
      },
      {
        id: "m3",
        title: "Redux Case",
        description: "Don't worry about breaking your phone ever again",
        price: 5,
      },
      {
        id: "m4",
        title: "Redux Wallet",
        description: "Track your wallet with our built in wallet GPS",
        price: 35,
      },
    ],
  },
  reducers: {},
});

export const shopActions = shopSlice.actions;
export default shopSlice;
