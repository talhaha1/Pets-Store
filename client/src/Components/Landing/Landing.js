// src/components/LandingPage/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import petImage from './LandingPage.jpg'; // Make sure the image path is correct

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome to Pet Paradise</h1>
      <p>Your one-stop destination to find and adopt your perfect pet!</p>
      <img src={petImage} alt="Pets" />
      <div className="button-group">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </div>
  );
};

export default Landing;
