import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
    const { currentUser } = useAuth(); // get logged-in user
    const [orders, setOrders] = useState([]);

    // CALCULATED VALUE: Total count of all orders
    const orderCount = orders.length;

    // Load orders for this user
    useEffect(() => {
        if (!currentUser) {
            setOrders([]);
            return;
        }

        const key = `orders_user_${currentUser.phone}`;
        const saved = JSON.parse(localStorage.getItem(key)) || [];
        setOrders(saved);
    }, [currentUser]);

    // Save orders for THIS user only
    const saveOrders = (updated) => {
        if (!currentUser) return;
        const key = `orders_user_${currentUser.phone}`;
        localStorage.setItem(key, JSON.stringify(updated));
    };

    const addOrder = (order) => {
        setOrders((prev) => {
            const updated = [order, ...prev];
            saveOrders(updated);
            return updated;
        });
    };

    const cancelOrder = (id) => {
        const updated = orders.map((o) =>
            o.id === id ? { ...o, status: "Cancelled" } : o
        );

        setOrders(updated);
        saveOrders(updated);
    };
    
    // 🚀 NEW FUNCTION: Permanently deletes an order from the list
    const deleteOrder = (id) => {
        // Use filter to create a new array without the order matching the id
        const updated = orders.filter((o) => o.id !== id);
        
        setOrders(updated);
        saveOrders(updated);
    };


    return (
        <OrdersContext.Provider 
            value={{ orders, addOrder, cancelOrder, deleteOrder, orderCount }}
        >
            {children}
        </OrdersContext.Provider>
    );
}

export const useOrders = () => useContext(OrdersContext);