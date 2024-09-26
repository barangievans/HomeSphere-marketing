import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/Signup';
import Login from './components/Login';
import BookHouses from './components/BookHouses';
import MyListings from './components/MyListings';
import PostHouse from './components/PostHouse';
import './App.css'; // Make sure to import your CSS

const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/book-houses" element={<BookHouses />} />
                    <Route path="/my-listings" element={<MyListings />} />
                    <Route path="/post-house" element={<PostHouse />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
