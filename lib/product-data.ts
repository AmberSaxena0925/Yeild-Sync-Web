export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  subcategory: string
  image: string
  images?: string[]
  brand: string
  inStock: boolean
  stock: number
  rating: number
  reviews: number
  features: string[]
  specifications?: Record<string, string>
  usage?: string
  benefits?: string[]
  tags: string[]
  isNew?: boolean
  isBestseller?: boolean
  discount?: number
}

export const productCategories = [
  { id: "seeds", name: "Seeds", icon: "🌱", count: 45, subcategories: ["Cereal Seeds", "Vegetable Seeds", "Cash Crop Seeds", "Fruit Seeds", "Fodder Seeds"] },
  { id: "fertilizers", name: "Fertilizers", icon: "🧪", count: 32, subcategories: ["Chemical Fertilizers", "Organic Fertilizers", "Bio Fertilizers", "Micronutrients"] },
  { id: "pesticides", name: "Pesticides", icon: "🐛", count: 28, subcategories: ["Insecticides", "Fungicides", "Herbicides", "Plant Growth Regulators"] },
  { id: "equipment", name: "Equipment", icon: "🚜", count: 24, subcategories: ["Tractors", "Harvesters", "Planters", "Sprayers"] },
  { id: "irrigation", name: "Irrigation", icon: "💧", count: 18, subcategories: ["Drip Irrigation", "Sprinkler Systems", "Pumps", "Pipes & Fittings"] },
  { id: "tools", name: "Farming Tools", icon: "🔧", count: 36, subcategories: ["Hand Tools", "Power Tools", "Safety Equipment", "Storage"] },
  { id: "organic", name: "Organic Products", icon: "🌿", count: 22, subcategories: ["Organic Seeds", "Organic Fertilizers", "Natural Pesticides", "Organic Supplements"] },
]

export const priceRanges = [
  { id: "0-500", min: 0, max: 500, label: "Under ₹500" },
  { id: "500-1000", min: 500, max: 1000, label: "₹500 - ₹1000" },
  { id: "1000-2500", min: 1000, max: 2500, label: "₹1000 - ₹2500" },
  { id: "2500-5000", min: 2500, max: 5000, label: "₹2500 - ₹5000" },
  { id: "5000+", min: 5000, max: Infinity, label: "Above ₹5000" },
]

export const sortOptions = [
  { id: "relevance", label: "Relevance", value: "relevance" },
  { id: "price-low", label: "Price: Low to High", value: "price-asc" },
  { id: "price-high", label: "Price: High to Low", value: "price-desc" },
  { id: "rating", label: "Customer Rating", value: "rating" },
  { id: "newest", label: "Newest First", value: "newest" },
  { id: "bestsellers", label: "Best Sellers", value: "bestsellers" },
]

export interface CartItem {
  product: Product
  quantity: number
  selectedVariant?: string
}

export interface ShippingAddress {
  id: string
  name: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  isDefault: boolean
}

export interface Order {
  id: string
  orderNumber: string
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "pending" | "paid" | "failed"
  paymentMethod: string
  shippingAddress: ShippingAddress
  createdAt: Date
  estimatedDelivery?: Date
  trackingNumber?: string
}

export const products: Product[] = [
  {
    id: "wheat-seed-premium",
    name: "Premium Wheat Seeds (HD-2967)",
    description:
      "High-yielding wheat variety with excellent disease resistance and grain quality. Suitable for irrigated conditions in North India.",
    price: 450,
    originalPrice: 550,
    category: "Seeds",
    subcategory: "Cereal Seeds",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b",
    brand: "AgriTech Seeds",
    inStock: true,
    stock: 150,
    rating: 4.5,
    reviews: 128,
    features: [
      "High yield potential: 5.5-6.0 tonnes/hectare",
      "Disease resistant to rust and blight",
      "Early maturity (120-125 days)",
      "Excellent grain quality",
      "Suitable for timely sown conditions",
    ],
    specifications: {
      Germination: "85% minimum",
      Purity: "98% minimum",
      "Seed Rate": "100-125 kg/hectare",
      "Pack Size": "25 kg bag",
      "Shelf Life": "12 months",
    },
    tags: ["wheat", "cereal", "high-yield", "disease-resistant"],
    isBestseller: true,
    discount: 18,
  },

  {
    id: "rice-basmati-1121",
    name: "Basmati Rice Seeds (Pusa Basmati-1121)",
    description:
      "Premium basmati rice variety known for extra-long grain, excellent aroma, and high market value.",
    price: 280,
    category: "Seeds",
    subcategory: "Cereal Seeds",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    brand: "Indian Seeds Corp",
    inStock: true,
    stock: 89,
    rating: 4.7,
    reviews: 95,
    features: [
      "Extra-long grain (8.2mm)",
      "Excellent cooking quality",
      "Aromatic fragrance",
      "High market price",
      "Disease resistant",
    ],
    specifications: {
      Germination: "80% minimum",
      Purity: "97% minimum",
      "Seed Rate": "20-25 kg/hectare",
      "Pack Size": "20 kg bag",
      Yield: "4.5-5.0 tonnes/hectare",
    },
    tags: ["rice", "basmati", "aromatic", "premium"],
    isNew: true,
  },

  {
    id: "tomato-hybrid-arka",
    name: "Tomato Hybrid Seeds (Arka Rakshak)",
    description:
      "High-yielding tomato hybrid with resistance to multiple diseases and excellent fruit quality.",
    price: 850,
    originalPrice: 950,
    category: "Seeds",
    subcategory: "Vegetable Seeds",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa",
    brand: "IIHR Seeds",
    inStock: true,
    stock: 200,
    rating: 4.6,
    reviews: 67,
    features: [
      "Resistant to leaf curl virus",
      "Firm fruits with long shelf life",
      "High yield: 25-30 tonnes/hectare",
      "Suitable for processing",
      "Heat tolerant",
    ],
    specifications: {
      Germination: "75% minimum",
      "Seed Rate": "400-500g/hectare",
      "Pack Size": "10g packet",
      "Fruit Weight": "80-100g",
      "Days to Harvest": "60-65 days",
    },
    tags: ["tomato", "vegetable", "hybrid", "disease-resistant"],
    discount: 11,
  },

  {
    id: "cotton-bt-bollgard",
    name: "Bt Cotton Seeds (Bollgard II)",
    description:
      "Genetically modified cotton with built-in resistance to bollworm pests for higher yields.",
    price: 1200,
    category: "Seeds",
    subcategory: "Cash Crop Seeds",
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757",
    brand: "Mahyco",
    inStock: true,
    stock: 75,
    rating: 4.4,
    reviews: 156,
    features: [
      "Bollworm resistance",
      "High yield potential",
      "Reduced pesticide requirement",
      "Better fiber quality",
      "Adapted to Indian conditions",
    ],
    specifications: {
      Technology: "Bollgard II",
      "Seed Rate": "2-2.5 kg/hectare",
      "Pack Size": "450g packet",
      Yield: "15-20 quintals/hectare",
      Duration: "150-180 days",
    },
    tags: ["cotton", "bt", "cash-crop", "pest-resistant"],
    isBestseller: true,
  },

  {
    id: "npk-20-20-20",
    name: "NPK 20:20:20 Complex Fertilizer",
    description:
      "Balanced NPK fertilizer suitable for all crops and soil types.",
    price: 320,
    category: "Fertilizers",
    subcategory: "Chemical Fertilizers",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b",
    brand: "IFFCO",
    inStock: true,
    stock: 500,
    rating: 4.3,
    reviews: 89,
    features: [
      "Balanced nutrition",
      "Quick absorption",
      "Suitable for all crops",
      "Improves yield quality",
      "Water soluble",
    ],
    specifications: {
      Nitrogen: "20%",
      Phosphorus: "20%",
      Potassium: "20%",
      "Pack Size": "50 kg bag",
      Application: "Soil application",
    },
    tags: ["fertilizer", "npk", "balanced"],
  },

  {
    id: "organic-vermicompost",
    name: "Premium Vermicompost (Organic)",
    description:
      "100% organic vermicompost enriched with beneficial microorganisms.",
    price: 180,
    category: "Fertilizers",
    subcategory: "Organic Fertilizers",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce",
    brand: "Organic Farms",
    inStock: true,
    stock: 300,
    rating: 4.8,
    reviews: 203,
    features: [
      "100% organic",
      "Rich in micronutrients",
      "Improves soil structure",
      "Enhances water retention",
    ],
    specifications: {
      "Organic Matter": "40-45%",
      Nitrogen: "1.5-2.0%",
      Phosphorus: "0.8-1.0%",
      "Pack Size": "50 kg bag",
      pH: "6.5-7.5",
    },
    tags: ["organic", "vermicompost"],
  },

  {
    id: "sprayer-knapsack-16l",
    name: "Knapsack Sprayer (16 Liter)",
    description:
      "High-quality knapsack sprayer for efficient pesticide application.",
    price: 1200,
    originalPrice: 1500,
    category: "Farming Tools",
    subcategory: "Sprayers",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    brand: "Hawkins",
    inStock: true,
    stock: 45,
    rating: 4.5,
    reviews: 78,
    features: [
      "16 liter capacity",
      "Adjustable nozzle",
      "Comfortable shoulder straps",
      "Chemical resistant tank",
    ],
    specifications: {
      Capacity: "16 liters",
      Weight: "2.5 kg",
      Material: "HDPE",
      Warranty: "1 year",
    },
    tags: ["sprayer", "pesticide"],
  },

  {
    id: "water-pump-1hp",
    name: "1 HP Agricultural Water Pump",
    description:
      "Efficient water pump for irrigation with high flow rate.",
    price: 4500,
    originalPrice: 5200,
    category: "Equipment",
    subcategory: "Irrigation Equipment",
    image: "https://images.unsplash.com/photo-1581093588401-12c9e4f8b8e1",
    brand: "Kirloskar",
    inStock: true,
    stock: 15,
    rating: 4.4,
    reviews: 67,
    features: [
      "1 HP motor",
      "High flow rate",
      "Energy efficient",
      "Corrosion resistant",
    ],
    specifications: {
      Power: "1 HP",
      "Flow Rate": "2400 LPH",
      Head: "30 meters",
      Voltage: "220V AC",
    },
    tags: ["pump", "irrigation"],
  },

  {
    id: "drip-irrigation-kit",
    name: "Complete Drip Irrigation Kit (1 Acre)",
    description:
      "Complete drip irrigation system for water-efficient farming.",
    price: 8500,
    category: "Equipment",
    subcategory: "Irrigation Equipment",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    brand: "Jain Irrigation",
    inStock: true,
    stock: 8,
    rating: 4.8,
    reviews: 34,
    features: [
      "Water saving up to 70%",
      "Uniform water distribution",
      "Easy installation",
      "Durable materials",
    ],
    specifications: {
      Coverage: "1 acre",
      "Pipe Size": "16mm main line",
      "Dripper Spacing": "60cm",
      Warranty: "3 years",
    },
    tags: ["drip-irrigation", "water-saving"],
  },

  {
    id: "neem-oil-organic",
    name: "Organic Neem Oil (1 Liter)",
    description:
      "100% pure neem oil for organic pest control.",
    price: 320,
    category: "Organic Products",
    subcategory: "Pest Control",
    image: "https://images.unsplash.com/photo-1615485737457-5b2c1b9b4190",
    brand: "Organic India",
    inStock: true,
    stock: 120,
    rating: 4.6,
    reviews: 156,
    features: [
      "100% organic",
      "Broad spectrum pest control",
      "Safe for beneficial insects",
    ],
    specifications: {
      Volume: "1 Liter",
      Purity: "100%",
      "Shelf Life": "2 years",
    },
    tags: ["neem", "organic"],
  },
]