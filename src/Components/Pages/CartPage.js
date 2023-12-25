import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './CartPage.css';
import { cartActions } from "../Store/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const showTotalAmount = useSelector((state) => state.cart.totalAmount)
  const increaseQuantityHandler = (itemId) => {
    dispatch(cartActions.increaseQuantity(itemId));
  };

  const decreaseQuantityHandler = (itemId) => {
    dispatch(cartActions.decreaseQuantity(itemId));
  };

  return (
    <div className="CartPage">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>
              <strong>${item.price}</strong>
              <strong>{item.description}</strong>
              <strong>X {item.quantity}</strong>
              <button onClick={() => increaseQuantityHandler(item.id)}>+</button>
              <button onClick={() => decreaseQuantityHandler(item.id)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <div>Total Amount : {showTotalAmount}</div>
    </div>
  );
};

export default CartPage;
