import { useState} from "react"


function useApplicationData() {
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


  const state = {
    isModalOpen,
    selectedPhoto,
    favorites
  }


  return {
    state,
    openModal,
    closeModal,
    handlingFavorites,
  }
}


export default useApplicationData;