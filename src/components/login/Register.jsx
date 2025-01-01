import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) =>{
        e.preventDefault();
        const data = {
            username,
            email,
            password
        };
        console.log(data);
    }
  return (
    <div className='login'>
        <h2>Please Register</h2>
        <form onClick={handleLogin} action="" className='login-content'>
            <input type="username" placeholder='Username' 
            name='username' id='username' required 
            onChange={(e)=> setUsername(e.target.value)} />
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
            <p>Already have an account? Please <Link to="/login" className='login-register-link'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register