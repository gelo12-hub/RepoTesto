// src/pages/ContactPage.jsx

import React, { useState } from "react"; // 1. Import useState
import "./contact.css";

// 2. Import Firebase/Firestore essentials
import { db } from '../firebase'; // NOTE: Adjust this path if your firebase instance is elsewhere
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 

export default function ContactPage() {
    
    // 3. State to hold form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    // Function to update state as the user types
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 4. Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop the page from reloading
        setIsSubmitting(true);
        setStatusMessage('');
        
        try {
            // Add a new document to the 'inquiries' collection
            await addDoc(collection(db, 'inquiries'), {
                ...formData,
                timestamp: serverTimestamp(),
                status: 'New', // Default status for new inquiries
            });

            // Success feedback
            setStatusMessage('Message sent successfully! We will get back to you soon.');
            setFormData({ name: '', email: '', message: '' }); // Clear form
            
        } catch (error) {
            console.error("Error sending inquiry:", error);
            setStatusMessage('Failed to send message. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-wrapper">
            
            {/* Top Title */}
            <div className="contact-header">
                <span className="contact-icon">✉️</span>
                <h1>Get In Touch with SoleStyle</h1>
                <p>
                    We're here to help with sizing questions, orders, product concerns,
                    or styling advice.
                </p>
            </div>

            {/* Contact Form Card */}
            <div className="contact-form-card fade-in">
                <h2>Send Us a Message</h2>

                {/* 5. Attach handleSubmit to the form and link inputs to state */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" // IMPORTANT: Used in handleChange
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" // IMPORTANT: Used in handleChange
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                    <textarea 
                        name="message" // IMPORTANT: Used in handleChange
                        placeholder="Your Message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {/* Display submission status */}
                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
            
            {/* Support Section (Rest of your original code is here...) */}
            <div className="contact-support fade-in">
                {/* ... (Support Boxes) ... */}
            </div>
        </div>
    );
}