// src/pages/ShopPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard.jsx';
import shoesData from '../data/shoesData.js'; // Import the product data

// Get all unique categories from the data
const categories = [
    "Men's Shoes", 
    "Women's Shoes", 
    "Boy's Shoes", 
    "Girl's Shoes"
];


function ShopPage() {
  return (
    <div className="shop-main-content">
      <h1>The SoleStyle Collection</h1>
      <p className="subtitle">Find your next perfect pair from our diverse categories.</p>

      {/* Loop through each category */}
      {categories.map((category) => (
        <React.Fragment key={category}>
          {/* This uses the CSS class 'category-heading' from your style.css */}
          <h2 className="category-heading">{category}</h2>
          
          {/* This uses the CSS class 'product-grid' from your style.css */}
          <div className="product-grid">
            {/* Filter the data to show only products in the current category */}
            {shoesData
              .filter(shoe => shoe.category === category)
              .map(shoe => (
               <ProductCard
                 key={shoe.id}
                 id={shoe.id}
                 name={shoe.name}
                 price={shoe.price}
                 images={shoe.images}   // ✔ send the array
               />

              ))}
          </div>
        </React.Fragment>
      ))}
      
      {/* NOTE: Your original style.css included styles for a .shop-layout, 
        but the .product-grid and .category-heading classes are what do 
        the heavy lifting for styling this page.
      */}
    </div>
  );
}

export default ShopPage;