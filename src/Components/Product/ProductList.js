import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../Store/ProductSlice";
import { cartActions } from "../Store/CartSlice";
import './ProductList.css';

const ProductList = (props) =>{
    const product  = useSelector((state)=>state.products.ProductArray)
    const dispatch = useDispatch();
    

  useEffect(() => {
    // Dispatch the initialProduct action when the component mounts
    dispatch(productActions.initialProduct());
  }, [dispatch]);

 const addToCartHandler = (product) => {
    dispatch(cartActions.addToCart(product));
  };
    return(
        <main className="List">
            <ul>
                {product.map((product)=>(
                   
                        <li key={product.id}>
                         <span>{product.name}</span>
                         <span>${product.price}.00</span>
                         <span>{product.description}</span>
                         <button onClick={()=> addToCartHandler(product)}>Add To Cart</button>
                        </li>
                ))}
            </ul>
        </main>
    )
}

export default ProductList;