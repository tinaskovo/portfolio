import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ galleryImage, isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
   <div className="modal-overlay"
      onClick={hide}
      data-dismiss="modal-content">
      <div className="modal-content">
        <div className="modal-text">
          <h1>{galleryImage.header}</h1>
          <p>{galleryImage.overlayText}</p>
          
        </div>
        <div className="modal-images">
        <div className="image-wrapper">
          <img src={galleryImage.overlay && galleryImage.overlay.img} alt="" className={galleryImage.overlay.class}/>
        </div>
        {
          galleryImage.overlay2  && (
            <div className="image-wrapper">
              <img src={galleryImage.overlay2 && galleryImage.overlay2.img} alt="" className={galleryImage.overlay2 && galleryImage.overlay2.class}/>
              { galleryImage.overlay3 && (
                <img src={galleryImage.overlay3.img} alt="" className={galleryImage.overlay3 && galleryImage.overlay3.class}/>
              )             
              }
            </div>
          )
        }
        {
          galleryImage.overlay4 && (
            <div className="image-wrapper">
              <img src={galleryImage.overlay4 && galleryImage.overlay4.img} alt="" className={galleryImage.overlay4 && galleryImage.overlay4.class}/>
              <img src={galleryImage.overlay5 && galleryImage.overlay5.img} alt="" className={ galleryImage.overlay5 && galleryImage.overlay5.class}/>
            </div>
          )
        }
        </div>
      </div>
      <span
        href="#"
        className="modal-close-button"
      />
    </div>
  </>, document.body
) : null;

export default Modal;