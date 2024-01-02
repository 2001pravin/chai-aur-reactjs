import React, { useContext, useState } from 'react'
import UserContext from '../Context/userContext'

function Login() {
    const [username, setUsername]= useState('')
    const [pasword,setPassword]= useState('')
    const {setUser}= useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, pasword})
    }

    return (
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder='username'/>
            <input type='text'
             value={pasword}
             onChange={(e)=> setPassword(e.target.value)} 
            placeholder='pasword'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
