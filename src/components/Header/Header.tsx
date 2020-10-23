import React from 'react'
import'./Header.scss'
import { Link } from 'react-router-dom';

export const Header = ({subreddit}:{subreddit?: any}) => {
    return (
        <header className="main-header">
            <div className="main-header-title">
                <Link to={'/r/' + subreddit}> 
                    <h1>Reddit clone</h1>
                </Link>
            </div>
            <div className="main-header-options">
                <h4>/r/{subreddit}</h4>
            </div>
        </header>
    )
}



