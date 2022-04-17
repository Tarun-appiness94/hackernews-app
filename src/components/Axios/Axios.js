import axios from 'axios';

// import { selectFields } from '../selectors/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const result = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`).then(res => res.data);
  return result;
};

export const getStoryIds = async (storyType) => {
  const result = await axios.get(`https://hacker-news.firebaseio.com/v0/${storyType}stories.json`).then(res=>(res.data));

  return result;
};