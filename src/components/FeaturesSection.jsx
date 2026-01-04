import React from 'react';

function FeaturesSection() {
    return (
        <section className="features-section">
            <h2>Why Choose SoleStyle</h2>
            <p className="subtitle">Experience the perfect blend of comfort, style, and quality with every step you take.</p>
            <div className="feature-cards">
                <div className="card">
                    <div className="icon-circle">💎</div> 
                    <h3>Premium Quality</h3>
                    <p>Handcrafted with the finest materials and attention to detail, ensuring durability and comfort that lasts.</p>
                </div>
                <div className="card">
                    <div className="icon-circle">🚀</div>
                    <h3>Fast Delivery</h3>
                    <p>Free shipping on orders over ₱1000 with express delivery options available worldwide.</p>
                </div>
                <div className="card">
                    <div className="icon-circle">📞</div>
                    <h3>Expert Support</h3>
                    <p>Our shoe specialists are here to help you find the perfect fit and style for any occasion.</p>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;