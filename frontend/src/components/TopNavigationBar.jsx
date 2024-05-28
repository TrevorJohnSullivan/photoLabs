import React from 'react';
import TopicList from './TopicList';
// import FavIcon from './FavIcon';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

// const selected = true

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge />
    </div>
  )
}

export default TopNavigation;