// src/context/CartContext.jsx

import React, { createContext, useState, useContext } from "react";
// 🚀 IMPORT SHOES DATA to always get the latest product details
import shoesData from "../data/shoesData"; 

const CartContext = createContext();

export function CartProvider({ children }) {
  // Check for initial cart data in localStorage (if implemented) or start with empty array
  const [cart, setCart] = useState([]); 

  // Helper function to check if two items are the same variant
  const isSameVariant = (item, id, size, color) => 
    item.id === id &&
    item.selectedSize === size &&
    item.selectedColor === color;
    
// 🚀 NEW FUNCTION: Get the definitive product data from the source file
const getProductData = (id) => {
    return shoesData.find(item => item.id === id);
};

  // Add item to cart with selected IMAGE + COLOR + SIZE
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (p) =>
          p.id === product.id &&
          p.selectedSize === product.selectedSize &&
          p.selectedColor === product.selectedColor
      );

      if (existing) {
        return prev.map((p) =>
          isSameVariant(p, product.id, product.selectedSize, product.selectedColor)
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          selected: true,
          selectedColor: product.selectedColor, 
        },
      ];
    });
  };

  const removeFromCart = (id, size, color) => {
    setCart((prev) =>
      prev.filter((item) => !isSameVariant(item, id, size, color))
    );
  };

  const increaseQty = (id, size, color) => {
    setCart((prev) =>
      prev.map((item) =>
        isSameVariant(item, id, size, color)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id, size, color) => {
    setCart((prev) =>
      prev.map((item) =>
        isSameVariant(item, id, size, color)
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const toggleSelect = (id, size, color) => {
    setCart((prev) =>
      prev.map((item) =>
        isSameVariant(item, id, size, color)
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };

  const selectAll = () => {
    setCart((prev) => prev.map((item) => ({ ...item, selected: true })));
  };

  const unselectAll = () => {
    setCart((prev) => prev.map((item) => ({ ...item, selected: false })));
  };
    
    // 🚀 NEW FUNCTION: Update the size of an existing item in the cart
    const updateCartItemSize = (id, oldSize, color, newSize) => {
        setCart((prev) => {
            // First, find the item to update
            const itemToUpdate = prev.find((item) => isSameVariant(item, id, oldSize, color));
            
            if (!itemToUpdate) return prev;
            
            // 1. Create the new item with the updated size and quantity
            const newItem = {
                ...itemToUpdate,
                selectedSize: newSize,
                // OPTIONAL: Resetting quantity to 1 when size changes might be desired 
                // quantity: 1, 
            };
            
            // 2. Remove the old item from the cart
            const withoutOldItem = prev.filter((item) => !isSameVariant(item, id, oldSize, color));

            // 3. Check if the NEW variant (same ID, new SIZE, same COLOR) already exists
            const existingNewVariant = withoutOldItem.find((item) => isSameVariant(item, id, newSize, color));

            if (existingNewVariant) {
                // If the new size/color variant already exists, merge the quantities
                return withoutOldItem.map((item) => 
                    isSameVariant(item, id, newSize, color) 
                        ? { ...item, quantity: item.quantity + itemToUpdate.quantity } 
                        : item
                );
            }
            
            // 4. If no existing item, just add the new item back
            return [...withoutOldItem, newItem];
        });
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
        clearCart: () => setCart([]),
        updateCartItemSize,
        // 🚀 EXPORT NEW FUNCTION
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