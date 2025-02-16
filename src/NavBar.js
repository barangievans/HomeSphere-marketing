// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/bookings">Book Houses</Link></li>
                <li><Link to="/my-listings">My Listings</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
