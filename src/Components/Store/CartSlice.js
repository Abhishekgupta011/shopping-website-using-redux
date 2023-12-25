import { createSlice } from "@reduxjs/toolkit";

const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount : 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If item already exists, increase the quantity
        existingItem.quantity++;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    increaseQuantity(state, action) {
        const itemId = action.payload;
        const itemToIncrease = state.items.find((item) => item.id === itemId);
        if (itemToIncrease) {
          itemToIncrease.quantity++;
        }
        state.totalAmount = calculateTotalAmount(state.items);
      },
      decreaseQuantity(state, action) {
        const itemId = action.payload;
        const itemToDecrease = state.items.find((item) => item.id === itemId);
        if (itemToDecrease) {
          itemToDecrease.quantity--;
          if (itemToDecrease.quantity === 0) {
            state.items = state.items.filter((item) => item.id !== itemId);
          }
          state.totalAmount = calculateTotalAmount(state.items);
        }
    },

},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
