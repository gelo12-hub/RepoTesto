import React from "react";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-wrapper">

      {/* ---- HERO BANNER ---- */}
      <section className="about-hero">
        <div className="hero-text">
          <h1>Crafted for Life's Journey</h1>
          <p>
            At SoleStyle, we blend craftsmanship, comfort, and purpose to create
            footwear designed for movement — and made to last.
          </p>
        </div>
      </section>

      {/* ---- BRAND STORY ---- */}
      <section className="brand-story fade-in">
        <h2>Our Story</h2>
        <p>
          Founded in 2025, SoleStyle creates footwear that meets a higher
          standard. Every pair is crafted with exceptional attention to detail,
          premium materials, and ethical production.  
          <br /><br />
          We believe style and comfort should never compromise sustainability.
          Through mindful sourcing and innovative design, we build footwear that
          feels incredible from the very first step.
        </p>
      </section>

      {/* ---- FEATURES ---- */}
      <section className="features fade-in">
        <div className="feature-item">
          <span className="feature-icon">⭐</span>
          <h3>Craftsmanship</h3>
          <p>
            Expertly handcrafted with traditional techniques that ensure
            durability, comfort, and timeless style.
          </p>
        </div>

        <div className="feature-item">
          <span className="feature-icon">🌍</span>
          <h3>Purpose</h3>
          <p>
            Mindfully sourced materials and ethical manufacturing to support a
            smaller environmental footprint.
          </p>
        </div>

        <div className="feature-item">
          <span className="feature-icon">☁️</span>
          <h3>Unmatched Comfort</h3>
          <p>
            Advanced ergonomic engineering provides all-day support without
            sacrificing elegance.
          </p>
        </div>
      </section>

      {/* ---- CRAFTSMANSHIP SHOWCASE ---- */}
      <section className="craft-section fade-in">
        <div className="craft-text">
          <h2>The Art of Making</h2>
          <p>
            Behind every pair of SoleStyle shoes is a team of master artisans.
            From pattern cutting to final stitching, each step is performed with
            precision and passion.
          </p>
        </div>

        
      </section>

    </div>
  );
}
