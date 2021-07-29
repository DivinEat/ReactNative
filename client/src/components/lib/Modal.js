import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Modal.css";

function Modal({ title, open, onClose, children }) {
  const { theme } = useContext(ThemeContext);
  const styleModal = {
    backgroundColor: theme === "dark" ? "black" : "white",
    borderColor: theme === "dark" ? "white" : "black",
    color: theme === "dark" ? "white" : "black",
  };

  return (
    open && (
      <>
        <div className="overlay" onClick={onClose} />
        <div className="modal" style={styleModal}>
          <span className="modal-title">
            <h2>{title}</h2>
            <button onClick={onClose}> Close </button>
          </span>
          <div className="modal-content">{children}</div>
        </div>
      </>
    )
  );
}

export default Modal;
