// src/components/MyListings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyListings.css'; // Assuming you have CSS for styling

const MyListings = () => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState('');

    const fetchListings = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/listings');
            setListings(response.data);
        } catch (err) {
            console.error('Error fetching listings:', err);
            setError('Error fetching listings. Please try again later.');
        }
    };

    useEffect(() => {
        fetchListings();
    }, []);

    return (
        <div className="my-listings">
            <h2>My Listings</h2>
            {error && <p className="error-message">{error}</p>}
            <ul>
                {listings.map((listing) => (
                    <li key={listing.id}>{listing.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyListings;
