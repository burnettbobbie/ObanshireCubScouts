import React from "react";

const Modal = ({ image, onClose, onPrev, onNext }) => {
  const { src, title, description } = image;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    onClose(); // Call the onClose function passed as a prop to close the modal
  };

  return (
    <div className="modal-overlay fade-in" onClick={onClose}>
      <div className="modal-content slide-up" onClick={handleModalClick}>
        <img src={src} alt={title} className="modal-image" />
        <div className="modal-details">
          <h3 className="modal-title">{title}</h3>
          <p className="modal-description">{description}</p>
        </div>
        <button   className="modal-close"
          onClick={handleCloseClick}>
        &times;
        </button>
        <div className="modal-navigation">
          <button className="modal-button" onClick={onPrev}>
            Prev
          </button>
          <button className="modal-button" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
