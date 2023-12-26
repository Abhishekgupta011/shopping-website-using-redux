import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "./NotificationSlice";

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
    setCart(state, action) {
        state.items = action.payload.items;
        state.totalAmount = action.payload.totalAmount;
      },
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
export const sentCartData = (cart)=>{
  return async (dispatch)=>{
    dispatch(notificationActions.showNotification({
      status : 'Pending',
      title : 'Sending...',
      message : 'Sending cart data request',
    }))
    const sendRequest = async()=>{
      const response = await fetch('https://shopping-cart-19d62-default-rtdb.firebaseio.com/cart.json',{
      method : 'PUT',
      body : JSON.stringify(cart)
    })
    if(!response.ok){
      throw new Error("sending request data failed")
    } 
    }
    try{
      await sendRequest();
      dispatch(notificationActions.showNotification({
        status : 'Success',
        title : 'Success!',
        message : 'Sent cart data successful',
      }))
    } catch (error){
      dispatch(notificationActions.showNotification({
        status : 'Error',
        title : 'Error!',
        message : 'Sending cart data failed',
    }))
    console.error('Something went wrong' , error)
    }
    
  }
}
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
