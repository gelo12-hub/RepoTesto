import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import "./login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (phone.trim() !== "" && password.trim() !== "") {
      login();
      navigate("/");
    } else {
      alert("Please enter phone and password");
    }
  };

  // ✅ Redirects to REAL Facebook login page
  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com/login.php";
  };

  // ✅ Redirects to REAL Google login page
  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
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
        <div className="login-box">

          <h2>Log In</h2>

          <input
            type="text"
            placeholder="Phone number / Email"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            LOG IN
          </button>

          <div className="forgot">Forgot Password?</div>

          <div className="divider">OR</div>

          {/* FACEBOOK LOGIN */}
          <div className="social-btn facebook" onClick={handleFacebookLogin}>
            Continue with Facebook
          </div>

          {/* GOOGLE LOGIN */}
          <button className="social-btn google" onClick={handleGoogleLogin}>
             Continue with Google
          </button>


          {/* CREATE ACCOUNT */}
          <div className="signup">
            New to SoleStyle?{" "}
            <span
             style={{ color: "#3b82f6", cursor: "pointer", fontWeight: "500" }}
             onClick={() => navigate("/register")}
            >
              Create an account
  </span>
</div>


        </div>
      </div>

    </div>
  );
}
