import React from 'react'
import'./Comments.scss'
import { Header } from '../Header/Header';
import { NestedComments } from './NestedComments/NestedComments';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import  useFetchComments from '../../hooks/useFetchComments';
import Markdown from 'react-markdown';

export const Comments = ({location}:any) => {
    const { post } = useFetchComments({permalink: window.location.pathname});

    return (
        <div className="app-content" >
            {post && post[0].data?.children.map((item: any, index: number) => 
            <div key={index} > 
                <Header subreddit={item.data.subreddit}/>
                <main>
                    <div>
                        <div className="comment-section">
                            <div className="comments-postcard">
                                <div className="poster-header">
                                    <h3>{item.data.title}</h3>
                                    <small>By {item.data.author}</small>
                                </div>
                                <div>{item.data.selftext && <Markdown source={item.data.selftext} />}
                                </div>
                            </div>
                        </div>
                        
                        <div className="comment-section">
                            <h4>{item.data.num_comments} Comments</h4>
                            {post && post[1].data?.children.map((item: any, index: number) => 
                            <div className="nested-section"> 
                                <div className="nested-postcards">
                                    <NestedComments key={index} item={item.data} />
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
            )}
            <footer className="footer-text">
                &copy; {new Date().getFullYear()} Created by Jenny Miderkvist
            </footer>
        </div>
    )
}



