import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure you create a corresponding CSS file for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>HomeSphere</h1>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/book-houses">Book Houses</Link>
                </li>
                <li>
                    <Link to="/my-listings">My Listings</Link>
                </li>
                <li>
                    <Link to="/post-house">Post House</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
