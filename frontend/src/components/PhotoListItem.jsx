import React from "react";
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {

const { sampleDataForPhotoListItem } = props

  return (
    <article className="item">
      <img src={sampleDataForPhotoListItem.imageSource} />
      <img src={sampleDataForPhotoListItem.profile} />
      <p>{sampleDataForPhotoListItem.username}</p>
      <span>{sampleDataForPhotoListItem.location.city}</span>
      {" "}
      <span>{sampleDataForPhotoListItem.location.country}</span>
    </article>
  );
};

export default PhotoListItem;
