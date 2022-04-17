import React from 'react';
import StoryTemp from '../Story-tamp/StoryTemp';
import { useState, useEffect } from 'react';
import { getStoryIds } from '../Axios/Axios';

const BestStory = () => {
  const [bestStoryId, setBestStoryId] = useState([]);
  
  useEffect(()=>{
    getStoryIds("best").then(res=> setBestStoryId(res));
},[])

  const slicedBestStoryId = bestStoryId.slice(0,30);
  

  return (
      slicedBestStoryId.length==0 ? 
      <p>Loading</p> :
      slicedBestStoryId.map(storyId=><StoryTemp storyId = {storyId}/>)
    )
}

export default BestStory;