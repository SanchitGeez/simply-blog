import React, { useState } from 'react'

function RegisterPage() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  
  async function register(ev) {
    ev.preventDefault();

    const response =await fetch('http://localhost:4000/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'}
    })

    if(response.status===200){
      alert('Regiteration Successfull, Login to Create your first blog.');

    }
    else{
      alert('Registeration Failed. Try again');
    }

  }

  return (
        <form onSubmit={register} className='register'>
            <h1>REGISTER</h1>
            <input style={{padding: "10px",border:"solid 2px #dd4343",borderRadius:"0px",margin:"15px 0px"}} type="text" placeholder='Username' value={username} onChange={ev=>setUsername(ev.target.value)}/>
            <input style={{padding: "10px",border:"solid 2px #dd4343",borderRadius:"0px",margin:"15px 0px"}} type="password" placeholder='Password'value={password} onChange={ev=>setPassword(ev.target.value)}/>
            <button style={{padding: "10px",borderRadius:"0px",margin:"15px auto", width:"50%",}} type="submit">REGISTER</button>
        </form>
  )
}

export default RegisterPage