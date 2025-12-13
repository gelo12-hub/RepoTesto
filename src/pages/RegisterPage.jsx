import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!identifier.trim() || !password.trim()) {
      alert("Fill all fields");
      return;
    }

    alert("Account created successfully!");
    navigate("/login");
  };

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
