import { useEffect, useState } from "react";
import axios from 'axios';
import { ISubRedditPost } from "../models/post";

interface IPostData {
  post?: ISubRedditPost;
  subreddit?: string;
  limitFetch?: any;
}

interface IConfig {
  subredditName: any;
  limit: any;
  after: any;
  before: any;
  count?: any;
}

let totalCount = 0;
const useFetchPost = (config: IConfig): IPostData  => {
  const [post, setPost] = useState<ISubRedditPost>();

  const defaultSubreddit = "funny";
  const subreddit = config?.subredditName || defaultSubreddit;

  const defaultLimit = 10;
  const limitFetch = config?.limit || defaultLimit;

  if(config?.count === true){
    totalCount = totalCount + limitFetch;
  }
  else if(config?.count === false){
    totalCount = totalCount - limitFetch;
  }

  useEffect(() => {
      function fetchPosts() {
        axios(`https://www.reddit.com/r/${subreddit}.json?count=${totalCount}&before=${config?.before}&after=${config?.after}&limit=${limitFetch}`)
        .then(res => setPost(res.data))
        .catch(error => {
          throw error;
        });
      }
      if (subreddit) {
        fetchPosts();
      }
    },
    [config, subreddit, limitFetch]
  );

  console.log(post);
  
  return { post, subreddit };
}

export default useFetchPost;