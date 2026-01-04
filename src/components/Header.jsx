import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; 
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrdersContext";
import "./header.css";

export default function Header() {
    const { cart } = useCart();
    // --- CRITICAL: Get logout and isLoggedIn ---
    const { isLoggedIn, logout } = useAuth();
    const { orderCount } = useOrders();

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); 

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        
        if (searchTerm.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm(''); 
        }
    };

    // 🟢 ADDED: Handler to securely log out and navigate
    const handleLogout = async () => {
        try {
            await logout(); // Secure Firebase Sign Out
            navigate('/login'); // Immediate client-side redirection
            setMenuOpen(false); // Close the menu
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Logout failed. Please try again.");
        }
    };
    // ---------------------------------------------


    return (
        <header className="navbar-glass">
            <div className="navbar-container">

                {/* LOGO */}
                <div className="logo">
                    <Link to="/">SoleStyle</Link>
                </div>

                {/* SEARCH BAR COMPONENT */}
                <form className="search-bar" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        aria-label="Search products"
                    />
                    <button type="submit" aria-label="Search">
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

                        {/* MY ORDERS WITH BADGE */}
                        <li className="orders-badge-container">
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
                                        
                                        <Link to="/account" onClick={() => setMenuOpen(false)}>
                                            Account Settings
                                        </Link>
                                        
                                        {/* 🟢 FIXED: Use handleLogout instead of direct logout call */}
                                        <button onClick={handleLogout}>Logout</button>
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