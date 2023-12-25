import {configureStore} from '@reduxjs/toolkit';
import productReducer from './ProductSlice'
import cartReducer from './CartSlice'
import  cartModalActions  from './CartModalSlice';
const store = configureStore({
        reducer : {
            products : productReducer,
            cart : cartReducer,
            modal : cartModalActions,
        }
    })
export default store;