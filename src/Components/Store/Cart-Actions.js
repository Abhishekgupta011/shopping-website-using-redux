import { cartActions } from "./CartSlice"
import { notificationActions } from "./NotificationSlice"

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
  
  export const fetchData = () => {
  return async (dispatch) => {
    console.log("Fetching data...");
    
    try {
      const response = await fetch("https://shopping-cart-19d62-default-rtdb.firebaseio.com/cart.json");
      const data = await response.json();

      if (response.ok && data.items && data.items.length > 0) {
        console.log("Data items exist");
        dispatch(cartActions.setCart(data));
      } else {
        console.log("Data items do not exist or are empty");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
}
