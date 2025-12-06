// src/pages/AboutPage.jsx
import React from 'react';

function AboutPage() {
  return (
    <div className="about-page-content" style={{ 
        maxWidth: '750px', 
        margin: '60px auto', 
        padding: '0 20px', 
        textAlign: 'center' 
    }}>
      
      {/* --- Main Heading and Story --- */}
      <h1 style={{ 
          fontSize: '2.5em', 
          marginBottom: '20px', 
          borderBottom: '1px solid #ddd',
          paddingBottom: '10px'
      }}>
          Crafted for Life's Journey
      </h1>
      
      <p style={{ 
          fontSize: '1.2em', 
          color: '#333', 
          marginBottom: '60px',
          lineHeight: '1.6'
      }}>
          Founded in 2025, SoleStyle crafts luxury footwear committed to a higher standard. We believe exceptional style and ultimate comfort should never compromise the planet. Through ethical production and sustainable materials, we create shoes that feel incredible and are made to last.
      </p>

      {/* --- Vision & Values Section --- */}
      <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: '30px', 
          marginTop: '40px',
          padding: '40px 0'
      }}>
        
        {/* Value 1: Craftsmanship */}
        <div style={{ flex: 1 }}>
          <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '1.2em' }}>
            <span style={{ color: '#007bff', fontSize: '1.5em', marginRight: '5px' }}>★</span> Craftsmanship
          </h3>
          <p style={{ color: '#666', fontSize: '0.95em' }}>
            Every pair is built by expert artisans who honor traditional techniques, ensuring a legacy of quality and durability.
          </p>
        </div>
        
        {/* Value 2: Purpose */}
        <div style={{ flex: 1 }}>
          <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '1.2em' }}>
            <span style={{ color: '#28a745', fontSize: '1.5em', marginRight: '5px' }}>🌍</span> Purpose
          </h3>
          <p style={{ color: '#666', fontSize: '0.95em' }}>
            We prioritize **sustainable sourcing** and ethical manufacturing, committing to a smaller environmental footprint.
          </p>
        </div>
        
        {/* Value 3: Comfort */}
        <div style={{ flex: 1 }}>
          <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '1.2em' }}>
            <span style={{ color: '#ffc107', fontSize: '1.5em', marginRight: '5px' }}>☁️</span> Unmatched Comfort
          </h3>
          <p style={{ color: '#666', fontSize: '0.95em' }}>
            Our footwear engineering focuses on ergonomic design, offering all-day support without sacrificing elegance.
          </p>
        </div>

      </div>

      {/* --- Call to Action --- */}
      <p style={{ 
          marginTop: '60px', 
          paddingTop: '30px', 
          borderTop: '1px solid #eee', 
          fontSize: '1.1em' 
      }}>
          <span style={{ fontWeight: 'bold' }}>Ready to step into our story?</span>
          <a href="/shop" style={{ 
              marginLeft: '15px', 
              color: '#007bff', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
          }}>
              Shop the Collection &rarr;
          </a>
      </p>
      
    </div>
  );
}

export default AboutPage;