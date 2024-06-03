import React from 'react';
import TopNavigation from 'components/TopNavigationBar'; 
import PhotoList from 'components/PhotoList'; 
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, openModal, handlingFavorites, favorites, handleID, topicPhotos} = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} handleID={handleID} />
      {topicPhotos !== null ? <PhotoList photos={topicPhotos} favorites={favorites} handlingFavorites={handlingFavorites} openModal={openModal} /> : <PhotoList photos={photos} favorites={favorites} handlingFavorites={handlingFavorites} openModal={openModal} />}
    </div>
  );
};

export default HomeRoute;

