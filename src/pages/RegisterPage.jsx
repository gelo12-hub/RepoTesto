import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css"; // reuse same styling

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = () => {
    if (email.trim() !== "" && pass.trim() !== "") {
      alert("Account created!");
      login();
      navigate("/");
    } else {
      alert("Fill all fields");
    }
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
            placeholder="Phone number/email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button className="login-btn" onClick={handleRegister}>
            REGISTER
          </button>

          <div className="signup">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>
              Log in
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}
