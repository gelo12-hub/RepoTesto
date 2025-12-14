import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import isLoggedIn and isLoading from the context
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
  // Get auth state and loading state
  const { isLoggedIn, isLoading } = useAuth();
  const location = useLocation();

  // 🛑 ESSENTIAL LOADING CHECK:
  // Halt rendering the rest of the app until Firebase has checked the user status
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        fontSize: '24px', 
        color: '#007bff' 
      }}>
        Loading SoleStyle...
      </div>
    );
  }


  // Define paths where the Header and Footer should be HIDDEN
  const noHeaderPaths = ['/login', '/register']; 

  // Check if the Header/Footer should be shown:
  const shouldShowNavComponents = !noHeaderPaths.includes(location.pathname) && isLoggedIn;

  return (
    <div className="app-container"> 
      
      {/* Show Header only if not on login/register AND user is logged in */}
      {shouldShowNavComponents && <Header />}

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

          {/* CATCH ANY UNKNOWN ROUTES */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
          />

        </Routes>
      </main>

      {/* Footer is also hidden on /login and /register */}
      {shouldShowNavComponents && <Footer />}
      
    </div> 
  );
}

export default App;