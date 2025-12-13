// src/pages/ShopPage.jsx
import React, { useMemo } from 'react'; // Added useMemo for performance
import { useLocation } from 'react-router-dom'; // 🟢 NEW: Hook to read URL parameters
import ProductCard from '../components/ProductCard.jsx';
import shoesData from '../data/shoesData.js'; // Import the product data

// Get all unique categories from the data
const categories = [
    "Men's Shoes", 
    "Women's Shoes", 
    "Boy's Shoes", 
    "Girl's Shoes"
];


function ShopPage() {
    // 1. Get the current URL location object
    const location = useLocation(); 

    // 2. Extract the search term from the URL query parameters
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('search'); // Will be the user's search term or null

    // 3. Memoized filtering function for efficiency
    const filteredProducts = useMemo(() => {
        if (!searchTerm) {
            return []; // Return empty if we are not actively searching
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return shoesData.filter(shoe => 
            // Check if the search term matches the name or category
            shoe.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            shoe.category.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]); // Recalculate only when searchTerm changes

    // 4. Determine if we should display the filtered results or the full catalogue
    const isSearching = !!searchTerm;
    const productsToDisplay = isSearching ? filteredProducts : [];


    return (
        <div className="shop-main-content">
            {/* --- Conditional Header Display --- */}
            {isSearching ? (
                // Display search results header
                <>
                    <h1>Search Results for "{searchTerm}"</h1>
                    <p className="subtitle">Found {filteredProducts.length} items matching your criteria.</p>
                </>
            ) : (
                // Display normal catalogue header
                <>
                    <h1>The SoleStyle Collection</h1>
                    <p className="subtitle">Find your next perfect pair from our diverse categories.</p>
                </>
            )}

            {/* --- Conditional Product Grid Display --- */}
            {isSearching ? (
                // Display the single, filtered grid
                <div className="product-grid">
                    {productsToDisplay.length > 0 ? (
                        productsToDisplay.map(shoe => (
                            <ProductCard 
                                key={shoe.id}
                                id={shoe.id}
                                name={shoe.name}
                                price={shoe.price}
                                images={shoe.images}
                            />
                        ))
                    ) : (
                        <p className="no-results">Sorry, no products were found matching "{searchTerm}".</p>
                    )}
                </div>

            ) : (
                // Display the categorized view (original logic)
                categories.map((category) => (
                    <React.Fragment key={category}>
                        <h2 className="category-heading">{category}</h2>
                        
                        <div className="product-grid">
                            {shoesData
                                .filter(shoe => shoe.category === category)
                                .map(shoe => (
                                    <ProductCard
                                        key={shoe.id}
                                        id={shoe.id}
                                        name={shoe.name}
                                        price={shoe.price}
                                        images={shoe.images}
                                    />
                                ))}
                        </div>
                    </React.Fragment>
                ))
            )}
        </div>
    );
}

export default ShopPage;