import { useReducer } from "react";

// Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: []
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null
      };
    case 'TOGGLE_FAVORITE':
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

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: 'OPEN_MODAL', payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handlingFavorites = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };

  return {
    state,
    openModal,
    closeModal,
    handlingFavorites,
  };
}

export default useApplicationData;