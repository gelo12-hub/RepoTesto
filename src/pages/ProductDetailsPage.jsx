import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shoesData from "../data/shoesData";
import { useCart } from "../context/CartContext";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = shoesData.find((item) => item.id === Number(id));
  const { addToCart } = useCart();

  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product?.image
  );

  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    console.log("Viewing product:", product);
  }, [product]);

  if (!product) return <h2 style={{ padding: 40 }}>Product Not Found</h2>;

  return (
    <div className="product-details" style={{ display: "flex", gap: 40, padding: 40 }}>
      
      {/* LEFT IMAGES */}
      <div className="product-image" style={{ width: 450 }}>
        <img 
          src={mainImage} 
          alt={product.name} 
          style={{ width: "100%", borderRadius: 12 }} 
        />

        {/* Thumbnails */}
        {product.images && (
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                style={{
                  width: 80,
                  borderRadius: 8,
                  border: mainImage === img ? "2px solid black" : "1px solid #ccc",
                  cursor: "pointer"
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE INFO */}
      <div className="info" style={{ maxWidth: 500 }}>
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>

        <h3>Size Guide</h3>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {product.sizes.map((size) => (
            <button 
              key={size} 
              onClick={() => setSelectedSize(size)}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: selectedSize === size ? "2px solid black" : "1px solid #ccc",
                background: selectedSize === size ? "black" : "white",
                color: selectedSize === size ? "white" : "black",
                cursor: "pointer",
              }}
            >
              {size}
            </button>
          ))}
        </div>

        <br />

        <button
          className="add-cart-btn"
          onClick={() => {
            if (!selectedSize) {
              alert("Please select a size first!");
              return;
            }

            addToCart({
              ...product,
              selectedImage: mainImage,
              selectedSize: selectedSize,
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
