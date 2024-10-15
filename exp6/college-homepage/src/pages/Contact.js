// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Import CSS for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>We d love to hear from you! Please reach out with any inquiries or feedback.</p>

            <section className="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> <a href="2022.kaushal.galav@ves@ac.in">ves@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
                <p><strong>Address:</strong> 123 College Road, City, State, ZIP</p>
                <p><strong>Website:</strong> <a href="https://www.vesit.com" target="_blank" rel="noopener noreferrer">vesit.com</a></p>
            </section>

            <section className="contact-form">
                <h3>Send Us a Message</h3>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>

            <section className="social-media">
                <h3>Follow Us</h3>
                <p>Stay connected through our social media channels:</p>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Contact;

