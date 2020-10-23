import { useEffect, useState } from "react";
import axios from 'axios';

interface IPostData {
  post?: any;
  permalink?: string;
}

interface IConfig {
  permalink: any;
}

const useFetchComments = (config: IConfig): IPostData  => {
  const [post, setPost] = useState<any>();
  const permalink = config?.permalink;

  useEffect(() => {
    function fetchPosts() {
        axios(`https://www.reddit.com${permalink}.json`)
        .then(res => setPost(res.data))
        .catch(error => {
          throw error;
        });
      }
      if (permalink) {
        fetchPosts();
      }
    },
    [permalink]
  );
  return { post };
}

export default useFetchComments;