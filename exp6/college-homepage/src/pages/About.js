// src/pages/About.js
import React from 'react';
import './About.css'; // Import CSS for styling
import collegeImage from '../assets/images/college-building1.jpg'; // Image for the section

const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <div className="intro">
                <img src={collegeImage} alt="College Building" className="about-image" />
                <p>Welcome to Our College, where we nurture future leaders and innovators. Our commitment to academic excellence and holistic education shapes the future of our students.</p>
            </div>
            
            <section className="mission-vision">
                <h3>Our Mission</h3>
                <p>To provide a transformative educational experience that empowers students to excel in their fields and contribute positively to society.</p>
                
                <h3>Our Vision</h3>
                <p>To be a globally recognized institution that fosters innovation, critical thinking, and lifelong learning.</p>
            </section>

            <section className="values">
                <h3>Core Values</h3>
                <ul>
                    <li><strong>Integrity:</strong> We uphold the highest standards of honesty and ethical behavior.</li>
                    <li><strong>Excellence:</strong> We pursue excellence in education, research, and service.</li>
                    <li><strong>Inclusivity:</strong> We celebrate diversity and create an inclusive environment for all.</li>
                </ul>
            </section>

            <section className="history">
                <h3>Our History</h3>
                <p>Founded in 1990, our college has evolved from a small institution into a vibrant community of scholars and innovators. Our diverse programs and dedicated faculty have made us a leader in higher education.</p>
            </section>

            <section className="community">
                <h3>Community Engagement</h3>
                <p>We believe in giving back to our community. Our students participate in various outreach programs and volunteer initiatives that foster a sense of social responsibility.</p>
            </section>
        </div>
    );
};

export default About;


