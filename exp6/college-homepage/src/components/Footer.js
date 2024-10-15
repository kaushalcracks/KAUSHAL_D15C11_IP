// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Vivekanand. All rights reserved.</p>
                <nav className="footer-nav">
                    <Link to="/about">About Us</Link>
                    <Link to="/admissions">Admissions</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

