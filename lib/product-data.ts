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
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentStatus: 'pending' | 'paid' | 'failed'
  paymentMethod: string
  shippingAddress: ShippingAddress
  createdAt: Date
  estimatedDelivery?: Date
  trackingNumber?: string
}

// Agricultural Products Data
export const products: Product[] = [
  // Seeds Category
  {
    id: "wheat-seed-premium",
    name: "Premium Wheat Seeds (HD-2967)",
    description: "High-yielding wheat variety with excellent disease resistance and grain quality. Suitable for irrigated conditions in North India.",
    price: 450,
    originalPrice: 550,
    category: "Seeds",
    subcategory: "Cereal Seeds",
    image: "/products/wheat-seeds.jpg",
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
      "Suitable for timely sown conditions"
    ],
    specifications: {
      "Germination": "85% minimum",
      "Purity": "98% minimum",
      "Seed Rate": "100-125 kg/hectare",
      "Pack Size": "25 kg bag",
      "Shelf Life": "12 months"
    },
    tags: ["wheat", "cereal", "high-yield", "disease-resistant"],
    isBestseller: true,
    discount: 18
  },
  {
    id: "rice-basmati-1121",
    name: "Basmati Rice Seeds (Pusa Basmati-1121)",
    description: "Premium basmati rice variety known for extra-long grain, excellent aroma, and high market value.",
    price: 280,
    category: "Seeds",
    subcategory: "Cereal Seeds",
    image: "/products/basmati-rice.jpg",
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
      "Disease resistant"
    ],
    specifications: {
      "Germination": "80% minimum",
      "Purity": "97% minimum",
      "Seed Rate": "20-25 kg/hectare",
      "Pack Size": "20 kg bag",
      "Yield": "4.5-5.0 tonnes/hectare"
    },
    tags: ["rice", "basmati", "aromatic", "premium"],
    isNew: true
  },
  {
    id: "tomato-hybrid-arka",
    name: "Tomato Hybrid Seeds (Arka Rakshak)",
    description: "High-yielding tomato hybrid with resistance to multiple diseases and excellent fruit quality.",
    price: 850,
    originalPrice: 950,
    category: "Seeds",
    subcategory: "Vegetable Seeds",
    image: "/products/tomato-seeds.jpg",
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
      "Heat tolerant"
    ],
    specifications: {
      "Germination": "75% minimum",
      "Seed Rate": "400-500g/hectare",
      "Pack Size": "10g packet",
      "Fruit Weight": "80-100g",
      "Days to Harvest": "60-65 days"
    },
    tags: ["tomato", "vegetable", "hybrid", "disease-resistant"],
    discount: 11
  },
  {
    id: "cotton-bt-bollgard",
    name: "Bt Cotton Seeds (Bollgard II)",
    description: "Genetically modified cotton with built-in resistance to bollworm pests for higher yields and reduced pesticide use.",
    price: 1200,
    category: "Seeds",
    subcategory: "Cash Crop Seeds",
    image: "/products/cotton-bt.jpg",
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
      "Adapted to Indian conditions"
    ],
    specifications: {
      "Technology": "Bollgard II",
      "Seed Rate": "2-2.5 kg/hectare",
      "Pack Size": "450g packet",
      "Yield": "15-20 quintals/hectare",
      "Duration": "150-180 days"
    },
    tags: ["cotton", "bt", "cash-crop", "pest-resistant"],
    isBestseller: true
  },

  // Fertilizers Category
  {
    id: "npk-20-20-20",
    name: "NPK 20:20:20 Complex Fertilizer",
    description: "Balanced NPK fertilizer suitable for all crops and soil types. Provides essential nutrients for healthy plant growth.",
    price: 320,
    category: "Fertilizers",
    subcategory: "Chemical Fertilizers",
    image: "/products/npk-fertilizer.jpg",
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
      "Water soluble"
    ],
    specifications: {
      "Nitrogen": "20%",
      "Phosphorus": "20%",
      "Potassium": "20%",
      "Pack Size": "50 kg bag",
      "Application": "Soil application"
    },
    tags: ["fertilizer", "npk", "balanced", "all-crops"],
    isBestseller: true
  },
  {
    id: "organic-vermicompost",
    name: "Premium Vermicompost (Organic)",
    description: "100% organic vermicompost enriched with beneficial microorganisms for soil health and plant nutrition.",
    price: 180,
    category: "Fertilizers",
    subcategory: "Organic Fertilizers",
    image: "/products/vermicompost.jpg",
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
      "Safe for all crops"
    ],
    specifications: {
      "Organic Matter": "40-45%",
      "Nitrogen": "1.5-2.0%",
      "Phosphorus": "0.8-1.0%",
      "Pack Size": "50 kg bag",
      "pH": "6.5-7.5"
    },
    tags: ["organic", "vermicompost", "soil-health", "micronutrients"],
    isNew: true
  },
  {
    id: "urea-46-percent",
    name: "Urea 46% Nitrogen Fertilizer",
    description: "High-concentration nitrogen fertilizer for rapid plant growth and increased protein content in crops.",
    price: 280,
    category: "Fertilizers",
    subcategory: "Chemical Fertilizers",
    image: "/products/urea.jpg",
    brand: "National Fertilizers",
    inStock: true,
    stock: 1000,
    rating: 4.2,
    reviews: 145,
    features: [
      "High nitrogen content (46%)",
      "Quick green effect",
      "Cost effective",
      "Easy to apply",
      "Suitable for all crops"
    ],
    specifications: {
      "Nitrogen": "46% minimum",
      "Pack Size": "50 kg bag",
      "Application": "Top dressing",
      "Solubility": "Highly soluble"
    },
    tags: ["urea", "nitrogen", "growth", "protein"]
  },

  // Farming Tools Category
  {
    id: "sprayer-knapsack-16l",
    name: "Knapsack Sprayer (16 Liter)",
    description: "High-quality knapsack sprayer for efficient pesticide and fertilizer application in small to medium farms.",
    price: 1200,
    originalPrice: 1500,
    category: "Farming Tools",
    subcategory: "Sprayers",
    image: "/products/knapsack-sprayer.jpg",
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
      "Easy to clean"
    ],
    specifications: {
      "Capacity": "16 liters",
      "Weight": "2.5 kg (empty)",
      "Material": "HDPE",
      "Pressure": "0.2-0.4 MPa",
      "Warranty": "1 year"
    },
    tags: ["sprayer", "pesticide", "fertilizer", "application"],
    discount: 20
  },
  {
    id: "pruning-saw-professional",
    name: "Professional Pruning Saw",
    description: "High-quality pruning saw for maintaining orchards and gardens with precision cutting.",
    price: 450,
    category: "Farming Tools",
    subcategory: "Cutting Tools",
    image: "/products/pruning-saw.jpg",
    brand: "Stanley",
    inStock: true,
    stock: 67,
    rating: 4.6,
    reviews: 92,
    features: [
      "Sharp carbon steel blade",
      "Ergonomic handle",
      "Safety lock",
      "Lightweight design",
      "Rust resistant"
    ],
    specifications: {
      "Blade Length": "10 inches",
      "Material": "Carbon Steel",
      "Handle": "Rubber grip",
      "Weight": "350 grams"
    },
    tags: ["pruning", "cutting", "orchard", "maintenance"]
  },
  {
    id: "soil-test-kit-digital",
    name: "Digital Soil Testing Kit",
    description: "Professional soil testing kit for analyzing pH, nitrogen, phosphorus, and potassium levels in soil.",
    price: 3500,
    category: "Farming Tools",
    subcategory: "Testing Equipment",
    image: "/products/soil-test-kit.jpg",
    brand: "AgriTest",
    inStock: true,
    stock: 23,
    rating: 4.7,
    reviews: 45,
    features: [
      "Digital display",
      "Tests pH, N, P, K",
      "Portable design",
      "Battery operated",
      "Easy calibration"
    ],
    specifications: {
      "Parameters": "pH, N, P, K",
      "Display": "Digital LCD",
      "Power": "2 AA batteries",
      "Accuracy": "±0.1 pH",
      "Warranty": "2 years"
    },
    tags: ["soil-test", "digital", "analysis", "nutrients"],
    isNew: true
  },

  // Equipment Category
  {
    id: "water-pump-1hp",
    name: "1 HP Agricultural Water Pump",
    description: "Efficient water pump for irrigation with high flow rate and low power consumption.",
    price: 4500,
    originalPrice: 5200,
    category: "Equipment",
    subcategory: "Irrigation Equipment",
    image: "/products/water-pump.jpg",
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
      "Easy maintenance"
    ],
    specifications: {
      "Power": "1 HP (0.75 kW)",
      "Flow Rate": "2400 LPH",
      "Head": "30 meters",
      "Voltage": "220V AC",
      "Warranty": "2 years"
    },
    tags: ["pump", "irrigation", "water", "motor"],
    discount: 13
  },
  {
    id: "drip-irrigation-kit",
    name: "Complete Drip Irrigation Kit (1 Acre)",
    description: "Complete drip irrigation system for water-efficient farming covering up to 1 acre of land.",
    price: 8500,
    category: "Equipment",
    subcategory: "Irrigation Equipment",
    image: "/products/drip-irrigation.jpg",
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
      "Includes all accessories"
    ],
    specifications: {
      "Coverage": "1 acre",
      "Pipe Size": "16mm main line",
      "Dripper Spacing": "60cm",
      "Operating Pressure": "1.0 kg/cm²",
      "Warranty": "3 years"
    },
    tags: ["drip-irrigation", "water-saving", "efficient", "complete-kit"],
    isBestseller: true
  },

  // Organic Products Category
  {
    id: "neem-oil-organic",
    name: "Organic Neem Oil (1 Liter)",
    description: "100% pure neem oil for organic pest control and plant protection. Safe for environment and beneficial insects.",
    price: 320,
    category: "Organic Products",
    subcategory: "Pest Control",
    image: "/products/neem-oil.jpg",
    brand: "Organic India",
    inStock: true,
    stock: 120,
    rating: 4.6,
    reviews: 156,
    features: [
      "100% organic",
      "Broad spectrum pest control",
      "Safe for beneficial insects",
      "Biodegradable",
      "Multi-purpose use"
    ],
    specifications: {
      "Volume": "1 Liter",
      "Purity": "100% cold pressed",
      "Azadirachtin": "1500-3000 ppm",
      "Shelf Life": "2 years",
      "Application": "Foliar spray"
    },
    tags: ["neem", "organic", "pest-control", "biopesticide"]
  },
  {
    id: "bio-fertilizer-azospirillum",
    name: "Bio-Fertilizer Azospirillum (1 kg)",
    description: "Nitrogen-fixing bio-fertilizer for improving soil fertility and reducing chemical fertilizer dependency.",
    price: 180,
    category: "Organic Products",
    subcategory: "Bio-fertilizers",
    image: "/products/azospirillum.jpg",
    brand: "BioAgri",
    inStock: true,
    stock: 200,
    rating: 4.4,
    reviews: 89,
    features: [
      "Nitrogen fixation",
      "Improves root development",
      "Reduces fertilizer requirement",
      "Environment friendly",
      "Cost effective"
    ],
    specifications: {
      "Weight": "1 kg",
      "CFU Count": "10^8 CFU/g minimum",
      "Carrier": "Peat based",
      "Shelf Life": "6 months",
      "Application": "Seed treatment"
    },
    tags: ["bio-fertilizer", "nitrogen", "organic", "soil-health"]
  }
]

export const productCategories = [
  {
    name: "Seeds",
    subcategories: ["Cereal Seeds", "Vegetable Seeds", "Cash Crop Seeds", "Fruit Seeds", "Pulse Seeds"],
    icon: "🌱"
  },
  {
    name: "Fertilizers",
    subcategories: ["Chemical Fertilizers", "Organic Fertilizers", "Bio-fertilizers", "Micronutrients"],
    icon: "🧪"
  },
  {
    name: "Farming Tools",
    subcategories: ["Cutting Tools", "Sprayers", "Testing Equipment", "Hand Tools", "Power Tools"],
    icon: "🔧"
  },
  {
    name: "Equipment",
    subcategories: ["Irrigation Equipment", "Processing Equipment", "Harvesting Tools", "Storage Equipment"],
    icon: "⚙️"
  },
  {
    name: "Organic Products",
    subcategories: ["Pest Control", "Bio-fertilizers", "Growth Promoters", "Soil Conditioners"],
    icon: "🌿"
  },
  {
    name: "Plant Protection",
    subcategories: ["Insecticides", "Fungicides", "Herbicides", "Bio-pesticides"],
    icon: "🛡️"
  }
]

export const priceRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
  { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
  { label: "Above ₹10000", min: 10000, max: Infinity }
]

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Customer Rating" },
  { value: "newest", label: "Newest First" },
  { value: "name", label: "Name: A to Z" }
]