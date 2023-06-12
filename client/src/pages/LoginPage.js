import React from 'react'
import { useState } from 'react';
import {Navigate} from 'react-router-dom';

function LoginPage() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [redirect,setRedirect]=useState('');
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
      credentials:'include',//saving cookie
    })
    if(response.ok){
      setRedirect(true);
    }else{
      alert("Wrong Credentials");
    }
  }

  if(redirect){
    return <Navigate to={'/'} />
  }


  return (
        <form onSubmit={login} className='login'>
          <h1>LOGIN</h1>
          <input type="text" placeholder='Username' value={username} onChange={ev=>setUsername(ev.target.value)}/>
          <input type="password" placeholder='Password' value={password} onChange={ev=>setPassword(ev.target.value)}/>
          <button type="submit">LOGIN</button>
        </form>

  )
}

export default LoginPage