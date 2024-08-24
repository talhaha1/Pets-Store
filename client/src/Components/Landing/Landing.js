// src/components/LandingPage/LandingPage.js
import React , {useState, useEffect} from 'react';
import './Landing.css';
//import petImage from './LandingPage.jpg'; // Make sure the image path is correct
import petImage from '../../Assets/Landing/imagess.avif'

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300); // Delay to ensure content is ready
  }, []);

  return (
    <div className={`home-container ${loaded ? 'loaded' : ''}`}>
      <img src={petImage} alt="Background" className="background-image" />
      <div className="overlay">
        <h1>Welcome to pet Paradise</h1>
        <p>Once you have decided to get a pet and have an idea of the type of pet you are looking for, the next step is often “Where do I find my pet? This is your one-stop destination to find and adopt your perfect pet!</p>
        
      </div>
    </div>
  );
};

export default Landing;
