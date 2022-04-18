import React, { useState, useEffect } from 'react';
import "./TopStory.css";
import StoryTemp from '../Story-tamp/StoryTemp';
import { getStoryIds } from '../Axios/Axios';

const TopStory = () => {
  const [topStoryId, setTopStoryId] = useState([]);

  useEffect(() => {
    getStoryIds("top").then(res => setTopStoryId(res));
  }, [])

  const slicedTopStoryId = topStoryId.slice(0, 30);

  return (

    slicedTopStoryId.length === 0
      ?
      <div className='loader'>
        <p className="loading">Loading...</p>
      </div>
      :
      slicedTopStoryId.map(topStoryId => <StoryTemp key={topStoryId} storyId={topStoryId} />)

  )
}

export default TopStory;