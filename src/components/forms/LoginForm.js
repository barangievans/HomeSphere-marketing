// src/components/forms/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', { username, password });
            alert('Login successful!');
            // Handle successful login (e.g., save token, redirect)
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
