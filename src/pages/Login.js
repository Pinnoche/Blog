import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';

function Login() {
    const navigate = useNavigate();
    const { dispatch } = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/user/login', {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json();
        if(!response.ok) {
            throw Error(json.error)
        }

        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: "LOGIN", payload:json})
            navigate('/');
        }
    }
  return (
    <form className='login' onSubmit={handleSubmit} >
        <h3>Login</h3>

        <label>Email:</label>
        <input
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
        />

        <label>Password:</label>
        <input
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
        />
        <button>Login</button>
    </form>
  )
}

export default Login
