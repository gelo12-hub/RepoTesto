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
import RegisterPage from "./pages/RegisterPage.jsx"; // ✅ NEW

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
          {isLoggedIn ? (
            <>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <FeaturesSection />
                    <JourneySection />
                    <TestimonialsSection />
                  </>
                }
              />

              <Route path="/shop" element={<ShopPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/account" element={<AccountSettings />} />
              <Route path="/orders" element={<OrdersPage />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}

        </Routes>
      </main>

      {isLoggedIn && <Footer />}
    </>
  );
}

export default App;
