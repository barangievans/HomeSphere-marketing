import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bookings.css';

const Bookings = () => {
    const [houses, setHouses] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/listings');
                setHouses(response.data);
            } catch (err) {
                console.error("Error fetching houses:", err);
                setError("Could not load houses.");
            } finally {
                setLoading(false);
            }
        };

        fetchHouses();
    }, []);

    const handleBookNow = async (houseId) => {
        console.log("Booking house with ID:", houseId);
        try {
            const response = await axios.post(`http://localhost:5000/api/book/${houseId}`);
            alert(response.data.message);
        } catch (error) {
            console.error("Error booking the house:", error);
            alert("Error booking the house: " + error.response?.data?.error || error.message);
        }
    };

    const categorizeHouses = (houses) => {
        return houses.reduce((acc, house) => {
            const category = house.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(house);
            return acc;
        }, {});
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const categorizedHouses = categorizeHouses(houses);

    return (
        <div className="bookings-container">
            <h2>Available Houses</h2>
            {Object.keys(categorizedHouses).map((category) => (
                <div key={category} className="category">
                    <h3>{category}</h3>
                    <ul className="houses-list">
                        {categorizedHouses[category].map(house => (
                            <li key={house.id} className="house-item">
                                <h4>{house.title}</h4>
                                <p>Deposit: Ksh {house.deposit}</p>
                                <p>Monthly Rent: Ksh {house.rent}</p>
                                <button onClick={() => handleBookNow(house.id)}>Book Now</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Bookings;
