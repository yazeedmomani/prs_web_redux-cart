import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    items: [
      {
        id: "m1",
        title: "Headphones",
        description: "Listen to your favourite music with ease",
        price: 6,
      },
      {
        id: "m2",
        title: "Power Bank",
        description: "Keep your phone alive all the time, anywhere",
        price: 18,
      },
    ],
  },
  reducers: {},
});

export const shopActions = shopSlice.actions;
export default shopSlice;
