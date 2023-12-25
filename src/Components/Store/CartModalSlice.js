import { createSlice } from "@reduxjs/toolkit";

const cartModalSlice = createSlice({
  name: "cartModal",
  initialState: {
    isVisible: false,
  },
  reducers: {
    showCartModal: (state) => {
      state.isVisible = true;
    },
    hideCartModal: (state) => {
      state.isVisible = false;
    },
    toggleCartModal: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const cartModalActions = cartModalSlice.actions;
export default cartModalSlice.reducer;
