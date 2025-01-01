import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) =>{
        e.preventDefault();
        const data = {
            email,
            password
        };
    }

  return (
    <div className='login'>
        <h2>Please Login</h2>
        <form onClick={handleLogin} action="" className='login-content'>
            <input type="email" placeholder='Email Address' 
            name='email' id='email' required 
            onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='Password' 
            name='password' id='password' required 
            onChange={(e)=> setPassword(e.target.value)} />
            {
                message && <p>{message}</p>
            }
            <button type='submit'>Login</button>
        </form>
        <div className="login-bottom">
            <p>Don't have an account? <Link to="/register" className='login-register-link'>Register</Link> here </p>
        </div>
    </div>
  )
}

export default Login