import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  if (!photo) return null;

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      {/* Add photo details here */}
    </div>
  );
};

export default PhotoDetailsModal;
