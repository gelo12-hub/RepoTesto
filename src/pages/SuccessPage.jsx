import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function SuccessPage() {
  const { state } = useLocation();
  const order = state?.order;

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <div style={styles.checkmark}>✓</div>

        <h1 style={styles.title}>Order Placed Successfully!</h1>
        <p style={{ marginBottom: "20px", fontSize: "17px" }}>
          Thank you for shopping with SoleStyle.
        </p>

        {order && (
          <div style={styles.summary}>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Payment:</strong> {order.payment}</p>
            <p><strong>Total:</strong> ₱{order.total}</p>
          </div>
        )}

        <Link to="/shop" style={styles.btn}>Continue Shopping</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "500px",
    background: "#fff",
    padding: "40px",
    textAlign: "center",
    borderRadius: "18px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  },

  checkmark: {
    fontSize: "70px",
    color: "#22c55e",
    marginBottom: "20px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  summary: {
    textAlign: "left",
    margin: "20px 0",
    padding: "20px",
    background: "#f3f4f6",
    borderRadius: "10px",
  },

  btn: {
    padding: "14px 25px",
    background: "#006eff",
    borderRadius: "10px",
    color: "white",
    fontWeight: "600",
    textDecoration: "none",
  }
};
