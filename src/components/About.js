// src/components/About.js
import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>About HomeSphere</h1>
            <p>
                Welcome to <strong>HomeSphere</strong>, your one-stop platform for discovering and booking the best residential properties!
            </p>
            <p>
                Whether you're a tenant searching for your dream home or a landlord looking to advertise your property, HomeSphere is designed to simplify your experience.
            </p>
            <div className="highlight-note">
                <h2>Why Choose HomeSphere?</h2>
                <ul>
                    <li>📦 Comprehensive Listings: Explore a wide range of available properties tailored to your needs.</li>
                    <li>🔒 Secure Transactions: Experience hassle-free bookings with secure payment options.</li>
                    <li>🏠 Easy Management: Landlords can effortlessly manage their listings and track bookings.</li>
                    <li>💬 Supportive Community: Connect with a community of homeowners and tenants for advice and tips.</li>
                </ul>
            </div>
            <p>
                Join us today and start your journey to finding the perfect home or advertising your property with ease!
            </p>
        </div>
    );
};

export default About;
