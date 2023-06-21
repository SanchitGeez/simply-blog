import React from 'react'
import {format} from 'date-fns'
import { Link } from 'react-router-dom'


function Post({title,summary,cover,content,createdAt,author,_id}) {
  return (
    <div className="post">
      <Link to={'/post/' + _id}>
        <div className='image'>
          <img src={'http://localhost:4000/'+ cover} alt="post"/>
        </div>
      </Link>
        
        
        <div className='texts'>
        <Link to={'/post/' + _id}>
          <h2>{title}</h2>
        </Link>
          
          <p className="info">
            <a href='/' className="author">{author.username}</a>
            <time>{format((new Date(createdAt)), 'd MMM, yyyy -HH:mm')}</time>
          </p>
          <p className='summary'>{summary}</p>
        </div>
        
         
      </div>
  )
}

export default Post