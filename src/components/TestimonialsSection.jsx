import React from 'react';

function TestimonialsSection() {
    return (
        <section className="testimonials-section">
            <h2>What Our Customers Say</h2>
            <p className="subtitle">Join thousands of satisfied customers who trust SoleStyle for their footwear</p>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p className="quote">"The quality is exceptional and the comfort is unmatched. I've been wearing my SoleStyle sneakers daily for months and they still look brand new."</p>
                    <p className="name">Sarah Johnson</p>
                    <p className="title">Marketing Director</p>
                    <div className="profile-circle"></div>
                </div>
                <div className="testimonial-card">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p className="quote">"Fast shipping and excellent customer service. The boots I ordered fit perfectly and the leather quality is outstanding. Highly recommended!"</p>
                    <p className="name">Michael Chen</p>
                    <p className="title">Software Engineer</p>
                    <div className="profile-circle"></div>
                </div>
                <div className="testimonial-card">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p className="quote">"I love the style and versatility of my new heels. They're comfortable enough for all-day wear and stylish enough for any occasion."</p>
                    <p className="name">Emma Rodriguez</p>
                    <p className="title">Fashion Designer</p>
                    <div className="profile-circle"></div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;