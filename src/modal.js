import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ galleryImage, isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal">
      <div className="modal-content">
        <img src={galleryImage.overlaySrc && galleryImage.overlaySrc} alt="" />
      </div>
    </div>

    <div className="modal-overlay"
      onClick={hide}
      data-dismiss="modal">
      <span
        href="#"
        className="modal-close-button"
      />
    </div>
  </>, document.body
) : null;

export default Modal;