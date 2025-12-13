import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // ADDED useNavigate
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrdersContext";
import "./header.css";

export default function Header() {
    const { cart } = useCart();
    const { isLoggedIn, logout } = useAuth();
    const { orderCount } = useOrders();

    const [menuOpen, setMenuOpen] = useState(false);
    // 🟢 ADDED: State for the search input
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // 🟢 ADDED: Hook for navigation

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // 🟢 ADDED: Handler for search input changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // 🟢 ADDED: Handler for search form submission
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        
        if (searchTerm.trim()) {
            // Redirect to the /shop route, passing the search term as a URL parameter
            navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm(''); // Clear the input after searching
        }
    };


    return (
        <header className="navbar-glass">
            <div className="navbar-container">

                {/* LOGO */}
                <div className="logo">
                    <Link to="/">SoleStyle</Link>
                </div>

                {/* 🟢 ADDED: SEARCH BAR COMPONENT */}
                <form className="search-bar" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        aria-label="Search products"
                    />
                    <button type="submit" aria-label="Search">
                        {/* Using a simple magnifying glass icon */}
                        <span className="search-icon">🔍</span>
                    </button>
                </form>
                {/* ------------------------------------- */}

                {/* NAVIGATION */}
                <nav>
                    <ul className="nav-links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>

                        {/* MY ORDERS WITH BADGE - MINIMAL EDIT HERE */}
                        <li className="orders-badge-container"> {/* ADDED CLASS for CSS positioning */}
                            <NavLink to="/orders">My Orders</NavLink>
                            {orderCount > 0 && (
                                <span className="orders-count">{orderCount}</span>
                            )}
                        </li>

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
                                        
                                        {/* ADD other profile menu links here (e.g., Account Settings, Logout) */}
                                        <Link to="/account" onClick={() => setMenuOpen(false)}>
                                            Account Settings
                                        </Link>
                                        <button onClick={logout}>Logout</button>
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