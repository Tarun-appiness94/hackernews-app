import React from 'react'
import StoryTemp from '../Story-tamp/StoryTemp'
import { useState, useEffect } from 'react';
import { getStoryIds } from '../Axios/Axios';

const LatestStory = () => {
  const [newStoryId, setNewStoryId] = useState([]);
  
  useEffect(()=>{
    getStoryIds("new").then(res=> setNewStoryId(res));
},[])

  const slicedNewStoryId = newStoryId.slice(0,30);
  

  return (
      slicedNewStoryId.length==0 ? 
      <p>Loading</p> :
      slicedNewStoryId.map(storyId=><StoryTemp storyId = {storyId}/>)
    )
}

export default LatestStory;