import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Step Into Style with Premium Footwear</h1>
        <p>Discover our curated collection of luxury shoes, sneakers, and boots crafted for the modern lifestyle. From casual comfort to formal elegance, find your perfect pair.</p>
        <div className="hero-buttons">
        
      
        </div>
      </div>
      
      {/* This is where we add the image! 
        The path is relative to the 'public' folder.
      */}
      <div className="hero-image-placeholder">
        <img src="/images/Fdesign/myshoe.jpg" alt="Stylish Premium Footwear" />
      </div>

    </section>
  );
}

export default HeroSection;