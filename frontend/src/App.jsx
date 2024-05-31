import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };


  const [favorites, setFavorites] = useState([]);

  const handlingFavorites = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };



  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} handlingFavorites={handlingFavorites} favorites={favorites} />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} closeModal={closeModal} handlingFavorites={handlingFavorites} favorites={favorites} />}
    </div>
  );
};

export default App;