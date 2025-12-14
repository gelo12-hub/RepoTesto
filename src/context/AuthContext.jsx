  // src/context/AuthContext.jsx

  import { createContext, useContext, useState, useEffect } from "react";
  import { auth, db } from "../firebase";
  import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"; 
  import { doc, getDoc, setDoc } from "firebase/firestore";

  const AuthContext = createContext();

  export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); 
    const [isLoading, setIsLoading] = useState(true); 

    const [userDetails, setUserDetails] = useState({
      fullName: "",
      phoneNumber: "",
      email: "",
      uid: "", 
    });
      
    const [shippingAddress, setShippingAddress] = useState(null);


    // =========================================================
    // 1. FIREBASE LISTENER (Core of state synchronization)
    // =========================================================
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser); 

        if (currentUser) {
          // User is Logged In: Load details from Firestore
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
              const data = userDoc.data();
              
              setUserDetails({ 
                  fullName: data.fullName || "", 
                  phoneNumber: data.phoneNumber || "", 
                  email: currentUser.email,
                  uid: currentUser.uid
              });

              setShippingAddress(data.shippingAddress || null);
              
          } else {
              // Create document if it doesn't exist (e.g., after first registration)
              await setDoc(userDocRef, { 
                  email: currentUser.email, 
                  createdAt: new Date(),
              });
              setUserDetails({ email: currentUser.email, uid: currentUser.uid });
              setShippingAddress(null);
          }
        } else {
          // User is Logged Out: Clear local state
          setUserDetails({ fullName: "", phoneNumber: "", email: "", uid: "" });
          setShippingAddress(null);
        }
        setIsLoading(false); // Authentication status check is complete: **CORRECTLY PLACED**
      });

      return () => unsubscribe(); 
    }, []);


    // =========================================================
    // 2. FIREBASE LOGIN FUNCTION 
    // =========================================================
    const login = async (email, password) => {
      try {
          await signInWithEmailAndPassword(auth, email, password);
          return true; 
      } catch (error) {
        // NOTE: Using Firebase error codes is a good practice!
        let errorMessage = "Login failed. Check your email and password.";
        if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
            errorMessage = "Account not found or invalid email/password.";
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = "Incorrect password. Please try again.";
        } 
        throw new Error(errorMessage); 
      }
    };


    // =========================================================
    // 3. FIREBASE LOGOUT FUNCTION
    // =========================================================
    const logout = async () => {
      try {
          await signOut(auth); 
          alert("Logged out successfully!");
      } catch (error) {
          console.error("Logout Error:", error);
      }
    };

    // ---------------------------------------------------------
    // 4. DATABASE SAVE FUNCTIONS
    // ---------------------------------------------------------
    const updateUserDetails = async (name, phone) => {
      if (!user) return; 

      const newDetails = { fullName: name, phoneNumber: phone };
      
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, newDetails, { merge: true });
      
      setUserDetails(prev => ({ ...prev, ...newDetails }));
    };

    const updateShippingAddress = async (addressData) => {
      if (!user) return; 
      
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { shippingAddress: addressData }, { merge: true });

      setShippingAddress(addressData);
    };
    // ---------------------------------------------------------


    return (
      <AuthContext.Provider 
        value={{ 
          isLoggedIn: !!user, 
          isLoading,
          currentUser: user,
          login, 
          logout,
          userDetails,
          updateUserDetails,
          shippingAddress,
          updateShippingAddress 
        }}
      >
        {/* Render children only after the initial Firebase check is complete */}
        {children} 
      </AuthContext.Provider>
    );
  }

  export const useAuth = () => useContext(AuthContext);