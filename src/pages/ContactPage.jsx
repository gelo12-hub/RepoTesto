// src/pages/ContactPage.jsx
import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page-content" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      
      <h1 style={{ textAlign: 'center' }}>✉️ Get In Touch with SoleStyle</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1em' }}>
        We are here to help with any questions about sizing, orders, or styling advice.
      </p>

      {/* --- Contact Form Section (basic structure) --- */}
      <section className="contact-form-section" style={{ padding: '30px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '40px' }}>
        <h2 style={{ marginTop: '0' }}>Send Us a Message</h2>
        <form style={{ display: 'grid', gap: '20px' }}>
          <input type="text" placeholder="Your Name" style={formStyle.input} required />
          <input type="email" placeholder="Your Email" style={formStyle.input} required />
          <textarea placeholder="Your Message" rows="5" style={formStyle.textarea} required></textarea>
          <button type="submit" className="btn-primary" style={formStyle.button}>Send Message</button>
        </form>
      </section>
      
      {/* --- Other Info Section --- */}
      <section style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
        
        <div>
          <h3>📞 Phone Support</h3>
          <p>+63 9467018480</p>
          <p style={{ color: '#6c757d' }}>Mon - Fri, 9am - 5pm EST</p>
        </div>
    
      </section>
      
    </div>
  );
}

// Basic inline styles for the form (you can replace with your CSS later)
const formStyle = {
    input: { padding: '10px', border: '1px solid #ccc', borderRadius: '4px' },
    textarea: { padding: '10px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' },
    button: { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }
};

export default ContactPage;