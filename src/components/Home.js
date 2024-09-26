// src/components/Home.js

import React from 'react';
import './Home.css'; // Make sure this CSS file exists

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to HomeSphere</h1>
            <p>Your one-stop solution for finding the perfect home!</p>
            <div className="illustration-container">
                <img 
                    src="path/to/your/image.jpg" 
                    alt="Types of Houses" 
                    className="main-image"
                />
                <div className="house-types">
                    <div className="house-type">
                        <h3>Bed Sitters</h3>
                    </div>
                    <div className="house-type">
                        <h3>1 Bedroom</h3>
                    </div>
                    <div className="house-type">
                        <h3>2 Bedroom</h3>
                    </div>
                    <div className="house-type">
                        <h3>3 Bedroom</h3>
                    </div>
                    <div className="house-type">
                        <h3>Mansion</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
