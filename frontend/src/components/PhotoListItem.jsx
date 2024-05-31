import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photo, imageSource, profile, name, city, country, handlingFavorites, favorites, openModal } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    openModal(photo);
  };

  return (
    <article className="photo-list__item" onClick={handleClick}>
      <PhotoFavButton favorites={favorites} handlingFavorites={handlingFavorites} photoId={photo.id} />
      <img className="photo-list__image" src={imageSource} alt={name} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={name} />
        <div>
          <p className="photo-list__user-info">{name}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;