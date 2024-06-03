import { useReducer, useEffect, useState } from "react";

export const ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

const {OPEN_MODAL, CLOSE_MODAL, TOGGLE_FAVORITE, SET_PHOTO_DATA, SET_TOPIC_DATA, GET_PHOTOS_BY_TOPICS} = ACTIONS


function useApplicationData() {

  const [id, setId] = useState(null)
  const handleID = (topicID) => {
    setId(topicID)
  }

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_PHOTO_DATA, payload: data }))
  }, []);
  
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_TOPIC_DATA, payload: data }))
  }, []);
  
  useEffect(() => {
    fetch(`/api/topics/photos/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: data }))
  }, [id]);
  
  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    favorites: [],
    photoData: [],
    topicData: [], 
    topicPhotos: []
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_PHOTO_DATA:
        return {...state, photoData: action.payload }
      case SET_TOPIC_DATA:
        return {...state, topicData: action.payload } 
      case GET_PHOTOS_BY_TOPICS:
        return {...state, topicPhotos: action.payload }
      case OPEN_MODAL:
        return {
          ...state,
          isModalOpen: true,
          selectedPhoto: action.payload
        };
      case CLOSE_MODAL:
        return {
          ...state,
          isModalOpen: false,
          selectedPhoto: null
        };
      case TOGGLE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.includes(action.payload)
            ? state.favorites.filter(id => id !== action.payload)
            : [...state.favorites, action.payload]
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: OPEN_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const handlingFavorites = (photoId) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photoId });
  };

  return {
    state,
    openModal,
    closeModal,
    handlingFavorites,
    handleID
  };
}

export default useApplicationData;