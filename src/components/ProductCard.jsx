import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id, name, price, image, images }) {
  const displayImage = images?.[0] || image;

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <img src={displayImage} alt={name} className="product-image" />

        <h3>{name}</h3>

        {/* PESO FORMAT */}
        <p className="product-price">
          ₱{price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
      </Link>

      
    </div>
  );
}

export default ProductCard;
