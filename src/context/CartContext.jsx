// src/context/CartContext.jsx (Firebase Integration)

import { createContext, useContext, useState, useEffect } from "react";
// 🟢 FIREBASE AND AUTH IMPORTS
import { useAuth } from "./AuthContext"; 
import { db } from "../firebase"; // Ensure 'db' is exported from your firebase.js
import { doc, setDoc, onSnapshot } from "firebase/firestore";

import shoesData from "../data/shoesData"; 


const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]); 
    
    // Get user state from AuthContext
    const { currentUser, isLoggedIn } = useAuth();
    const userUid = currentUser?.uid;

    // Helper function to check if two items are the same variant
    const isSameVariant = (item, id, size, color) => 
        item.id === id &&
        item.selectedSize === size &&
        item.selectedColor === color;

    // Helper to get product data (from local file)
    const getProductData = (id) => {
        return shoesData.find(item => item.id === id);
    };
    
    // =========================================================
    // FIREBASE SAVE FUNCTION
    // =========================================================
    const saveCartToFirestore = async (cartData) => {
        if (!userUid) return;
        try {
            const cartDocRef = doc(db, "carts", userUid);
            await setDoc(cartDocRef, { items: cartData, lastUpdated: new Date() });
            console.log("Cart saved to Firestore successfully.");
        } catch (error) {
            console.error("Error saving cart to Firestore:", error);
        }
    };

    // =========================================================
    // FIREBASE LOAD/LISTEN FUNCTION (CRITICAL FOR PERSISTENCE)
    // =========================================================
    useEffect(() => {
        if (!isLoggedIn || !userUid) {
            setCart([]); 
            return;
        }

        const cartDocRef = doc(db, "carts", userUid);
        
        const unsubscribe = onSnapshot(cartDocRef, (docSnap) => {
            if (docSnap.exists() && docSnap.data().items) {
                setCart(docSnap.data().items);
            } else {
                setCart([]);
            }
        }, (error) => {
            console.error("Error fetching cart:", error);
        });

        return () => unsubscribe(); 
    }, [isLoggedIn, userUid]);


    // =========================================================
    // MODIFIED CART ACTIONS (Now call saveCartToFirestore)
    // =========================================================
    
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(
                (p) =>
                    p.id === product.id &&
                    p.selectedSize === product.selectedSize &&
                    p.selectedColor === product.selectedColor
            );

            let newCart;
            
            if (existing) {
                newCart = prev.map((p) =>
                    isSameVariant(p, product.id, product.selectedSize, product.selectedColor)
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            } else {
                newCart = [
                    ...prev,
                    {
                        ...product,
                        quantity: 1,
                        selected: true,
                        selectedColor: product.selectedColor, 
                    },
                ];
            }
            saveCartToFirestore(newCart); 
            return newCart;
        });
    };


    const removeFromCart = (id, size, color) => {
        setCart((prev) => {
            const newCart = prev.filter((item) => !isSameVariant(item, id, size, color));
            saveCartToFirestore(newCart); 
            return newCart;
        });
    };

    const increaseQty = (id, size, color) => {
        setCart((prev) => {
            const newCart = prev.map((item) =>
                isSameVariant(item, id, size, color)
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            saveCartToFirestore(newCart); 
            return newCart;
        });
    };

    const decreaseQty = (id, size, color) => {
        setCart((prev) => {
            const newCart = prev.map((item) =>
                isSameVariant(item, id, size, color)
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            );
            saveCartToFirestore(newCart); 
            return newCart;
        });
    };

    const toggleSelect = (id, size, color) => {
        setCart((prev) => {
            const newCart = prev.map((item) =>
                isSameVariant(item, id, size, color)
                    ? { ...item, selected: !item.selected }
                    : item
            );
            return newCart;
        });
    };

    const selectAll = () => {
        setCart((prev) => prev.map((item) => ({ ...item, selected: true })));
    };

    const unselectAll = () => {
        setCart((prev) => prev.map((item) => ({ ...item, selected: false })));
    };
    
    const updateCartItemSize = (id, oldSize, color, newSize) => {
        setCart((prev) => {
            const itemToUpdate = prev.find((item) => isSameVariant(item, oldSize, color));
            
            if (!itemToUpdate) return prev;
            
            const newItem = {
                ...itemToUpdate,
                selectedSize: newSize,
            };
            
            const withoutOldItem = prev.filter((item) => !isSameVariant(item, oldSize, color));
            const existingNewVariant = withoutOldItem.find((item) => isSameVariant(item, id, newSize, color));

            let newCart;
            
            if (existingNewVariant) {
                newCart = withoutOldItem.map((item) => 
                    isSameVariant(item, id, newSize, color) 
                        ? { ...item, quantity: item.quantity + itemToUpdate.quantity } 
                        : item
                );
            } else {
                newCart = [...withoutOldItem, newItem];
            }
            
            saveCartToFirestore(newCart); 
            return newCart;
        });
    };
    
    // Clear cart and save the empty state to Firebase
    const clearCart = async () => {
        setCart([]);
        await saveCartToFirestore([]); 
    };

    const selectedTotal = cart
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                toggleSelect,
                selectAll,
                unselectAll,
                selectedTotal,
                clearCart, 
                updateCartItemSize,
                getProductData,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}