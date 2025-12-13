import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { useAuth } from "./context/AuthContext";

// Homepage components
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import JourneySection from './components/JourneySection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import Footer from './components/Footer.jsx';

// Page components
import ShopPage from './pages/ShopPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import LoginPage from './pages/LoginPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import AccountSettings from './pages/AccountSettings.jsx';
import OrdersPage from "./pages/OrdersPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // 1. Define paths where the Header and Footer should be HIDDEN
  const noHeaderPaths = ['/login', '/register']; 

  // 2. Check if the Header/Footer should be shown:
  const shouldShowNavComponents = !noHeaderPaths.includes(location.pathname) && isLoggedIn;

  return (
    // START: ADDED THE WRAPPER DIV WITH THE app-container CLASS
    <div className="app-container"> 
      
      {/* CONDITIONAL RENDERING: Only show Header if both checks pass */}
      {shouldShowNavComponents && <Header />}

      <main>
        <Routes>

          {/* PUBLIC ROUTES - Header/Footer are hidden here */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* PROTECTED ROUTES - Header/Footer will show here, assuming isLoggedIn is true */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <HeroSection />
                  <FeaturesSection />
                  <JourneySection />
                  <TestimonialsSection />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/shop"
            element={isLoggedIn ? <ShopPage /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/about"
            element={isLoggedIn ? <AboutPage /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/contact"
            element={isLoggedIn ? <ContactPage /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/product/:id"
            element={isLoggedIn ? <ProductDetailsPage /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/cart"
            element={isLoggedIn ? <CartPage /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/checkout"
            element={isLoggedIn ? <CheckoutPage /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/account"
            element={isLoggedIn ? <AccountSettings /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/orders"
            element={isLoggedIn ? <OrdersPage /> : <Navigate to="/login" replace />}
          />

          {/* IMPORTANT FIX → CATCH ANY UNKNOWN ROUTES */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
          />

        </Routes>
      </main>

      {/* Footer is also hidden on /login and /register */}
      {shouldShowNavComponents && <Footer />}
      
    </div> 
    // END: CLOSED THE WRAPPER DIV
  );
}

export default App;