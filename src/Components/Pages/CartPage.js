import React from "react";
import { useSelector } from "react-redux";
import './CartPage.css';
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
