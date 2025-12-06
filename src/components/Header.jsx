import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">SoleStyle</Link>
      </div>

      <nav>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/collections">Collections</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {/* 🛒 Cart Icon */}
          <li style={{ position: "relative" }}>
            <Link to="/cart" style={{ fontSize: "20px" }}>🛒</Link>

            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -5,
                  right: -10,
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "4px 8px",
                  fontSize: "12px"
                }}
              >
                {totalItems}
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
