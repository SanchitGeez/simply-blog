import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header(props) {
  const [username,setUsername]=useState(props.un);
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response=>{
        response.json().then(userInfo=>{
            setUsername(userInfo.username);
        });
    });
  },[]);

  //invalidate dookie
  function logout(ev) {
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST'
    });
    setUsername(null);
  }

  return (
    <header>
        <Link to="/" className="logo">SimplyBlog</Link>
        <nav>
          {username && (
            <>
              <Link to='/create'>Create new post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          
        </nav>
      </header>
  )
}

export default Header