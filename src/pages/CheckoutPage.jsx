// src/pages/CheckoutPage.jsx
import React, { useState, useEffect } from "react"; // Added useEffect for initial load
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import phAddress from "../data/phAddress";
import { useOrders } from "../context/OrdersContext";
import { useAuth } from "../context/AuthContext"; // 🚀 Import useAuth

export default function CheckoutPage() {
  const BLUE = "#006eff";
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const { addOrder } = useOrders();
  
  // 🚀 PULL userDetails, updateUserDetails, shippingAddress, and updateShippingAddress from context
  const { userDetails, updateUserDetails, shippingAddress, updateShippingAddress } = useAuth(); 

  const [payment, setPayment] = useState("");

  // 🚀 NEW: State for Name, Phone, and Email inputs, initialized with context data
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Set initial state from userDetails when the component mounts
    setFullName(userDetails.fullName || "");
    setPhoneNumber(userDetails.phoneNumber || "");
    setEmail(userDetails.email || "");

    // 🚀 NEW: Set initial state for address from shippingAddress context
    setRegion(shippingAddress.region || "");
    setProvince(shippingAddress.province || "");
    setCity(shippingAddress.city || "");
    setBarangay(shippingAddress.barangay || "");
    setStreet(shippingAddress.street || ""); // Initialize street address

  }, [userDetails, shippingAddress]); // Run when userDetails or shippingAddress changes

  // Address states
  const [region, setRegion] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [barangay, setBarangay] = useState("");
    
  // 🚀 NEW: State for the Street/House No. input
  const [street, setStreet] = useState(""); 


  // Dynamic address lists
  const regions = Object.keys(phAddress);
  const provinces = region ? Object.keys(phAddress[region]) : [];
  const cities = province ? Object.keys(phAddress[region][province]) : [];
  const barangays =
    region && province && city ? phAddress[region][province][city] : [];

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  /* 🟢 PLACE ORDER FUNCTION (Updated to Save Details and Address) */
  const placeOrder = () => {
    if (!payment) {
      alert("Please select a payment method.");
      return;
    }
    if (!fullName || !phoneNumber || !email) {
        alert("Please enter your Full Name, Phone Number, and Email.");
        return;
    }
    
    // 🚀 NEW: Address validation
    if (!region || !province || !city || !barangay || !street) {
        alert("Please complete the full shipping address.");
        return;
    }

    // 🚀 ACTION 1: Save the current Personal info (Good to keep)
    updateUserDetails(fullName, phoneNumber, email);
    
    // 🚀 ACTION 2: Save the full Shipping Address (Good to keep)
    updateShippingAddress({ region, province, city, barangay, street });

    // Prepare cart items for the order history
    const formattedItems = cart.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      selectedImage: item.selectedImage,
      selectedSize: item.selectedSize,
      selectedColor: item.selectedColor,
    }));

    const newOrder = {
      id: Date.now(),
      items: formattedItems,
      total,
      payment,

        // 🚀 CRITICAL FIX: INCLUDE FULL NAME AND PHONE NUMBER
        fullName: fullName,
        phoneNumber: phoneNumber,
        // The email is not strictly needed for the order, but useful if you wanted it later:
        email: email, 
        
      // 🚀 Include street in the saved order address
      address: { region, province, city, barangay, street },
      date: new Date().toLocaleString(),
      status: "Processing",
      trackingNumber:
        "TRK-" + Math.floor(100000 + Math.random() * 900000),
    };

    addOrder(newOrder);
    clearCart();
    navigate("/orders"); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>

      <div style={styles.grid}>
        {/* LEFT SIDE */}
        <div>
          {/* SHIPPING */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Shipping Information</h2>

            {/* 🚀 BIND INPUTS TO STATE */}
            <input 
              placeholder="Full Name" 
              style={styles.input}
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)}
            />
            <input 
              placeholder="Phone Number" 
              style={styles.input}
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {/* 🚀 NEW: Add Email input here as well, since it's in AccountSettings */}
            <input 
              placeholder="Email" 
              style={styles.input}
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />


            {/* REGION */}
            <select
              style={styles.input}
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
                setProvince("");
                setCity("");
                setBarangay("");
              }}
            >
              <option value="">Select Region</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {/* ... rest of the address selects ... */}
            <select
              style={styles.input}
              value={province}
              disabled={!region}
              onChange={(e) => {
                setProvince(e.target.value);
                setCity("");
                setBarangay("");
              }}
            >
              <option value="">Select Province</option>
              {provinces.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            {/* CITY */}
            <select
              style={styles.input}
              value={city}
              disabled={!province}
              onChange={(e) => {
                setCity(e.target.value);
                setBarangay("");
              }}
            >
              <option value="">Select City / Municipality</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* BARANGAY */}
            <select
              style={styles.input}
              value={barangay}
              disabled={!city}
              onChange={(e) => setBarangay(e.target.value)}
            >
              <option value="">Select Barangay</option>
              {barangays.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>


            <input
              placeholder="Street / House No. / Block / Lot"
              style={styles.input}
              value={street} // 🚀 BIND INPUT
              onChange={(e) => setStreet(e.target.value)} // 🚀 UPDATE STATE
            />
          </div>

          {/* PAYMENT */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Payment Method</h2>

            {/* ... rest of payment methods unchanged ... */}
            {[
              { id: "card", label: "💳 Credit / Debit Card" },
              { id: "gcash", label: "📱 GCash" },
              { id: "maya", label: "🟣 Maya" },
              { id: "cod", label: "📦 Cash on Delivery" },
            ].map((method) => (
              <label style={styles.radioRow} key={method.id}>
                <input
                  type="radio"
                  name="pay"
                  value={method.id}
                  checked={payment === method.id}
                  onChange={() => setPayment(method.id)}
                  style={styles.radio}
                />
                {method.label}
              </label>
            ))}
          </div>
        </div>

        {/* RIGHT — SUMMARY (Unchanged) */}
        <div style={styles.summaryCard}>
          <h2 style={styles.sectionTitle}>Order Summary</h2>
          {/* ... rest of summary ... */}
          {cart.map((item) => (
            <div key={item.id} style={styles.itemBox}>
              <div style={styles.itemHeader}>{item.name}</div>

              <div style={styles.itemDetailRow}>
                <span>Unit Price:</span>
                <span>₱{item.price.toFixed(2)}</span>
              </div>

              <div style={styles.itemDetailRow}>
                <span>Quantity:</span>
                <span>{item.quantity}</span>
              </div>

              <div style={styles.itemDetailRow}>
                <strong>Subtotal:</strong>
                <strong>₱{(item.price * item.quantity).toFixed(2)}</strong>
              </div>

              <div style={styles.itemDivider}></div>
            </div>
          ))}

          <div style={styles.totalRow}>
            <strong>Total</strong>
            <strong>₱{total.toFixed(2)}</strong>
          </div>

          <button style={styles.orderBtn} onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- STYLES (Unchanged) ---------- */
const BLUE = "#006eff";

const styles = {
// ... (rest of styles are unchanged)
  container: {
    padding: "40px",
    maxWidth: "1100px",
    margin: "0 auto",
    fontFamily: "Inter, sans-serif",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "30px",
  },

  card: {
    padding: "25px",
    background: "linear-gradient(to bottom, #ffffff, #e8f1ff, #cfe0ff)",
    borderRadius: "16px",
    border: "1px solid #e8e8e8",
    boxShadow: "0px 4px 14px rgba(0,0,0,0.05)",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  summaryCard: {
    padding: "25px",
    height: "fit-content",
    background: "#fff",
    borderRadius: "16px",
    border: "1px solid #e8e8e8",
    boxShadow: "0px 4px 14px rgba(0,0,0,0.05)",
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #dcdcdc",
    fontSize: "16px",
    width: "100%",
  },

  radioRow: {
    display: "flex",
    alignItems: "center",
    fontSize: "17px",
    padding: "8px 0",
    cursor: "pointer",
    gap: "10px",
  },

  radio: {
    transform: "scale(1.3)",
  },

  itemBox: {
    marginBottom: "15px",
  },

  itemHeader: {
    fontSize: "17px",
    fontWeight: "600",
    marginBottom: "6px",
  },

  itemDetailRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    padding: "2px 0",
    color: "#444",
  },

  itemDivider: {
    borderBottom: "1px solid #e6e6e6",
    margin: "10px 0",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    paddingTop: "10px",
    fontSize: "18px",
    borderTop: "1px solid #ddd",
  },

  orderBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "16px 0",
    background: BLUE,
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.2s",
  },
};