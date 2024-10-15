// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import headerImage from '../assets/images/college-building.jpg';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Welcome to VESIT</h1>
                <nav>
                    <ul className='nav-list'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/admissions">Admissions</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="header-image">
                <img src={headerImage} alt="College Building" />
            </div>
        </header>
    );
};

export default Header;


