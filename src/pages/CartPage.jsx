import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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

      <div style={styles.cartList}>
        {cart.map((item) => (
          <div key={item.id + item.selectedSize} style={styles.card}>
            
            <img
              src={
                item.selectedImage ||
                item.image ||
                item.images?.[0]
              }
              alt={item.name}
              style={styles.image}
            />

            <div style={styles.details}>
              <h3 style={styles.name}>{item.name}</h3>
              <p style={styles.price}>${item.price.toFixed(2)}</p>

              <p style={{ marginTop: 5, color: "#555" }}>
                Size: <b>{item.selectedSize}</b>
              </p>

              <div style={styles.qtyRow}>
                <button style={styles.qtyBtn} onClick={() => decreaseQty(item.id)}>
                  -
                </button>
                <span style={styles.qtyNumber}>{item.quantity}</span>
                <button style={styles.qtyBtn} onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>
            </div>

            <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <h2 style={styles.total}>Total: ${totalPrice.toFixed(2)}</h2>

        <button
          style={styles.checkoutBtn}
          onClick={() => navigate("/checkout")}
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

const styles = {
  container: {
    padding: "40px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    marginBottom: "20px",
  },
  cartList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    background: "#fff",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
  },
  image: {
    width: "90px",
    height: "90px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  details: {
    flexGrow: 1,
  },
  qtyRow: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  qtyBtn: {
    width: "30px",
    height: "30px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
    background: "#f5f5f5",
  },
  qtyNumber: {
    minWidth: "20px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },
  removeBtn: {
    background: "none",
    border: "none",
    fontSize: "20px",
    color: "red",
    cursor: "pointer",
  },
  footer: {
    marginTop: "30px",
    padding: "20px",
    borderRadius: "12px",
    background: "#fafafa",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    margin: 0,
    fontSize: "22px",
  },
  checkoutBtn: {
    padding: "12px 25px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  clearBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#eee",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  emptyContainer: {
    padding: "40px",
    textAlign: "center",
  },
};
