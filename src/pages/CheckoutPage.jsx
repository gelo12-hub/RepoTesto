import React from "react";

export default function CheckoutPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Checkout</h1>

      <h3>Payment Method</h3>

      <label><input type="radio" name="pay" /> Credit / Debit Card</label><br />
      <label><input type="radio" name="pay" /> GCash</label><br />
      <label><input type="radio" name="pay" /> Maya</label><br />
      <label><input type="radio" name="pay" /> Cash on Delivery</label><br />

      <button style={{ marginTop: 20, padding: "10px 20px", background: "black", color: "white" }}>
        Place Order
      </button>
    </div>
  );
}
