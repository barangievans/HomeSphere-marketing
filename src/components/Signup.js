// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Assuming you have CSS for styling

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://your-backend-url/api/signup', {
                username,
                password,
            });
            console.log('User created successfully:', response.data);
            // Handle successful signup (e.g., redirect or show a success message)
        } catch (err) {
            console.error('Error creating user:', err);
            setError('Error creating user. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default Signup;
