import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";




const TopicList = (props) => {

  const { topics } = props 

  const topicsArr = topics.map(topic => {
    return (
      <TopicListItem
    key={topic.id}
    slug={topic.slug}
    title={topic.title}
      />
    )
    })

  return (
    <div className="top-nav-bar__topic-list">
      {topicsArr}
    </div>
  );
};

export default TopicList;
