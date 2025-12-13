import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!identifier.trim() || !password.trim()) {
      alert("Please enter email/phone and password");
      return;
    }

    login();
    navigate("/");
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
            placeholder="Phone number or Email"
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

          <div className="forgot">Forgot Password?</div>

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
