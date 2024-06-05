import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { favorites, handlingFavorites, photoId } = props;

  const showSelected = (e) => {
    e.stopPropagation(); 
    handlingFavorites(photoId);
  };

  return (
    <div onClick={showSelected} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorites.includes(photoId)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;