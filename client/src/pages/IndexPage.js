import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const response = fetch('https://simply-blog-backend.vercel.app/post').then(response=>{
      response.json().then(posts=>{

        setPosts(posts);

      });
    });
  },[]);


  return (
    <>
      {/* {posts.length > 0 && posts.map(post =>{
        <Post/>
      })} */}
      {
        posts.map((post) => (
          <Post {...post}/>
        ))
      }
      {/* <Post/> */}
    </>
  )
}

export default IndexPage