import { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar'; 
import PhotoList from 'components/PhotoList'; 
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, openModal, handlingFavorites, favorites } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} />
      <PhotoList photos={photos} favorites={favorites} handlingFavorites={handlingFavorites} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;

