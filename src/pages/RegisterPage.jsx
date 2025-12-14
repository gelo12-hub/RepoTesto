import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

// --- START NEW FIREBASE IMPORTS ---
// Assuming firebase.js is in the src/ directory, one level up from this file.
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// --- END NEW FIREBASE IMPORTS ---


export default function RegisterPage() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  // --- UPDATED ASYNC FUNCTION WITH FIREBASE LOGIC ---
  const handleRegister = async () => {
    if (!identifier.trim() || !password.trim()) {
      alert("Fill all fields");
      return;
    }

    try {
      // Call Firebase Authentication function
      await createUserWithEmailAndPassword(
        auth, // The Firebase Auth service
        identifier.trim(), // The email
        password.trim()    // The password
      );

      // Success: If the registration succeeds
      alert("Account created successfully!");
      navigate("/login");

    } catch (error) {
      // Error Handling based on Firebase error codes
      console.error("Firebase Registration Error:", error.code, error.message);
      
      let errorMessage = "Registration failed. Please try again.";

      if (error.code === 'auth/weak-password') {
          errorMessage = "Password must be at least 6 characters long.";
      } else if (error.code === 'auth/email-already-in-use') {
          errorMessage = "That email is already registered. Please log in.";
      } else if (error.code === 'auth/invalid-email') {
          errorMessage = "Please enter a valid email address.";
      } 
      
      alert(errorMessage);
    }
  };
  // --- END FIREBASE LOGIC ---


  return (
    <div className="login-container">
      <div className="brand-title">SoleStyle</div>

      <div className="login-left">
        <div className="quote-box">
          <h1>JOIN THE JOURNEY</h1>
          <p>Create your account and start your SoleStyle experience.</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-box">
          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Enter your Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleRegister}>
            REGISTER
          </button>

          <div className="signup">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Log in</span>
          </div>
        </div>
      </div>
    </div>
  );
}