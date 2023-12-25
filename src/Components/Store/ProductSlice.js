import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name : 'product',
    initialState : {
        ProductArray : []
    },
    reducers : {
        initialProduct(state){
            state.ProductArray = [
                {
                  id: 1,
                  name: 'Product 1',
                  price: 6,
                  description: 'This is our first product',
                },
                {
                  id: 2,
                  name: 'Product 2',
                  price: 10,
                  description: 'This is our second product',
                },
                {
                  id: 3,
                  name: 'Product 3',
                  price: 23,
                  description: 'This is our third product',
                },
              ];
        }
    },
});

export const productActions = ProductSlice.actions;
export default ProductSlice.reducer;