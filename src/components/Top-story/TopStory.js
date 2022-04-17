import React, { useState, useEffect } from 'react';
import StoryTemp from '../Story-tamp/StoryTemp';
import axios from 'axios';
import { getStoryIds } from '../Axios/Axios';

const TopStory = () => {
  const [topStoryId, setTopStoryId] = useState([]);
  
  useEffect(()=>{
  //   // alert("hi");
  //   const getTopStoriesID= async () => {
  //     const result = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json").then(res=>(res.data));
  //     return result;
  // }
  // getTopStoriesID().then(res => setTopStoryId(res));

    getStoryIds("top").then(res=> setTopStoryId(res));
},[])


  const slicedTopStoryId = topStoryId.slice(0,30);
  // console.log(slicedData);

  // slicedData.map(storyId=>{<StoryTemp storyId = {storyId}/>})


  return (
      // slicedTopStoryId.length==0 ? 
      // <p>Loading</p> :
      slicedTopStoryId.map(storyId=><StoryTemp storyId = {storyId}/>)

    

    

    
    )
}
export default TopStory;