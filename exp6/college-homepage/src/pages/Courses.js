// src/pages/Courses.js
import React from 'react';
import './Courses.css'; // Import CSS for styling

const Courses = () => {
    return (
        <div className="courses-container">
            <h2>Courses Offered</h2>
            <p>At our Computer Institute, we provide a wide range of courses designed to equip students with the latest skills in technology and programming.</p>
            
            <section className="course-department">
                <h3>Programming Languages</h3>
                <ul>
                    <li><strong>Python Programming:</strong> Learn the fundamentals of Python, a versatile language used in web development, data science, and automation.</li>
                    <li><strong>Java Development:</strong> Dive into object-oriented programming with Java and explore its applications in enterprise solutions.</li>
                    <li><strong>JavaScript & React:</strong> Master front-end development with JavaScript and the React framework to build dynamic web applications.</li>
                </ul>
            </section>

            <section className="course-department">
                <h3>Web Development</h3>
                <ul>
                    <li><strong>HTML & CSS:</strong> Understand the basics of web structure and design, creating visually appealing and responsive websites.</li>
                    <li><strong>Full Stack Development:</strong> Learn both front-end and back-end technologies to develop complete web applications.</li>
                    <li><strong>Node.js:</strong> Explore server-side programming using Node.js and build scalable network applications.</li>
                </ul>
            </section>

            <section className="course-department">
                <h3>Data Science & AI</h3>
                <ul>
                    <li><strong>Data Analysis with Python:</strong> Gain skills in data manipulation and visualization using libraries like Pandas and Matplotlib.</li>
                    <li><strong>Machine Learning:</strong> Understand machine learning concepts and build predictive models using popular frameworks.</li>
                    <li><strong>Deep Learning:</strong> Explore neural networks and deep learning algorithms for advanced AI applications.</li>
                </ul>
            </section>

            <section className="contact">
                <h3>Contact Us for More Information</h3>
                <p>If you have any questions about our courses, please reach out:</p>
                <p>Email: admissions@computerinstitute.edu</p>
                <p>Phone: (123) 456-7890</p>
            </section>
        </div>
    );
};

export default Courses;

