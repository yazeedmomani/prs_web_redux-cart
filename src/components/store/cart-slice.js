import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isRendered: false,
    isEmpty: true,
  },
  reducers: {
    addToCart(state, action) {
      // action.payload = one item object
      if (state.items.find((cur) => cur.id === action.payload.id)) {
        const item = state.items.filter((cur) => cur.id === action.payload.id);
        const itemIndex = state.items.indexOf(...item);
        state.items[itemIndex].quantity++;
        state.items[itemIndex].total += state.items[itemIndex].price;
      } else {
        const newItem = {
          title: action.payload.title,
          price: action.payload.price,
          id: action.payload.id,
          quantity: 1,
          total: action.payload.price,
        };
        state.items.push(newItem);
      }
    },

    increaseItem(state, action) {
      const item = state.items.filter((cur) => cur.id === action.payload.id);
      const itemIndex = state.items.indexOf(...item);
      state.items[itemIndex].quantity++;
      state.items[itemIndex].total += state.items[itemIndex].price;
    },

    decreaseItem(state, action) {
      const item = state.items.filter((cur) => cur.id === action.payload.id);
      const itemIndex = state.items.indexOf(...item);
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity--;
        state.items[itemIndex].total -= state.items[itemIndex].price;
      } else {
        state.items = state.items.filter((_, i) => i !== itemIndex);
      }
    },

    render(state) {
      state.isRendered = true;
    },

    unrender(state) {
      state.isRendered = false;
    },

    isEmpty(state) {
      if (state.items.length === 0) {
        state.isEmpty = true;
      } else {
        state.isEmpty = false;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
