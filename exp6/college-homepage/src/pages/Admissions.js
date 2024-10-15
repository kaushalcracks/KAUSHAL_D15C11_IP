// src/pages/Admissions.js
import React from 'react';
import './Admissions.css'; // Import CSS for styling

const Admissions = () => {
    return (
        <div className="admissions-container">
            <h2>Admissions</h2>
            <p>Welcome to the Admissions page! Here, you will find everything you need to apply to our college.</p>
            
            <section className="application-steps">
                <h3>Application Steps</h3>
                <ol>
                    <li>Complete the online application form.</li>
                    <li>Submit your academic transcripts and letters of recommendation.</li>
                    <li>Pay the application fee.</li>
                    <li>Schedule an interview (if required).</li>
                    <li>Receive your admission decision.</li>
                </ol>
            </section>

            <section className="requirements">
                <h3>Admission Requirements</h3>
                <ul>
                    <li>High school diploma or equivalent.</li>
                    <li>Minimum GPA of 3.0.</li>
                    <li>Standardized test scores (SAT/ACT) if applicable.</li>
                    <li>Personal statement or essay.</li>
                </ul>
            </section>

            <section className="deadlines">
                <h3>Application Deadlines</h3>
                <p>Make sure to submit your application by the following deadlines:</p>
                <ul>
                    <li><strong>Fall Semester:</strong> July 15</li>
                    <li><strong>Spring Semester:</strong> December 1</li>
                </ul>
            </section>

            <section className="contact">
                <h3>Contact Admissions</h3>
                <p>If you have any questions, feel free to reach out to our admissions office:</p>
                <p>Email: admissions@college.edu</p>
                <p>Phone: (123) 456-7890</p>
            </section>
        </div>
    );
};

export default Admissions;

