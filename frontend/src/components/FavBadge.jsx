import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {

  const selected = true;

  return (
    <div className='fav-badge'>
      <FavIcon selected={selected} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;