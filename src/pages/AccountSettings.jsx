import React from "react";
import "./account.css";

export default function AccountSettings() {
  return (
    <div className="account-container">
      <h2 className="account-title">Account Settings</h2>

      <div className="account-box">

        <div className="account-section">
          <h3>Personal Information</h3>
          <label>
            Full Name
            <input type="text" placeholder="Enter your full name" />
          </label>

          <label>
            Phone Number
            <input type="text" placeholder="Enter your phone number" />
          </label>

          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>
        </div>

        <div className="account-section">
          <h3>Change Password</h3>
          <label>
            Current Password
            <input type="password" placeholder="Current password" />
          </label>

          <label>
            New Password
            <input type="password" placeholder="New password" />
          </label>

          <label>
            Confirm Password
            <input type="password" placeholder="Confirm password" />
          </label>
        </div>

        <button className="save-btn">Save Changes</button>

      </div>
    </div>
  );
}
