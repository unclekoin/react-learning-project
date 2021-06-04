import React from "react";
import "./ModalOverlay.css";

const ModalOverlay = (props) => {
  const closeModalWindow = () => props.onModalWindowHandler();

  return <div className="modal-overlay" onClick={ closeModalWindow }></div>
}

export default ModalOverlay;
