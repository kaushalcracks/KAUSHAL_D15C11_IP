// src/components/MainContent.js
import React from 'react';
import './MainContent.css';
import studentLifeImage from '../assets/images/student-life.jpg'; // Path to your image
import campusEventImage from '../assets/images/campus-event.jpg'; // Path to your image

const MainContent = () => {
    return (
        <main className="main-content">
            <h2>Welcome to VESIT</h2>
            <p>Discover your potential and start your journey today!</p>
            <button className="explore-button">Explore Programs</button>
            
            <div className="image-gallery">
                <div className="gallery-item">
                    <img src={studentLifeImage} alt="Student Life" className="gallery-image" />
                    <h3>Student Life</h3>
                    <p>Experience vibrant campus life with various activities and events.</p>
                </div>
                <div className="gallery-item">
                    <img src={campusEventImage} alt="Campus Event" className="gallery-image" />
                    <h3>Campus Events</h3>
                    <p>Join us for exciting events throughout the year!</p>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
