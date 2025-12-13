// src/pages/AccountSettings.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./account.css";

export default function AccountSettings() {
    const { userDetails, updateUserDetails, shippingAddress } = useAuth(); // 🚀 Pull shippingAddress
    
    // State for Personal Info (same as previous step)
    const [fullName, setFullName] = useState(userDetails.fullName || '');
    const [phoneNumber, setPhoneNumber] = useState(userDetails.phoneNumber || '');
    const [email, setEmail] = useState(userDetails.email || '');

    // Password fields (local state)
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setFullName(userDetails.fullName || '');
        setPhoneNumber(userDetails.phoneNumber || '');
        setEmail(userDetails.email || '');
    }, [userDetails]);


    const handleSavePersonalDetails = () => {
        if (!fullName || !phoneNumber || !email) {
            alert("Please fill in all personal information fields.");
            return;
        }

        updateUserDetails(fullName, phoneNumber, email);
        alert("Personal information saved successfully!");
    };


    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match.");
            return;
        }
        alert("Password change logic goes here!"); 

        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

  return (
    <div className="account-container">
      <h2 className="account-title">Account Settings</h2>

      <div className="account-box">

        <div className="account-section">
          <h3>Personal Information</h3>
          <label>
            Full Name
            <input 
                type="text" 
                placeholder="Enter your full name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label>
            Phone Number
            <input 
                type="text" 
                placeholder="Enter your phone number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>

          <label>
            Email
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <button className="save-btn" onClick={handleSavePersonalDetails} style={{ marginBottom: '20px' }}>
            Save Personal Details
        </button>
        
        {/* 🚀 NEW SECTION: SAVED SHIPPING ADDRESS */}
        <div className="account-section">
          <h3>Saved Shipping Address</h3>
            
            {shippingAddress.region ? (
                <>
                    <label>
                        Region
                        <input type="text" value={shippingAddress.region} disabled />
                    </label>
                    <label>
                        Province
                        <input type="text" value={shippingAddress.province} disabled />
                    </label>
                    <label>
                        City / Municipality
                        <input type="text" value={shippingAddress.city} disabled />
                    </label>
                    <label>
                        Barangay
                        <input type="text" value={shippingAddress.barangay} disabled />
                    </label>
                    <label>
                        Street / House No.
                        <input type="text" value={shippingAddress.street} disabled />
                    </label>
                </>
            ) : (
                <p>No saved shipping address found. This is usually saved when placing an order.</p>
            )}

        </div>

        <div className="account-section">
          <h3>Change Password</h3>
          <label>
            Current Password
            <input 
                type="password" 
                placeholder="Current password" 
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </label>

          <label>
            New Password
            <input 
                type="password" 
                placeholder="New password" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>

          <label>
            Confirm Password
            <input 
                type="password" 
                placeholder="Confirm password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        
        <button className="save-btn" onClick={handleChangePassword}>Change Password</button>

      </div>
    </div>
  );
}