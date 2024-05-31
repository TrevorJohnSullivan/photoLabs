import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {


  const {
    state,
    openModal,
    closeModal,
    handlingFavorites,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} handlingFavorites={handlingFavorites} favorites={state.favorites} />
      {state.isModalOpen && <PhotoDetailsModal photo={state.selectedPhoto} closeModal={closeModal} handlingFavorites={handlingFavorites} favorites={state.favorites} />}
    </div>
  );
};

export default App;