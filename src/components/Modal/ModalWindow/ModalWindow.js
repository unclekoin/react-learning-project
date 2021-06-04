import React from "react";
import "./ModalWindow.css";

const ModalWindow = (props) => {
  const closeModalWindow = () => props.onModalWindowHandler();
  return (
    <div className="modal-window">
      <div className="modal-window__header">
        <h2>Notice</h2>
        <span onClick={ closeModalWindow }>&times;</span>
      </div>
        <p>{ props.msg }</p>
    </div>
  )
}

export default ModalWindow;
