import React from 'react'
import'./NestedComments.scss'
import Markdown from 'react-markdown';

export const NestedComments = ({item}:any) => {

    const nestedComments = item.replies?.data?.children && item.replies.data.children.map((comment: any, index: number) => {
    return <NestedComments key={index} item={comment.data}/>
    })

    return (
        <div>
            <a href={'https://www.reddit.com/user/' + item.author}>{item.author}</a>
            <Markdown source={item.body} />
            <div className="nested-comment">
                {nestedComments?.length > 0 && nestedComments }
            </div>
        </div>
    )
}



