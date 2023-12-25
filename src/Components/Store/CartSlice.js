import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
