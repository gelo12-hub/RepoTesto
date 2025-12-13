// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    phoneNumber: "",
    email: "", 
  });
    
  // 🚀 NEW STATE FOR SHIPPING ADDRESS
  const [shippingAddress, setShippingAddress] = useState({
    region: "",
    province: "",
    city: "",
    barangay: "",
    street: "", // Assuming this is the Street / House No. / Block / Lot field
  });


  useEffect(() => {
    // Initialize login status
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    
    // Initialize user details from localStorage
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
    
    // 🚀 NEW: Initialize shipping address from localStorage
    const storedAddress = localStorage.getItem("shippingAddress");
    if (storedAddress) {
      setShippingAddress(JSON.parse(storedAddress));
    }
  }, []);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");
    // 🚀 NEW: Clear address on logout
    localStorage.removeItem("shippingAddress"); 
    
    setIsLoggedIn(false);
    setUserDetails({ fullName: "", phoneNumber: "", email: "" });
    setShippingAddress({ region: "", province: "", city: "", barangay: "", street: "" });
  };
    
  const updateUserDetails = (name, phone, email) => {
    const newDetails = { fullName: name, phoneNumber: phone, email: email || userDetails.email };
    localStorage.setItem("userDetails", JSON.stringify(newDetails));
    setUserDetails(newDetails);
  };

  // 🚀 NEW FUNCTION TO UPDATE SHIPPING ADDRESS
  const updateShippingAddress = (addressData) => {
    localStorage.setItem("shippingAddress", JSON.stringify(addressData));
    setShippingAddress(addressData);
  };

  return (
    <AuthContext.Provider value={{ 
        isLoggedIn, 
        login, 
        logout,
        userDetails,       
        updateUserDetails,
        shippingAddress,       // 🚀 EXPORT
        updateShippingAddress  // 🚀 EXPORT
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);