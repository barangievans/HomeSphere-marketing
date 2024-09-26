// src/components/BookHouses.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bookings.css';

const BookHouses = () => {
    const [houses, setHouses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/houses'); // Adjust the URL as needed
                setHouses(response.data);
            } catch (error) {
                setError('Could not load houses.');
                console.error(error);
            }
        };

        fetchHouses();
    }, []);

    const handleBookNow = async (houseId) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/book/${houseId}`);
            alert(`Successfully booked house with ID: ${houseId}`);
            // Optionally refresh the list of houses or handle state changes here
        } catch (error) {
            alert('Error booking house: ' + error.message);
        }
    };

    return (
        <div className="bookings-container">
            <h2>Available Houses for Booking</h2>
            {error && <p>{error}</p>}
            <ul>
                {houses.map((house) => (
                    <li key={house.id}>
                        <h3>{house.name}</h3>
                        <p>Bedrooms: {house.bedrooms}</p>
                        <p>Rent: Ksh {house.rent}/month</p>
                        <p>Deposit: Ksh {house.deposit}</p>
                        <button onClick={() => handleBookNow(house.id)}>Book Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookHouses;
