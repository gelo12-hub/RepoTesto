// src/pages/LoginPage.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Get the centralized context function and isLoggedIn state
import { useAuth } from "../context/AuthContext"; 
import "./login.css";


export default function LoginPage() {
  const navigate = useNavigate();
  // We now pull 'isLoggedIn' from the context
  const { login, isLoggedIn } = useAuth(); 

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  // =========================================================
  // 🛑 THE FIX: Redirect if already logged in
  // If the user somehow lands on /login while authenticated,
  // push them back to the home page immediately.
  // =========================================================
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);
  // =========================================================


  // Calls the context function to handle Firebase sign-in
  const handleLogin = async (e) => { 
    e.preventDefault();

    if (!identifier.trim() || !password.trim()) {
      alert("Please enter email/phone and password");
      return;
    }

    try {
      // Call the centralized login function
      await login(identifier.trim(), password.trim());
      
      // Success: Navigate to the home page
      alert("Login successful!"); 
      // The useEffect above will handle the navigation, but keeping this for immediate feedback
      navigate("/"); 

    } catch (error) {
      // Catch the user-friendly error message thrown by AuthContext
      console.error("Login attempt failed:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="brand-title">SoleStyle</div>

      <div className="login-left">
        <div className="quote-box">
          <h1>FIND YOUR SOLEMATE WITH US</h1>
          <p>
            Your journey begins with the right pair. Every step brings you closer
            to who you’re meant to be, fueled by comfort, style, and the path you
            forge.
          </p>
        </div>
      </div>

      <div className="login-right">
        <form className="login-box" onSubmit={handleLogin}>
          <h2>Log In</h2>

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

          <button className="login-btn" type="submit">
            LOG IN
          </button>

          <div className="signup">
            New to SoleStyle?{" "}
            <span onClick={() => navigate("/register")}>
              Create an account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}