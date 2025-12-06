import React from 'react';

function JourneySection() {
    return (
        <section className="journey-section">
            <div className="journey-content">
                <h2>Crafted for Every Journey</h2>
                <p>At SoleStyle, we believe that great shoes are more than just footwear – they're companions for life's adventures. Our collection features carefully selected designs from renowned craftsmen who share our passion for excellence.</p>
                <ul className="journey-benefits">
                    {/* NOTE: In JSX, you must replace HTML entities like '✅' or '✔' with the actual character or unicode */}
                    <li>✅ Ethically sourced materials</li>
                    <li>✅ Sustainable manufacturing process</li>
                    <li>✅ 30-day satisfaction guarantee</li>
                </ul>
                <a href="/about" className="btn-primary">Learn More</a>
            </div>
            <div className="journey-image-placeholder"></div>
        </section>
    );
}

export default JourneySection;