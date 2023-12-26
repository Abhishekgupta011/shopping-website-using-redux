import {configureStore} from '@reduxjs/toolkit';
import productReducer from './ProductSlice'
import cartReducer from './CartSlice'
import  cartModalReducer from './CartModalSlice';
import notificationReducer from './NotificationSlice'
const store = configureStore({
        reducer : {
            products : productReducer,
            cart : cartReducer,
            modal : cartModalReducer,
            notification : notificationReducer,
        }
    })
export default store;