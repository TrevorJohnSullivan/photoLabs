import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {

  const { photos, handlingFavorites, favorites } = props

  const items = photos.map(item => {
    return (
      <PhotoListItem
        key={item.id}
        imageSource={item.urls.regular}
        profile={item.user.profile}
        name={item.user.name}
        city={item.location.city}
        country={item.location.country}
        favorites={favorites} 
        handlingFavorites={handlingFavorites}
        photoId={item.id}
      />
    );
  });


  return (
    <ul className="photo-list">
      {items}
    </ul>
  );
};


export default PhotoList;
