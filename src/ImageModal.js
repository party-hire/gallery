
// import React from "react";

// function ImageModal({ image, onClose, onPrev, onNext }) {
//   return (
//     <div className="modal">
//       {/* <button className="close" onClick={onClose}>Close</button>
//       <button className="prev" onClick={onPrev}>Prev</button>
//       <img src={image} alt="modal" className="modal-img" />
//       <button className="next" onClick={onNext}>Next</button> */}

//       <button className="close" onClick={onClose} title="Close">
//         <i className="fas fa-times"></i>
//       </button>
//       <button className="prev" onClick={onPrev} title="Previous">
//         <i className="fas fa-chevron-left"></i>
//       </button>
//       <button className="next" onClick={onNext} title="Next">
//         <i className="fas fa-chevron-right"></i>
//       </button>

//     </div>
//   );
// }

// export default ImageModal;

import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageModal.css';

function ImageModal({ image, onClose, onPrev, onNext }) {
  return (
    <div className="modal">
      <button className="modal-btn close" onClick={onClose} title="Close">
        <FaTimes />
      </button>
      <button className="modal-btn prev" onClick={onPrev} title="Previous">
        <FaChevronLeft />
      </button>
      <img src={image} alt="modal" className="modal-img" />
      <button className="modal-btn next" onClick={onNext} title="Next">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ImageModal;