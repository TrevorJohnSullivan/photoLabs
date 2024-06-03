import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {

const {id, title, handleID} = props

const handleClickTopic = () => {
  handleID(id)
}

  return (
    <div onClick={handleClickTopic} className="topic-list__item">
    <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
