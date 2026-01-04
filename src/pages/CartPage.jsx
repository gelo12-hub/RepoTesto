// src/pages/CartPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    toggleSelect,
    selectAll,
    unselectAll,
    selectedTotal,
    clearCart,
    updateCartItemSize,
    // 🚀 IMPORT NEW FUNCTION
    getProductData,
  } = useCart();

  const navigate = useNavigate();
  const allSelected = cart.every((item) => item.selected);
    
    // ❌ REMOVE THE STATIC availableSizes LIST HERE
    // const availableSizes = [38, 39, 40, 41, 42, 43]; 

    // Handler for when the user selects a new size from the dropdown
    const handleSizeChange = (item, event) => {
        const newSize = Number(event.target.value); // Convert to number for consistency
        if (newSize) {
            // Pass current unique keys (id, size, color) and the new size
            updateCartItemSize(item.id, item.selectedSize, item.selectedColor, newSize);
        }
    };


  if (cart.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h2>Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cart</h1>

      {/* SELECT ALL */}
      <div style={styles.selectAllRow}>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={() => (allSelected ? unselectAll() : selectAll())}
        />
        <span style={{ marginLeft: 10 }}>Select All</span>
      </div>

      {/* CART ITEMS */}
      <div style={styles.cartList}>
        {cart.map((item) => {
            // 🚀 STEP 1: Get the current definitive product data
            const productDetails = getProductData(item.id);
            // 🚀 STEP 2: Use the sizes from the latest product data, or fall back to the cart item's sizes
            const sizesToDisplay = productDetails?.sizes || item.sizes || [];

            return (
          <div key={item.id + item.selectedSize + item.selectedColor} style={styles.card}>
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => toggleSelect(item.id, item.selectedSize, item.selectedColor)}
              style={styles.checkbox}
            />

            {/* Product Image */}
            <img
              src={
                item.selectedImage ||
                item.image ||
                item.images?.[0]
              }
              alt={item.name}
              style={styles.image}
            />

            {/* Details */}
            <div style={styles.details}>
              <h3 style={styles.name}>{item.name}</h3>
              <p style={styles.price}>₱{item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                
                {/* 🚀 DYNAMIC SIZE SELECTOR */}
                <div style={styles.sizeControl}>
                    <label htmlFor={`size-${item.id}-${item.selectedColor}`}>Size:</label>
                    <select 
                        id={`size-${item.id}-${item.selectedColor}`}
                        value={item.selectedSize} // Controlled component value
                        onChange={(e) => handleSizeChange(item, e)} // Call handler on change
                        style={styles.sizeSelect}
                    >
                        {/* MAP OVER THE CURRENT, UPDATED SIZES */}
                        {sizesToDisplay.map(size => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
                {/* 👆 END SIZE SELECTOR */}

              {/* Qty */}
              <div style={styles.qtyRow}>
                <button style={styles.qtyBtn} onClick={() => decreaseQty(item.id, item.selectedSize, item.selectedColor)}>-</button>
                <span style={styles.qtyNumber}>{item.quantity}</span>
                <button style={styles.qtyBtn} onClick={() => increaseQty(item.id, item.selectedSize, item.selectedColor)}>+</button>
              </div>
            </div>

            {/* Remove */}
            <button
             style={{
             background: "none",
             border: "none",
             color: "#c11111ff",
             cursor: "pointer",
             fontSize: "14px",
             fontWeight: "500",
              }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
             onMouseOut={(e) => (e.target.style.textDecoration = "none")}
             onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
             >
             Remove
          </button>


          </div>
        );
    })} {/* CLOSING MAP FOR CART ITEMS */}
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <h2 style={styles.total}>Total: ₱{selectedTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h2>

        <button
          style={{
            ...styles.checkoutBtn,
            opacity: selectedTotal === 0 ? 0.5 : 1,
            cursor: selectedTotal === 0 ? "not-allowed" : "pointer",
          }}
          onClick={() => selectedTotal > 0 && navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>

      <button style={styles.clearBtn} onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}

/* --------------------------------
   STYLES — Shopify Modern Blue UI (STYLES UNCHANGED)
---------------------------------*/

const BLUE = "#006eff";

const styles = {
  container: {
    padding: "40px",
    maxWidth: "950px",
    margin: "0 auto",
    fontFamily: "Inter, sans-serif",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "25px",
  },

  selectAllRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    fontSize: "16px",
    color: "#333",
  },

  cartList: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "18px",
    background: "#ffffff",
    borderRadius: "14px",
    border: "1px solid #e8e8e8",
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.05)",
    transition: "0.2s",
  },

  checkbox: {
    transform: "scale(1.3)",
    cursor: "pointer",
  },

  image: {
    width: "95px",
    height: "95px",
    borderRadius: "10px",
    objectFit: "cover",
  },

  details: {
    flexGrow: 1,
  },

  name: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "5px",
  },

  price: {
    fontSize: "16px",
    color: BLUE,
    fontWeight: "700",
  },

  sizeText: {
    marginTop: "5px",
    color: "#444",
  },
    
    // 🚀 NEW SIZE SELECTOR STYLES
    sizeControl: {
        display: "flex",
        alignItems: "center",
        color: "#444",
        gap: "8px",
        marginTop: "5px",
    },
    sizeSelect: {
        padding: "4px 8px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
    },

  qtyRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },

  qtyBtn: {
    width: "32px",
    height: "32px",
    background: "#f3f6ff",
    color: BLUE,
    border: `1px solid ${BLUE}`,
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
  },

  qtyNumber: {
    minWidth: "20px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
  },

  removeBtn: {
    background: "none",
    border: "none",
    fontSize: "20px",
    color: "#ff4d4d",
    cursor: "pointer",
  },

  footer: {
    marginTop: "30px",
    padding: "22px",
    background: "#ffffff",
    borderRadius: "14px",
    border: "1px solid #e8e8e8",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.04)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  total: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
  },

  checkoutBtn: {
    padding: "14px 28px",
    background: BLUE,
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    transition: "0.2s",
  },

  clearBtn: {
    marginTop: "20px",
    padding: "12px 22px",
    background: "#f1f1f1",
    color: "#444",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  emptyContainer: {
    padding: "40px",
    textAlign: "center",
    fontSize: "20px",
  },
};