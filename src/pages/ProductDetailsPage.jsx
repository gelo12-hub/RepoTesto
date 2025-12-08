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

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log("Viewing product:", product);
  }, [product]);

  if (!product)
    return <h2 style={{ padding: 40 }}>Product Not Found</h2>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }

    addToCart({
      ...product,
      selectedImage: mainImage,
      selectedSize: selectedSize,
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  // --- Popup styles (unchanged, but polished slightly)
  const popupStyle = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0,0,0,0.25)",
      zIndex: 9999,
    },
    content: {
      background: "white",
      padding: "28px 45px",
      borderRadius: "14px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 6px 26px rgba(0,0,0,0.25)",
      animation: "pop 0.25s ease-out",
    },
    greenCircle: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      background: "#1BC17A",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    text: {
      fontSize: "17px",
      color: "#333",
      marginTop: 4,
    },
  };

  return (
    <>
      {/* POPUP */}
      {showPopup && (
        <div style={popupStyle.container}>
          <div style={popupStyle.content}>
            <div style={popupStyle.greenCircle}>✓</div>
            <p style={popupStyle.text}>
              Item added to your cart
            </p>
          </div>
        </div>
      )}

      {/* MAIN PRODUCT LAYOUT */}
      <div
        style={{
          display: "flex",
          gap: "60px",
          padding: "50px 70px",
          justifyContent: "center",
        }}
      >
        {/* LEFT IMAGE SECTION */}
        <div style={{ width: "520px" }}>
          {/* MAIN IMAGE CARD */}
          <div
            style={{
              background: "linear-gradient(135deg, #f3f3f3, #ffffff)",
              padding: "35px",
              borderRadius: "22px",
              boxShadow: "0 6px 22px rgba(0,0,0,0.12)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={mainImage}
              alt={product.name}
              style={{
                width: "100%",
                maxHeight: "430px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* THUMBNAILS */}
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 18,
            }}
          >
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                style={{
                  width: 85,
                  height: 85,
                  objectFit: "cover",
                  borderRadius: 12,
                  cursor: "pointer",
                  border:
                    mainImage === img
                      ? "3px solid #000"
                      : "2px solid #d1d1d1",
                  transition: "0.25s",
                  transform:
                    mainImage === img ? "scale(1.07)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div style={{ width: "450px" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              fontSize: "26px",
              fontWeight: "600",
              color: "#222",
              margin: "10px 0 20px 0",
            }}
          >
            ₱{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#555",
              marginBottom: "25px",
            }}
          >
            {product.description}
          </p>

          <h3 style={{ marginBottom: 10, fontSize: 18 }}>
            Size Guide
          </h3>

          {/* SIZE BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "10px",
                  border:
                    selectedSize === size
                      ? "2px solid black"
                      : "1px solid #bbb",
                  background:
                    selectedSize === size ? "black" : "white",
                  color:
                    selectedSize === size ? "white" : "black",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "0.25s",
                }}
              >
                {size}
              </button>
            ))}
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            style={{
              marginTop: 35,
              background: "black",
              color: "white",
              padding: "15px 28px",
              fontSize: "17px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "0.25s",
              width: "100%",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
