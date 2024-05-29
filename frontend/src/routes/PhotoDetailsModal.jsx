import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ photo, similarPhotos, closeModal }) => {
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
      <img className="photo-details-modal__selected-photo" src={photo.urls.regular} alt={photo.alt_description} />
      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

