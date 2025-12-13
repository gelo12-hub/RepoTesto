// src/pages/ContactPage.jsx
import React from "react";
import "./contact.css"; // <-- Make sure you create this file

export default function ContactPage() {
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

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Support Section */}
      <div className="contact-support fade-in">
        <div className="support-box">
          <span className="support-icon">📞</span>
          <h3>Phone Support</h3>
          <p>+63 9467018480</p>
          <small>Mon - Fri, 9am - 5pm EST</small>
        </div>

        <div className="support-box">
          <span className="support-icon">📧</span>
          <h3>Email Us</h3>
          <p>vgil03198@gmail.com</p>
          <small>Replies within 24 hours</small>
        </div>

        <div className="support-box">
          <span className="support-icon">📍</span>
          <h3>Location</h3>
          <p>Laguna, Philippines</p>
          <small>Headquarters</small>
        </div>
      </div>
    </div>
  );
}
