import React, { useState } from 'react'

function RegisterPage() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  
  async function register(ev) {
    ev.preventDefault();
    await fetch('http://localhost:4000/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'}
    })
  }

  return (
        <form onSubmit={register} className='register'>
            <h1>REGISTER</h1>
            <input type="text" placeholder='Username' value={username} onChange={ev=>setUsername(ev.target.value)}/>
            <input type="password" placeholder='Password'value={password} onChange={ev=>setPassword(ev.target.value)}/>
            <button type="submit">REGISTER</button>
        </form>
  )
}

export default RegisterPage