import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'


function Layout() {
  const [username, setUsername] = useState();
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response=>{
        response.json().then(userInfo=>{
            setUsername(userInfo.username);
        });
    });
  },[]);
  return (
    <main>
        <Header un={username}/>
        <Outlet/>
    </main>
  )
}

export default Layout