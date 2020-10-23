import React from 'react'
import './APIPost.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown, faComment, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { convertTimestamp } from "../../helpers/convertTimestamp"
import { checkThumbnailExist } from "../../helpers/checkThumbnailExist"
import { Link } from 'react-router-dom';

interface IOptionToggles {
    post?: any;
  }

export const APIPost = ({ post}: IOptionToggles) => {
    return ( 
        <div>
            {post && post?.data.children.map((item: any, index: number) => 
            <div key={index} className="post-wrapper">
                <div className="post-card">
                    <div className="post-rating">
                        <div className="post-rating-score">
                            <FontAwesomeIcon icon={faSortUp} size="2x"/>
                            <div>{item.data.score}</div>
                            <FontAwesomeIcon icon={faSortDown} size="2x"/>
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="post-content-img">
                        <img  src={checkThumbnailExist(item.data.thumbnail)} alt="Logo" />
                        </div>
                        <div className="post-content-body">
                            <div className="post-container">
                                <div>
                                    <Link to={item.data.permalink}> {item.data.title}</Link>
                                </div>
                                <div className="author-container">
                                    <div>
                                        <small>Posted by {item.data.author}</small>
                                    </div>
                                    <div>
                                        {item.data.stickied === true &&
                                        <FontAwesomeIcon icon={faThumbtack} size="xs"  />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="post-content-icon"> 
                                <FontAwesomeIcon icon={faComment} size="sm"/> {item.data.num_comments} comments
                            </div>
                        </div>
                    </div>
                    <div className="post-content-date">
                        {convertTimestamp(item.data.created)}
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}