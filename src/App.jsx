// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Homepage components
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import JourneySection from './components/JourneySection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import Footer from './components/Footer.jsx';

// Page components
import ShopPage from './pages/ShopPage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";

<Route path="/checkout" element={<CheckoutPage />} />


// Product Details Page
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';

function App() {
  return (
    <>
      <Header />

     <main>
  <Routes>

    {/* HOME PAGE */}
    <Route path="/" element={
      <>
        <HeroSection />
        <FeaturesSection />
        <JourneySection />
        <TestimonialsSection />
      </>
    } />

    {/* OTHER PAGES */}
    <Route path="/shop" element={<ShopPage />} />
    <Route path="/collections" element={<CollectionsPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />

    {/* PRODUCT DETAILS PAGE */}
    <Route path="/product/:id" element={<ProductDetailsPage />} />

    {/* CART PAGE */}
    <Route path="/cart" element={<CartPage />} />

    {/* ✅ CHECKOUT PAGE (this must be INSIDE <Routes>) */}
    <Route path="/checkout" element={<CheckoutPage />} />

  </Routes>
</main>


      <Footer />
    </>
  );
}

export default App;


