const shoesData = [
  // --- MEN'S SHOES (8) ---
  {
    
    id: 1,
    category: "Men's Shoes",
    name: "Leather Oxford",
    price: 120.00,
    images: [
      "/images/men/B1.png",
      "/images/men/BB1.png",
      "/images/men/BB-1.png"
    ],
    description: "Premium leather Oxford designed for formal and business occasions.",
    sizes: [39, 40, 41, 42, 43]
  },
  {
    id: 2,
    category: "Men's Shoes",
    name: "Casual Loafer",
    price: 85.50,
    images: [
      "/images/men/B2.png",
      "/images/men/BB2.png",
      "/images/men/BB-2.png"
    ],
    description: "Lightweight casual loafers perfect for everyday comfort.",
    sizes: [39, 40, 41, 42, 43]
  },
  {
    id: 3,
    category: "Men's Shoes",
    name: "Running Sneaker",
    price: 95.00,
    images: [
      "/images/men/B3.png",
      "/images/men/BB3.png",
      "/images/men/BB-3.png"
    ],
    description: "High-performance running sneakers engineered for stability and speed.",
    sizes: [39, 40, 41, 42, 44]
  },
  {
    id: 4,
    category: "Men's Shoes",
    name: "Hiking Boot",
    price: 140.00,
    images: [
      "/images/men/B4.png",
      "/images/men/BB4.png",
      "/images/men/BB-4.png"
    ],
    description: "Durable hiking boots built for tough outdoor conditions.",
    sizes: [40, 41, 42, 43, 44]
  },
  {
    id: 5,
    category: "Men's Shoes",
    name: "White Tennis Shoe",
    price: 75.00,
    images: [
      "/images/men/B5.png",
      "/images/men/BB5.png",
      "/images/men/BB-5.png"
    ],
    description: "Classic white tennis shoes perfect for sports or casual outfits.",
    sizes: [39, 40, 41, 42]
  },
  {
    id: 6,
    category: "Men's Shoes",
    name: "Suede Chukka",
    price: 110.00,
    images: [
      "/images/men/B6.png",
      "/images/men/BB6.png",
      "/images/men/BB-6.png"
    ],
    description: "Soft suede chukka boots with modern minimalist styling.",
    sizes: [40, 41, 42, 43]
  },
  {
    id: 7,
    category: "Men's Shoes",
    name: "Classic Derby",
    price: 130.0    ,
    images: [
      "/images/men/B7.png",
      "/images/men/BB7.png",
      "/images/men/BB-7.png"
    ],
    description: "Elegant derby shoes suitable for formal or semi-formal events.",
    sizes: [39, 40, 41, 42, 44]
  },
  {
    id: 8,
    category: "Men's Shoes",
    name: "Slip-on Sandal",
    price: 45.00,
    images: [
      "/images/men/B8.png",
      "/images/men/BB8.png",
      "/images/men/BB-8.png"
    ],
    description: "Comfortable slip-on sandals ideal for warm weather and travel.",
    sizes: [39, 40, 41, 42, 43]
  },
  // --- WOMEN'S SHOES (8) ---
 {
    id: 9,
    category: "Women's Shoes",
    name: "Classic Pump",
    price: 99.99,
    images: [
      "/images/women/G1.png",
      "/images/women/GG1.png", // Corrected
      "/images/women/GG-1.png" // Corrected
    ],
    description: "Timeless high-heel pumps designed for elegance and comfort.",
    sizes: [35, 36, 37, 38, 39, 40]
  },
  {
    id: 10,
    category: "Women's Shoes",
    name: "Ballet Flat",
    price: 65.00,
    images: [
      "/images/women/G2.png",
      "/images/women/GG2.png", // Corrected
      "/images/women/GG-2.png" // Corrected
    ],
    description: "Soft ballet flats perfect for daily wear and effortless style.",
    sizes: [35, 36, 37, 38, 39]
  },
  {
    id: 11,
    category: "Women's Shoes",
    name: "Sport Trainer",
    price: 90.00,
    images: [
      "/images/women/G3.png",
      "/images/women/GG3.png", // Corrected
      "/images/women/GG-3.png" // Corrected
    ],
    description: "Light, flexible sport trainers suitable for gym and outdoor workouts.",
    sizes: [36, 37, 38, 39, 40]
  },
  {
    id: 12,
    category: "Women's Shoes",
    name: "Ankle Boot",
    price: 115.00,
    images: [
      "/images/women/G4.png",
      "/images/women/GG4.png", // Corrected
      "/images/women/GG-4.png" // Corrected
    ],
    description: "Chic ankle boots crafted for comfort and modern fashion.",
    sizes: [36, 37, 38, 39, 40]
  },
  {
    id: 13,
    category: "Women's Shoes",
    name: "Wedge Sandal",
    price: 70.00,
    images: [
      "/images/women/G5.png",
      "/images/women/GG5.png", // Corrected
      "/images/women/GG-5.png" // Corrected
    ],
    description: "Stylish wedge sandals with premium cushioning and support.",
    sizes: [36, 37, 38, 39]
  },
  {
    id: 14,
    category: "Women's Shoes",
    name: "Leather Loafer",
    price: 80.00,
    images: [
      "/images/women/G6.png",
      "/images/women/GG6.png", // Corrected
      "/images/women/GG-6.png" // Corrected
    ],
    description: "Elegant leather loafers offering all-day comfort.",
    sizes: [35, 36, 37, 38, 39, 40]
  },
  {
    id: 15,
    category: "Women's Shoes",
    name: "Heeled Sandal",
    price: 105.00,
    images: [
      "/images/women/G7.png",
      "/images/women/GG7.png", // Corrected
      "/images/women/GG-7.png" // Corrected
    ],
    description: "Modern heeled sandals designed for special events and nights out.",
    sizes: [36, 37, 38, 39, 40]
  },
  {
    id: 16,
    category: "Women's Shoes",
    name: "Knee-High Boot",
    price: 150.00,
    images: [
      "/images/women/G8.png",
      "/images/women/GG8.png", // Corrected
      "/images/women/GG-8.png" // Corrected
    ],
    description: "Premium knee-high boots crafted for both warmth and fashion.",
    sizes: [36, 37, 38, 39, 40, 41]
  },

  // --- BOYS (8) ---
  {
    id: 17,
    category: "Boy's Shoes",
    name: "Blue Runner",
    price: 35.00,
    images: [
      "/images/boys/X1.png",
      "/images/boys/XX1.png", // Corrected
      "/images/boys/XX-1.png" // Corrected
    ],
    description: "Lightweight running shoes designed for active boys.",
    sizes: [30, 31, 32, 33, 34]
  },
  {
    id: 18,
    category: "Boy's Shoes",
    name: "Velcro Sneaker",
    price: 40.00,
    images: [
      "/images/boys/X2.png",
      "/images/boys/XX2.png", // Corrected
      "/images/boys/XX-2.png" // Corrected
    ],
    description: "Easy-strap velcro sneakers for quick on-and-off convenience.",
    sizes: [30, 31, 32, 33, 34]
  },
  {
    id: 19,
    category: "Boy's Shoes",
    name: "Adventure Boot",
    price: 55.00,
    images: [
      "/images/boys/X3.png",
      "/images/boys/XX3.png", // Corrected
      "/images/boys/XX-3.png" // Corrected
    ],
    description: "Sturdy adventure boots built for outdoor play.",
    sizes: [31, 32, 33, 34, 35]
  },
  {
    id: 20,
    category: "Boy's Shoes",
    name: "School Loafer",
    price: 30.00,
    images: [
      "/images/boys/X4.png",
      "/images/boys/XX4.png", // Corrected
      "/images/boys/XX-4.png" // Corrected
    ],
    description: "Classic school loafers designed for uniform use.",
    sizes: [30, 31, 32, 33, 34]
  },
  {
    id: 21,
    category: "Boy's Shoes",
    name: "Sport Sandal",
    price: 25.00,
    images: [
      "/images/boys/X5.png",
      "/images/boys/XX5.png", // Corrected
      "/images/boys/XX-5.png" // Corrected
    ],
    description: "Breathable sport sandals ideal for warm weather.",
    sizes: [30, 31, 32, 33]
  },
  {
    id: 22,
    category: "Boy's Shoes",
    name: "High-Top Sneaker",
    price: 45.00,
    images: [
      "/images/boys/X6.png",
      "/images/boys/XX6.png", // Corrected
      "/images/boys/XX-6.png" // Corrected
    ],
    description: "Trendy high-top sneakers with extra ankle support.",
    sizes: [31, 32, 33, 34]
  },
  {
    id: 23,
    category: "Boy's Shoes",
    name: "Casual Canvas",
    price: 38.00,
    images: [
      "/images/boys/X7.png",
      "/images/boys/XX7.png", // Corrected
      "/images/boys/XX-7.png" // Corrected
    ],
    description: "Stylish canvas shoes perfect for everyday outfits.",
    sizes: [30, 31, 32, 33, 34]
  },
  {
    id: 24,
    category: "Boy's Shoes",
    name: "Rain Boot",
    price: 50.00,
    images: [
      "/images/boys/X8.png",
      "/images/boys/XX8.png", // Corrected
      "/images/boys/XX-8.png" // Corrected
    ],
    description: "Waterproof rain boots ideal for wet and muddy play.",
    sizes: [30, 31, 32, 33]
  },

  // --- GIRLS (8) ---
  {
    id: 25,
    category: "Girl's Shoes",
    name: "Pink Glitter Flat",
    price: 32.00,
    images: [
      "/images/girls/Y1.png",
      "/images/girls/YY1.png", // Corrected
      "/images/girls/YY-1.png" // Corrected
    ],
    description: "Sparkly glitter flats perfect for parties and dress-up.",
    sizes: [28, 29, 30, 31, 32]
  },
  {
    id: 26,
    category: "Girl's Shoes",
    name: "Mary Jane Shoe",
    price: 39.00,
    images: [
      "/images/girls/Y2.png",
      "/images/girls/YY2.png", // Corrected
      "/images/girls/YY-2.png" // Corrected
    ],
    description: "Classic Mary Jane shoes with soft ankle straps.",
    sizes: [28, 29, 30, 31, 32]
  },
  {
    id: 27,
    category: "Girl's Shoes",
    name: "Leopard Sneaker",
    price: 42.00,
    images: [
      "/images/girls/Y3.png",
      "/images/girls/YY3.png", // Corrected
      "/images/girls/YY-3.png" // Corrected
    ],
    description: "Trendy leopard-pattern sneakers for stylish kids.",
    sizes: [29, 30, 31, 32, 33]
  },
  {
    id: 28,
    category: "Girl's Shoes",
    name: "Winter Boot",
    price: 60.00,
    images: [
      "/images/girls/Y4.png",
      "/images/girls/YY4.png", // Corrected
      "/images/girls/YY-4.png" // Corrected
    ],
    description: "Warm, comfortable winter boots perfect for cold weather.",
    sizes: [28, 29, 30, 31, 32, 33]
  },
  {
    id: 29,
    category: "Girl's Shoes",
    name: "Sparkle Sandal",
    price: 28.00,
    images: [
      "/images/girls/Y5.png",
      "/images/girls/YY5.png", // Corrected
      "/images/girls/YY-5.png" // Corrected
    ],
    description: "Cute sparkle sandals designed for summer fun.",
    sizes: [28, 29, 30, 31]
  },
  {
    id: 30,
    category: "Girl's Shoes",
    name: "Ballet Slipper",
    price: 20.00,
    images: [
      "/images/girls/Y6.png",
      "/images/girls/YY6.png", // Corrected
      "/images/girls/YY-6.png" // Corrected
    ],
    description: "Soft ballet slippers ideal for practice or play.",
    sizes: [28, 29, 30, 31]
  },
  {
    id: 31,
    category: "Girl's Shoes",
    name: "Purple Runner",
    price: 37.00,
    images: [
      "/images/girls/Y7.png",
      "/images/girls/YY7.png", // Corrected
      "/images/girls/YY-7.png" // Corrected
    ],
    description: "Colorful running shoes built for active girls.",
    sizes: [28, 29, 30, 31, 32]
  },
  {
    id: 32,
    category: "Girl's Shoes",
    name: "Cute Clog",
    price: 33.00,
    images: [
      "/images/girls/Y8.png",
      "/images/girls/YY8.png", // Corrected
      "/images/girls/YY-8.png" // Corrected
    ],
    description: "Light and breathable clogs for all-day comfort.",
    sizes: [28, 29, 30, 31, 32]
  }

];

export default shoesData;