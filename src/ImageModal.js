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
      {/* <img src={image} alt="modal" className="modal-img" /> */}
      <img src={`${process.env.PUBLIC_URL}${image}`} alt="modal" className="modal-img" />
      <button className="modal-btn next" onClick={onNext} title="Next">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ImageModal;