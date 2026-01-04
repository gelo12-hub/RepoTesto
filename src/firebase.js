// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For Authentication (Login/Register)
import { getFirestore } from "firebase/firestore"; // For Database (Orders/Addresses)

// Your web app's Firebase configuration (These are YOUR keys)
const firebaseConfig = {
  apiKey: "AIzaSyCth8w7JfpUSSpVVyHkaed57jc9aB_m_Ew",
  authDomain: "solestyle-ecommerce.firebaseapp.com",
  projectId: "solestyle-ecommerce",
  storageBucket: "solestyle-ecommerce.firebasestorage.app",
  messagingSenderId: "458963357440",
  appId: "1:458963357440:web:d2059050fcd28b0bd0ede5",
  measurementId: "G-XZVK81HLDF"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services and export them
export const auth = getAuth(app);         // Used for Login/Register functions
export const db = getFirestore(app);      // Used for saving Orders and Addresses