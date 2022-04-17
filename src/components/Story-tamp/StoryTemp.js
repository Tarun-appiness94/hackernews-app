import React from 'react';
import "./StoryTemp.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getStory } from '../Axios/Axios';
import { Link } from 'react-router-dom';


const StoryTemp = ({storyId}) => {

  const [story, setStory] = useState([]);

  useEffect(()=>{
    // const topArray = []
    // const x = slicedData.map(id => {
    //   const getTopStory = async () => {
    //     const result = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res=>res.data);
    //     return result;
    // }
    // return(getTopStory().then(res=>(res)));
    // })
    getStory(storyId).then(data=> data && data.url && setStory(data));



  },[])






// const gettime = (timestamp) => gettime(timestamp);



  
  return (
    (story.title) ? 
    // <div className='loader'>
    //   <p className="loading">Lo...</p>
    // </div>
   
    <div className='story' key={story.id}>
      <div className='story-title'><a target="_black" href={story.url}>{story.title} </a></div>
      <div className='story-info'>
      <span><a target="_blank" href={`https://news.ycombinator.com/user?id=${story.by}`}>{story.by}</a></span>&nbsp;|&nbsp;
      <span>
          {new Date(story.time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
      </span>&nbsp;|&nbsp;
      <span>
          <a target="_blank" href={`https://news.ycombinator.com/item?id=${story.id}`}> 
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