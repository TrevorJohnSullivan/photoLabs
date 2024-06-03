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
    handleID
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} openModal={openModal} handlingFavorites={handlingFavorites} favorites={state.favorites} handleID={handleID} topicPhotos={state.topicPhotos}/>
      {state.isModalOpen && <PhotoDetailsModal photo={state.selectedPhoto} closeModal={closeModal} handlingFavorites={handlingFavorites} favorites={state.favorites} />}
    </div>
  );
};

export default App;