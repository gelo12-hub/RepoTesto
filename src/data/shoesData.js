// shoesData.js

// Define the standardized size lists
const STANDARD_ADULT_SIZES = [38, 39, 40, 41, 42, 43];
const STANDARD_KID_SIZES = [30, 31, 32, 33, 34, 35, 36]; // New standard size range: 30-36

const shoesData = [
  // --- MEN'S SHOES (8) ---
  {
    id: 1,
    category: "Men's Shoes",
    name: "Leather Oxford",
    price: 587.42,
    images: [
      "/images/men/B1.png",
      "/images/men/BB1.png",
      "/images/men/BB-1.png"
    ],
    description: "Premium leather Oxford designed for formal and business occasions.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 2,
    category: "Men's Shoes",
    name: "Casual Loafer",
    price: 903.11,
    images: [
      "/images/men/B2.png",
      "/images/men/BB2.png",
      "/images/men/BB-2.png"
    ],
    description: "Lightweight casual loafers perfect for everyday comfort.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 3,
    category: "Men's Shoes",
    name: "Running Sneaker",
    price: 764.55,
    images: [
      "/images/men/B3.png",
      "/images/men/BB3.png",
      "/images/men/BB-3.png"
    ],
    description: "High-performance running sneakers engineered for stability and speed.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 4,
    category: "Men's Shoes",
    name: "Hiking Boot",
    price: 512.08,
    images: [
      "/images/men/B4.png",
      "/images/men/BB4.png",
      "/images/men/BB-4.png"
    ],
    description: "Durable hiking boots built for tough outdoor conditions.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 5,
    category: "Men's Shoes",
    name: "White Tennis Shoe",
    price: 649.77,
    images: [
      "/images/men/B5.png",
      "/images/men/BB5.png",
      "/images/men/BB-5.png"
    ],
    description: "Classic white tennis shoes perfect for sports or casual outfits.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 6,
    category: "Men's Shoes",
    name: "Suede Chukka",
    price: 888.20,
    images: [
      "/images/men/B6.png",
      "/images/men/BB6.png",
      "/images/men/BB-6.png"
    ],
    description: "Soft suede chukka boots with modern minimalist styling.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 7,
    category: "Men's Shoes",
    name: "Classic Derby",
    price: 533.94,
    images: [
      "/images/men/B7.png",
      "/images/men/BB7.png",
      "/images/men/BB-7.png"
    ],
    description: "Elegant derby shoes suitable for formal or semi-formal events.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 8,
    category: "Men's Shoes",
    name: "Slip-on Sandal",
    price: 701.63,
    images: [
      "/images/men/B8.png",
      "/images/men/BB8.png",
      "/images/men/BB-8.png"
    ],
    description: "Comfortable slip-on sandals ideal for warm weather and travel.",
    sizes: STANDARD_ADULT_SIZES
  },

  // --- WOMEN'S SHOES (8) ---
  {
    id: 9,
    category: "Women's Shoes",
    name: "Classic Pump",
    price: 945.10,
    images: [
      "/images/women/G1.png",
      "/images/women/GG1.png",
      "/images/women/GG-1.png"
    ],
    description: "Timeless high-heel pumps designed for elegance and comfort.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 10,
    category: "Women's Shoes",
    name: "Ballet Flat",
    price: 582.39,
    images: [
      "/images/women/G2.png",
      "/images/women/GG2.png",
      "/images/women/GG-2.png"
    ],
    description: "Soft ballet flats perfect for daily wear and effortless style.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 11,
    category: "Women's Shoes",
    name: "Sport Trainer",
    price: 799.02,
    images: [
      "/images/women/G3.png",
      "/images/women/GG3.png",
      "/images/women/GG-3.png"
    ],
    description: "Light, flexible sport trainers suitable for gym and outdoor workouts.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 12,
    category: "Women's Shoes",
    name: "Ankle Boot",
    price: 624.88,
    images: [
      "/images/women/G4.png",
      "/images/women/GG4.png",
      "/images/women/GG-4.png"
    ],
    description: "Chic ankle boots crafted for comfort and modern fashion.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 13,
    category: "Women's Shoes",
    name: "Wedge Sandal",
    price: 573.41,
    images: [
      "/images/women/G5.png",
      "/images/women/GG5.png",
      "/images/women/GG-5.png"
    ],
    description: "Stylish wedge sandals with premium cushioning and support.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 14,
    category: "Women's Shoes",
    name: "Leather Loafer",
    price: 820.67,
    images: [
      "/images/women/G6.png",
      "/images/women/GG6.png",
      "/images/women/GG-6.png"
    ],
    description: "Elegant leather loafers offering all-day comfort.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 15,
    category: "Women's Shoes",
    name: "Heeled Sandal",
    price: 931.22,
    images: [
      "/images/women/G7.png",
      "/images/women/GG7.png",
      "/images/women/GG-7.png"
    ],
    description: "Modern heeled sandals designed for special events and nights out.",
    sizes: STANDARD_ADULT_SIZES
  },
  {
    id: 16,
    category: "Women's Shoes",
    name: "Knee-High Boot",
    price: 689.04,
    images: [
      "/images/women/G8.png",
      "/images/women/GG8.png",
      "/images/women/GG-8.png"
    ],
    description: "Premium knee-high boots crafted for both warmth and fashion.",
    sizes: STANDARD_ADULT_SIZES
  },

  // --- BOYS (8) ---
  {
    id: 17,
    category: "Boy's Shoes",
    name: "Blue Runner",
    price: 758.19,
    images: [
      "/images/boys/X1.png",
      "/images/boys/XX1.png",
      "/images/boys/XX-1.png"
    ],
    description: "Lightweight running shoes designed for active boys.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 18,
    category: "Boy's Shoes",
    name: "Velcro Sneaker",
    price: 540.66,
    images: [
      "/images/boys/X2.png",
      "/images/boys/XX2.png",
      "/images/boys/XX-2.png"
    ],
    description: "Easy-strap velcro sneakers for quick on-and-off convenience.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 19,
    category: "Boy's Shoes",
    name: "Adventure Boot",
    price: 874.33,
    images: [
      "/images/boys/X3.png",
      "/images/boys/XX3.png",
      "/images/boys/XX-3.png"
    ],
    description: "Sturdy adventure boots built for outdoor play.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 20,
    category: "Boy's Shoes",
    name: "School Loafer",
    price: 927.51,
    images: [
      "/images/boys/X4.png",
      "/images/boys/XX4.png",
      "/images/boys/XX-4.png"
    ],
    description: "Classic school loafers designed for uniform use.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 21,
    category: "Boy's Shoes",
    name: "Sport Sandal",
    price: 600.14,
    images: [
      "/images/boys/X5.png",
      "/images/boys/XX5.png",
      "/images/boys/XX-5.png"
    ],
    description: "Breathable sport sandals ideal for warm weather.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 22,
    category: "Boy's Shoes",
    name: "High-Top Sneaker",
    price: 915.98,
    images: [
      "/images/boys/X6.png",
      "/images/boys/XX6.png",
      "/images/boys/XX-6.png"
    ],
    description: "Trendy high-top sneakers with extra ankle support.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 23,
    category: "Boy's Shoes",
    name: "Casual Canvas",
    price: 547.29,
    images: [
      "/images/boys/X7.png",
      "/images/boys/XX7.png",
      "/images/boys/XX-7.png"
    ],
    description: "Stylish canvas shoes perfect for everyday outfits.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 24,
    category: "Boy's Shoes",
    name: "Rain Boot",
    price: 881.73,
    images: [
      "/images/boys/X8.png",
      "/images/boys/XX8.png",
      "/images/boys/XX-8.png"
    ],
    description: "Waterproof rain boots ideal for wet and muddy play.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },

  // --- GIRLS (8) ---
  {
    id: 25,
    category: "Girl's Shoes",
    name: "Pink Glitter Flat",
    price: 763.44,
    images: [
      "/images/girls/Y1.png",
      "/images/girls/YY1.png",
      "/images/girls/YY-1.png"
    ],
    description: "Sparkly glitter flats perfect for parties and dress-up.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 26,
    category: "Girl's Shoes",
    name: "Mary Jane Shoe",
    price: 578.95,
    images: [
      "/images/girls/Y2.png",
      "/images/girls/YY2.png",
      "/images/girls/YY-2.png"
    ],
    description: "Classic Mary Jane shoes with soft ankle straps.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 27,
    category: "Girl's Shoes",
    name: "Leopard Sneaker",
    price: 999.30,
    images: [
      "/images/girls/Y3.png",
      "/images/girls/YY3.png",
      "/images/girls/YY-3.png"
    ],
    description: "Trendy leopard-pattern sneakers for stylish kids.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 28,
    category: "Girl's Shoes",
    name: "Winter Boot",
    price: 834.17,
    images: [
      "/images/girls/Y4.png",
      "/images/girls/YY4.png",
      "/images/girls/YY-4.png"
    ],
    description: "Warm, comfortable winter boots perfect for cold weather.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 29,
    category: "Girl's Shoes",
    name: "Sparkle Sandal",
    price: 690.82,
    images: [
      "/images/girls/Y5.png",
      "/images/girls/YY5.png",
      "/images/girls/YY-5.png"
    ],
    description: "Cute sparkle sandals designed for summer fun.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 30,
    category: "Girl's Shoes",
    name: "Ballet Slipper",
    price: 521.06,
    images: [
      "/images/girls/Y6.png",
      "/images/girls/YY6.png",
      "/images/girls/YY-6.png"
    ],
    description: "Soft ballet slippers ideal for practice or play.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 31,
    category: "Girl's Shoes",
    name: "Purple Runner",
    price: 750.59,
    images: [
      "/images/girls/Y7.png",
      "/images/girls/YY7.png",
      "/images/girls/YY-7.png"
    ],
    description: "Colorful running shoes built for active girls.",
    sizes: STANDARD_KID_SIZES // UPDATED
  },
  {
    id: 32,
    category: "Girl's Shoes",
    name: "Cute Clog",
    price: 612.47,
    images: [
      "/images/girls/Y8.png",
      "/images/girls/YY8.png",
      "/images/girls/YY-8.png"
    ],
    description: "Light and breathable clogs for all-day comfort.",
    sizes: STANDARD_KID_SIZES // UPDATED
  }
];

export default shoesData;