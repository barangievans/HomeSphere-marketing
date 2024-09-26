import React, { useState } from 'react';
import axios from 'axios';
import './PostHouse.css'; // Add your styles here

const PostHouse = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [deposit, setDeposit] = useState('');
    const [rent, setRent] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/post-house', {
                title,
                category,
                deposit: parseInt(deposit),
                rent: parseInt(rent),
                landlord_id: 1 // You might get this from the logged-in user's info
            });
            setSuccess(response.data.message);
            setError(null);
            // Reset form
            setTitle('');
            setCategory('');
            setDeposit('');
            setRent('');
        } catch (err) {
            setError(err.response?.data.error || 'Error posting house');
            setSuccess(null);
        }
    };

    return (
        <div className="post-house-container">
            <h2>Post a House for Rent</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>Deposit:</label>
                    <input type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} required />
                </div>
                <div>
                    <label>Rent:</label>
                    <input type="number" value={rent} onChange={(e) => setRent(e.target.value)} required />
                </div>
                <button type="submit">Post House</button>
            </form>
        </div>
    );
};

export default PostHouse;
