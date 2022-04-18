import React from 'react';
import "./StoryTemp.css";
import { useState, useEffect } from 'react';
import { getStory } from '../Axios/Axios';

const StoryTemp = ({storyId}) => {

  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
  }, [])

  return (
    (story.title)
      ?
      <div className='story' key={story.id}>
        <div className='story-title'><a target="_blank" rel="noreferrer" href={story.url}>{story.title} </a></div>
        <div className='story-info'>
          <span><a target="_blank" rel="noreferrer" href={`https://news.ycombinator.com/user?id=${story.by}`}>{story.by}</a></span>&nbsp;|&nbsp;
          <span>
            {new Date(story.time*1000).toLocaleDateString('en-IN', {
              hour: 'numeric',
              minute: 'numeric'
            })}
          </span>&nbsp;|&nbsp;
          <span>
            <a target="_blank" rel="noreferrer" href={`https://news.ycombinator.com/item?id=${story.id}`}>
              {story.kids && story.kids.length > 0 ? story.kids.length : 0} comments
            </a>
          </span>
        </div>
      </div>
      :
      <></>
  )
}

export default StoryTemp;