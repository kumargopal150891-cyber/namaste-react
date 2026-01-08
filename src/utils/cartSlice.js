import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem is action and arrow is reducer function

    addItem: (state, action) => {
      // vannilla redux
      // we cannot mutate state
      // we have to retun new state
      // const newState = [...state];
      // newState.items.push(action(payload));
      // return newState;

      // Redux toolkit
      // we have to mutate state
      // we don't have to return
      // uses immer js behind the scene
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      current(state);
      // state.items.length = 0;
      // RTK Either you mutate state or return new state
      // this will also work

      return { items: [] };
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
