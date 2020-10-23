import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { APIPost } from './components/APIPost/APIPost';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import  useFetchPost from './hooks/useFetchPost';
import { Button } from "react-bootstrap";

function App(this: any) {
  const [postData, setPostData] = useState<any>();
  const [subredditContent, setSubredditContent] = useState<any>();
  const { post, subreddit } = useFetchPost(postData);

  console.log(post);
  console.log("after: " + post?.data.after);
  console.log("before: "+ post?.data.before);
  
  const changeSubredditContent = () => {
    setPostData({subredditName: subredditContent});
  };

  const changeNumberOfPostsTo5 = () => {
    setPostData({subredditName: subredditContent, limit: 5});
  };

  const changeNumberOfPostsTo10 = () => {
    setPostData({subredditName: subredditContent, limit: 10});
  };

  const changeNumberOfPostsTo25 = () => {
    setPostData({subredditName: subredditContent, limit: 25});
  };
 
  const fetchPostAfter = () => {
    setPostData({subredditName: subredditContent, after: post?.data.after, count: true});
  };

  const fetchPostbefore = () => {
    setPostData({subredditName: subredditContent, before: post?.data.before, count: false});
  };

  return (
    <div className="app-content" >
      <Header subreddit={subreddit}/>
      <main>
        <div className="option-bar">
          <div className="option-buttons"> 
            <div className="option-btn">
              <Button variant='primary' onClick={changeNumberOfPostsTo5}>
                5
              </Button>
            </div>
            <div className="option-btn">
              <Button variant='primary' onClick={changeNumberOfPostsTo10}>
                10
              </Button>
            </div>
            <div className="option-btn">
            <Button variant='primary' onClick={changeNumberOfPostsTo25}>
              25
            </Button>
            </div>
          </div>

          <div className="search-content">
            <div className="search-box">
              <input  placeholder="Search category.." onChange={(e) => setSubredditContent(e.target.value)} />
            </div>
            <div>
              <Button variant='primary' onClick={changeSubredditContent}>
                Search
              </Button>
            </div>
          </div>
        </div>
        
        <APIPost post={post} />

        <div className="app-btn-container">
        {/* {post?.data.pagination && ( */}
          <div className="app-content-btn">
            <div className="content-btn">
              {post?.data.before && (
                <Button variant='primary' onClick={fetchPostbefore}>
                  Previous
                </Button>
              )}
            </div>
            <div className="content-btn">
              {post?.data.after && (
                <Button variant='primary' onClick={fetchPostAfter}>
                  Next
                </Button>
                )}
            </div>
          </div>
          {/* )} */}
        </div>
      </main>

      <footer className="footer-text">
        &copy; {new Date().getFullYear()} Created by Jenny Miderkvist
      </footer>
    </div>
  );
}

export default App;
