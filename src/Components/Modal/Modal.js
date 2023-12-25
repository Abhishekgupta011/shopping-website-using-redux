import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { useDispatch, useSelector } from "react-redux";
import { cartModalActions } from "../Store/CartModalSlice";

const Backdrop = () => {
  const dispatch = useDispatch();

  const backDropCloseHandle = () => {
    dispatch(cartModalActions.hideCartModal());
  };

  return <div className="backdrop" onClick={backDropCloseHandle} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  const isVisible = useSelector((state) => state.modal.isVisible);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        isVisible && <Backdrop />,
        portalElement
      )}
      {ReactDOM.createPortal(
        isVisible && <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
