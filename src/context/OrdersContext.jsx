// src/context/OrdersContext.jsx

import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
// ----------------------------------------------------------------------
// NEW FIREBASE IMPORTS
import { db } from "../firebase"; // <-- Corrected path confirmed
import {
    collection, 
    doc, 
    query, 
    where, 
    onSnapshot, // For real-time order fetching
    addDoc,     // For adding a new order
    updateDoc,  // For updating status (cancel)
    deleteDoc,  // For deleting an order
    serverTimestamp,
    // Add orderBy here if you want to sort orders by timestamp
    // orderBy 
} from "firebase/firestore";
// ----------------------------------------------------------------------


const OrdersContext = createContext();

export function OrdersProvider({ children }) {
    const { currentUser } = useAuth(); 
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const orderCount = orders.length;

    // ----------------------------------------------------------------------
    // FIX 1: Load orders for this user using FIRESTORE onSnapshot
    useEffect(() => {
        setOrders([]); 
        setIsLoading(true);

        // 🎯 CRITICAL FIX: Ensure currentUser is not null AND has a UID
        if (!currentUser || !currentUser.uid) {
            setIsLoading(false);
            return;
        }

        const ordersRef = collection(db, "orders");
        
        // Filter: only orders where the 'userId' field matches the current user's UID
        const userOrdersQuery = query(
            ordersRef, 
            where("userId", "==", currentUser.uid),
            // Optional: If you imported 'orderBy', add it here: orderBy("timestamp", "desc") 
        );

        // Set up the real-time listener
        const unsubscribe = onSnapshot(userOrdersQuery, (snapshot) => {
            const fetchedOrders = snapshot.docs.map(doc => ({
                firestoreId: doc.id, 
                ...doc.data()
            }));
            
            setOrders(fetchedOrders);
            setIsLoading(false);
        }, (error) => {
            console.error("Failed to fetch orders:", error);
            setIsLoading(false);
        });

        // Clean up the listener when the component unmounts or user changes
        return () => unsubscribe();
        
    }, [currentUser]); 
    // ----------------------------------------------------------------------


    // ----------------------------------------------------------------------
    // FIX 2: Add Order to FIRESTORE
    const addOrder = async (order) => {
        if (!currentUser) {
            console.error("Cannot place order: User not logged in.");
            return;
        }

        try {
            const orderWithMetadata = {
                ...order, 
                userId: currentUser.uid, 
                timestamp: serverTimestamp(), 
            };

            await addDoc(collection(db, "orders"), orderWithMetadata);
            
            console.log("Order placed successfully to Firestore!");
            
        } catch (error) {
            console.error("Error writing order to Firestore: ", error);
        }
    };
    // ----------------------------------------------------------------------


    // ----------------------------------------------------------------------
    // FIX 3: Cancel Order (Update Status in Firestore)
    const cancelOrder = async (firestoreId) => {
        try {
            const orderRef = doc(db, "orders", firestoreId);
            
            await updateDoc(orderRef, {
                status: "Cancelled"
            });
            
            console.log(`Order ${firestoreId} cancelled successfully.`);
            
        } catch (error) {
            console.error("Error cancelling order:", error);
        }
    };
    // ----------------------------------------------------------------------


    // FIX 4: Delete Order from FIRESTORE
    const deleteOrder = async (firestoreId) => {
        try {
            await deleteDoc(doc(db, "orders", firestoreId));
            console.log(`Order ${firestoreId} deleted successfully.`);
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };


    return (
        <OrdersContext.Provider 
            value={{ orders, addOrder, cancelOrder, deleteOrder, orderCount, isLoading }}
        >
            {children}
        </OrdersContext.Provider>
    );
}

export const useOrders = () => useContext(OrdersContext);