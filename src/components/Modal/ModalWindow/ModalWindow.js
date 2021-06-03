import React from "react";
import "./ModalWindow.css";

const ModalWindow = () => {
  return (
    <div className="modal-window">
      <div className="modal-window__header">
        <h2>Notice</h2>
        <span>&times;</span>
      </div>
        <p>Age must be a positive number or less 100!</p>
    </div>
  )
}

export default ModalWindow;
