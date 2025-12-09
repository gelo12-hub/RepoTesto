import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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

  return (
    <>
      {isLoggedIn && <Header />}

      <main>
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* PROTECTED ROUTES */}
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
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/shop"
            element={isLoggedIn ? <ShopPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/about"
            element={isLoggedIn ? <AboutPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/contact"
            element={isLoggedIn ? <ContactPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/product/:id"
            element={isLoggedIn ? <ProductDetailsPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/cart"
            element={isLoggedIn ? <CartPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/checkout"
            element={isLoggedIn ? <CheckoutPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/account"
            element={isLoggedIn ? <AccountSettings /> : <Navigate to="/login" />}
          />

          <Route
            path="/orders"
            element={isLoggedIn ? <OrdersPage /> : <Navigate to="/login" />}
          />

        </Routes>
      </main>

      {isLoggedIn && <Footer />}
    </>
  );
}

export default App;
