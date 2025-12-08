import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./header.css";

export default function Header() {
  const { cart } = useCart();
  const { isLoggedIn, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar-glass">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">SoleStyle</Link>
        </div>

        {/* NAVIGATION */}
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/orders">My Orders</NavLink></li>

            {/* Show Login if NOT logged in */}
            {!isLoggedIn && (
              <li><NavLink to="/login">Login</NavLink></li>
            )}

            {/* CART */}
            <li className="cart-icon-wrapper">
              <Link to="/cart" className="cart-icon">🛒</Link>

              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </li>

            {/* PROFILE MENU (only when logged in) */}
            {isLoggedIn && (
              <li className="profile-wrapper">
                <div
                  className="profile-icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  👤
                </div>

                {menuOpen && (
                  <div className="profile-menu">
                    <Link to="/orders" onClick={() => setMenuOpen(false)}>
                      My Orders
                    </Link>

                    <Link to="/account" onClick={() => setMenuOpen(false)}>
                      Account Settings
                    </Link>

                    <button
                      className="logout-btn"
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            )}

          </ul>
        </nav>

      </div>
    </header>
  );
}
