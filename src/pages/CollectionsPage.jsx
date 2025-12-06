// src/pages/CollectionsPage.jsx
import React from 'react';

function CollectionsPage() {
    // Basic shared style for collection cards
    const cardStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px',
        margin: '20px 0',
        border: '1px solid #eee',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    };

    // Placeholder image box style
    const imageBoxStyle = {
        width: '350px',
        height: '250px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    
    // View button style
    const buttonStyle = {
        padding: '8px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'inline-block',
        marginTop: '10px',
        fontSize: '0.9em'
    };

    return (
        <div className="collections-page-content" style={{ maxWidth: '850px', margin: '40px auto', padding: '0 20px' }}>
            
            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Exclusive SoleStyle Collections</h1>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px' }}>
                Discover our curated, limited edition, and featured shoe lines.
            </p>

            {/* --- 1. Featured Collection Card (Luxe Leather Line) --- */}
            <div style={cardStyle}>
                <div className="collection-info">
                    <h2 style={{ fontSize: '1.5em', marginBottom: '5px' }}>The Luxe Leather Line</h2>
                    <p style={{ color: '#888', marginBottom: '10px' }}>*Featured Collection*</p>
                    <p style={{ maxWidth: '400px', lineHeight: '1.4' }}>
                        Experience unparalleled craftsmanship with our premium line of Italian leather shoes. 
                        Each pair is handcrafted for durability and a timeless look.
                    </p>
                    <a href="/shop" style={buttonStyle}>View/Shop</a>
                </div>
                <div style={imageBoxStyle}>
                   <img src="/images/Fdesign/1.png"
                    alt="Luxe Leather Collection"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
               </div>

            </div>

            {/* --- 2. Seasonal Collection Card (Summer Breeze) --- */}
            <div style={cardStyle}>
                <div className="collection-info">
                    <h2 style={{ fontSize: '1.5em', marginBottom: '5px' }}>Summer Breeze Sneakers</h2>
                    <p style={{ color: '#888', marginBottom: '10px' }}>*Seasonal Collection*</p>
                    <p style={{ maxWidth: '400px', lineHeight: '1.4' }}>
                        Lightweight, breathable, and colorful—designed for maximum comfort during the warmer months. 
                        Features organic canvas and recycled rubber soles.
                    </p>
                    <a href="/shop" style={buttonStyle}>View/Shop</a>
                </div>
                <div style={imageBoxStyle}>
                   <img src="/images/Fdesign/2.png"
                    alt="Summer Breeze Sneakers"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
               </div>
            </div>

            {/* --- 3. Eco-Friendly Collection Card (New Focus) --- */}
            <div style={cardStyle}>
                <div className="collection-info">
                    <h2 style={{ fontSize: '1.5em', marginBottom: '5px' }}>Eco-Friendly Picks</h2>
                    <p style={{ color: '#888', marginBottom: '10px' }}>*Additional Collection*</p>
                    <p style={{ maxWidth: '400px', lineHeight: '1.4' }}>
                        Shoes from recycled materials, plant-based textiles, and sustainable manufacturing processes. 
                        Look great while supporting the planet.
                    </p>
                    <a href="/shop" style={buttonStyle}>Discover More</a>
                </div>
                <div style={imageBoxStyle}>
                   <img src="/images/Fdesign/3.png"
                    alt="Eco-Friendly Picks"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
               </div>
            </div>
            
         
        </div>
    );
}

export default CollectionsPage;