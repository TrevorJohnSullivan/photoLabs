import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {

const { photo, closeModal, handlingFavorites, favorites } = props

const {id, location, urls, user, similar_photos} = photo


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
      <article className="photo-details-modal__images">
        <PhotoFavButton favorites={favorites} handlingFavorites={handlingFavorites} photoId={id} />
        <img className="photo-details-modal__image" src={urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={user.profile} />
          <div className="photo-details-modal__photographer-info"> {user.username}
            <p className="photo-details-modal__photographer-location"> {location.city}, {location.country} </p></div>
        </div>
        <h2 className="photo-details-modal__header">Similar Photos</h2>
        <div className="">
          <PhotoList photos={similar_photos} favorites={favorites} handlingFavorites={handlingFavorites} />
        </div>
      </article>
    </div>
  );
};

export default PhotoDetailsModal;