import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartBadge from "./CartBadge";
import { cartModalActions } from "../Store/CartModalSlice";
import './Header.css'
import Modal from "../Modal/Modal";
import CartPage from "./CartPage";
const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isCartModalVisible = useSelector((state) => state.modal.isVisible);

  const handleCartButtonClick = () => {
    dispatch(cartModalActions.showCartModal());
  };

  return (
    <>
    <header className="header">
      <h1 className="title">ReduxCart</h1>
      <button className="cart-button" onClick={handleCartButtonClick}>
        Cart <CartBadge count={cartItems.length}/>
      </button>
    </header>
    
    <Modal>
    <div className='cart-modal'>
        {isCartModalVisible  && (
       <ul>
         <CartPage/>
         </ul>
      )}

    </div>
    </Modal>
    </>
  );
};

export default Header;

