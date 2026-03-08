export interface Crop {
  id: string
  name: string
  image: string
  category: string
  season: string[]
  soilType: string[]
  region: string[]
  marketPrice: number
  priceUnit: string
  timeToHarvest: string
  estimatedYield: string
  description: string
  difficulty: "Easy" | "Medium" | "Hard"
  guide: {
    soilPreparation: string
    climate: string
    seedSelection: string
    sowingTechniques: string
    fertilization: string
    irrigation: string
    pestManagement: string
    harvesting: string
  }
}

export const crops: Crop[] = [
  {
    id: "wheat",
    name: "Wheat",
    image: "/crops/wheat.png",
    category: "Cereals",
    season: ["Winter", "Spring"],
    soilType: ["Loamy", "Clay"],
    region: ["Northern Plains", "Central Region"],
    marketPrice: 32,
    priceUnit: "per kg",
    timeToHarvest: "120-150 days",
    estimatedYield: "3-5 tonnes/hectare",
    description: "Wheat is a staple cereal grain grown worldwide. It thrives in temperate climates and is essential for bread, pasta, and many food products.",
    difficulty: "Easy",
    guide: {
      soilPreparation: "Prepare the field by deep plowing (20-25 cm) followed by 2-3 harrowings. Ensure good drainage and remove weeds. Apply well-decomposed farmyard manure (10-12 tonnes/hectare) 15-20 days before sowing.",
      climate: "Wheat requires cool weather during vegetative growth (10-15°C) and warm weather during grain filling (21-26°C). Avoid areas with high humidity during grain maturation to prevent fungal diseases.",
      seedSelection: "Choose certified seeds from reliable sources. Popular varieties include HD-2967, PBW-343, and WH-147. Seed rate: 100-125 kg/hectare. Treat seeds with fungicides before sowing.",
      sowingTechniques: "Sow seeds in rows 20-22.5 cm apart at a depth of 5-6 cm. Use seed drills for uniform distribution. Best sowing time: mid-October to mid-November for timely varieties.",
      fertilization: "Apply 120 kg Nitrogen, 60 kg Phosphorus, and 40 kg Potash per hectare. Apply full P and K at sowing; N in 3 splits - at sowing, first irrigation, and second irrigation.",
      irrigation: "Critical stages: Crown root initiation (21 days), tillering (40-45 days), jointing (60-65 days), flowering (80-85 days), milk stage (100-105 days), and dough stage (115-120 days). Total 4-6 irrigations needed.",
      pestManagement: "Monitor for aphids, termites, and stem borers. Apply appropriate insecticides when pest population exceeds threshold. For rust diseases, use resistant varieties and apply fungicides like Propiconazole.",
      harvesting: "Harvest when grains are hard and contain 12-14% moisture. Use combine harvesters for efficient harvesting. Dry grains to 10-12% moisture for safe storage."
    }
  },
     {
    id: "rice",
    name: "Rice",
    image: "/crops/rice.png",
    category: "Cereals",
    season: ["Monsoon", "Summer"],
    soilType: ["Clay", "Loamy"],
    region: ["Eastern Region", "Southern Region", "Coastal Areas"],
    marketPrice: 43,
    priceUnit: "per kg",
    timeToHarvest: "100-150 days",
    estimatedYield: "4-6 tonnes/hectare",
    description: "Rice is a primary food source for more than half the world's population. It grows best in warm, humid conditions with abundant water supply.",
    difficulty: "Medium",
    guide: {
      soilPreparation: "Puddle the field by flooding and plowing 2-3 times. Level the field properly for uniform water distribution. Apply 10-15 tonnes of farmyard manure during land preparation.",
      climate: "Requires warm and humid climate with temperature 20-35°C. Needs abundant water (150-300 cm rainfall or irrigation). High humidity during vegetative phase is beneficial.",
      seedSelection: "Select certified seeds of high-yielding varieties like IR-64, Pusa Basmati-1, or Swarna. Seed rate: 20-25 kg/hectare for transplanting, 60-80 kg/hectare for direct seeding.",
      sowingTechniques: "Raise nursery seedlings for 21-25 days. Transplant 2-3 seedlings per hill at 20x15 cm spacing. Maintain 2-5 cm standing water initially, gradually increasing to 5-10 cm.",
      fertilization: "Apply 120-150 kg N, 60 kg P, and 60 kg K per hectare. Use split application of nitrogen - 50% at transplanting, 25% at tillering, and 25% at panicle initiation.",
      irrigation: "Maintain continuous flooding (5-7 cm) during vegetative phase. Drain field 10-15 days before harvest. Critical stages: transplanting, tillering, panicle initiation, and flowering.",
      pestManagement: "Common pests include stem borer, leaf folder, and brown planthopper. Use integrated pest management combining biological control, resistant varieties, and need-based chemical application.",
      harvesting: "Harvest when 80-85% grains turn golden yellow. Cut panicles, thresh, and dry to 14% moisture content. Use combine harvesters for large-scale operations."
    }
  },
    {
    id: "tomato",
    name: "Tomato",
    image: "/crops/TOMATO.PNG",
    category: "Vegetables",
    season: ["Summer", "Monsoon", "Winter"],
    soilType: ["Loamy", "Sandy Loam"],
    region: ["All Regions"],
    marketPrice: 33,
    priceUnit: "per kg",
    timeToHarvest: "60-90 days",
    estimatedYield: "25-30 tonnes/hectare",
    description: "Tomatoes are versatile vegetables used fresh and processed. They are rich in vitamins and antioxidants, making them valuable both nutritionally and commercially.",
    difficulty: "Easy",
    guide: {
      soilPreparation: "Deep plow the field and mix 20-25 tonnes of well-rotted farmyard manure. Form raised beds or ridges for good drainage. Soil pH should be 6.0-7.0.",
      climate: "Optimal temperature: 21-24°C for growth, 15-20°C for fruit setting. Cannot tolerate frost. Requires 6-8 hours of sunlight daily. Avoid waterlogging.",
      seedSelection: "Choose disease-resistant hybrid varieties like Arka Rakshak, Pusa Ruby, or Cherry tomatoes. Use 400-500g seeds per hectare. Treat seeds with Trichoderma before sowing.",
      sowingTechniques: "Raise seedlings in nursery for 25-30 days. Transplant healthy seedlings at 60x45 cm spacing. Plant in evening hours. Provide support stakes for indeterminate varieties.",
      fertilization: "Apply 200 kg N, 100 kg P, and 100 kg K per hectare. Use fertigation for better nutrient delivery. Apply calcium nitrate to prevent blossom end rot.",
      irrigation: "Use drip irrigation for water efficiency. Water every 3-4 days in summer, 7-8 days in winter. Avoid overhead irrigation to prevent fungal diseases. Maintain consistent moisture.",
      pestManagement: "Watch for whiteflies, thrips, and fruit borers. Common diseases: early blight, late blight, and bacterial wilt. Use IPM strategies including crop rotation and resistant varieties.",
      harvesting: "Harvest at mature green stage for distant markets, pink stage for local markets. Handle carefully to avoid bruising. Multiple harvests over 2-3 months."
    }
  },
    {
    id: "cotton",
    name: "Cotton",
    image: "/crops/cotton.jpg",
    category: "Cash Crops",
    season: ["Monsoon"],
    soilType: ["Black Cotton Soil", "Loamy"],
    region: ["Central Region", "Southern Region", "Western Region"],
    marketPrice: 75,
    priceUnit: "per kg",
    timeToHarvest: "150-180 days",
    estimatedYield: "15-20 quintals/hectare",
    description: "Cotton is a major cash crop providing raw material for the textile industry. It requires careful management but offers good returns for experienced farmers.",
    difficulty: "Hard",
    guide: {
      soilPreparation: "Deep plow during summer to break hard pans. Apply 10-15 tonnes FYM. Form ridges and furrows at 90-120 cm apart. Ensure proper drainage to prevent waterlogging.",
      climate: "Requires warm climate with temperature 21-30°C. Needs 50-100 cm rainfall well-distributed over growing season. Clear sunny days essential during boll development.",
      seedSelection: "Use Bt cotton hybrids for bollworm resistance. Popular varieties: Bollgard II hybrids. Seed rate: 2-2.5 kg/hectare. Treat seeds with imidacloprid for sucking pest protection.",
      sowingTechniques: "Sow on ridges at 90x60 cm spacing. Plant 2 seeds per hill at 3-4 cm depth. Thin to one plant per hill after 15-20 days. Sow with onset of monsoon.",
      fertilization: "Apply 150-180 kg N, 60 kg P, and 60 kg K per hectare. Split nitrogen into 3 doses: at sowing, square formation, and boll development. Use micronutrients as foliar sprays.",
      irrigation: "Critical stages: square formation, flowering, and boll development. Use furrow or drip irrigation. Avoid water stress during flowering. Total 6-8 irrigations in irrigated cotton.",
      pestManagement: "Major pests: bollworms, whitefly, aphids, and jassids. Monitor regularly and use threshold-based pest management. Maintain refuge area (20%) for non-Bt cotton.",
      harvesting: "Start picking when bolls fully open. Pick in 3-4 rounds at 15-day intervals. Avoid picking wet cotton. Store in dry, well-ventilated areas. Grade before sale."
    }
  },
    {
    id: "potato",
    name: "Potato",
    image: "/crops/potato.jpg",
    category: "Vegetables",
    season: ["Winter", "Spring"],
    soilType: ["Sandy Loam", "Loamy"],
    region: ["Northern Plains", "Hills", "Central Region"],
    marketPrice: 22,
    priceUnit: "per kg",
    timeToHarvest: "75-120 days",
    estimatedYield: "25-35 tonnes/hectare",
    description: "Potatoes are versatile vegetables with high demand. They are relatively easy to grow and provide good yields with proper care and management.",
    difficulty: "Easy",
    guide: {
      soilPreparation: "Deep plow and harrow 3-4 times for fine tilth. Add 25-30 tonnes FYM during field preparation. Form ridges 60 cm apart and 15-20 cm high.",
      climate: "Cool season crop requiring 15-25°C during growth. Night temperature below 20°C essential for tuber formation. Frost can damage foliage.",
      seedSelection: "Use certified, disease-free seed potatoes. Popular varieties: Kufri Jyoti, Kufri Pukhraj, Kufri Chipsona. Cut large tubers (50g pieces) ensuring 2-3 eyes per piece.",
      sowingTechniques: "Plant seed pieces 5-7 cm deep at 60x20 cm spacing. Cover with soil and form ridges. Earth up twice: at 30 days and 45 days after planting.",
      fertilization: "Apply 180-200 kg N, 80 kg P, and 100 kg K per hectare. Apply full P and K at planting; N in 2 splits - at planting and first earthing up.",
      irrigation: "Requires frequent light irrigations. Critical stages: stolonization, tuber initiation, and tuber bulking. Avoid waterlogging. Stop irrigation 10-15 days before harvest.",
      pestManagement: "Watch for late blight (most destructive), early blight, and potato tuber moth. Use resistant varieties and preventive fungicide sprays during humid weather.",
      harvesting: "Harvest when leaves turn yellow and dry. Cut haulms 10-15 days before harvest. Avoid injury during digging. Cure tubers for 10-15 days before storage."
    }
  },
    {
    id: "sugarcane",
    name: "Sugarcane",
    image: "/crops/sugarcane.png",
    category: "Cash Crops",
    season: ["Spring", "Autumn"],
    soilType: ["Loamy", "Clay Loam"],
    region: ["Northern Plains", "Southern Region", "Western Region"],
    marketPrice: 10,
    priceUnit: "per kg",
    timeToHarvest: "10-14 months",
    estimatedYield: "80-100 tonnes/hectare",
    description: "Sugarcane is a major commercial crop for sugar production. It requires intensive management but provides high returns and supports rural livelihoods.",
    difficulty: "Hard",
    guide: {
      soilPreparation: "Deep plow (30-40 cm) followed by 2-3 harrowings. Form furrows 75-90 cm apart and 20-25 cm deep. Apply 25-30 tonnes FYM before last plowing.",
      climate: "Tropical climate with 20-35°C temperature. Requires 100-150 cm well-distributed rainfall. High temperature and humidity during vegetative growth; dry, cool weather during maturation.",
      seedSelection: "Use disease-free setts from 9-10 month old cane. Treat setts with fungicide. Each sett should have 2-3 buds. Seed rate: 75,000-80,000 setts per hectare.",
      sowingTechniques: "Plant setts in furrows end-to-end or with slight overlap. Cover with 5-7 cm soil. Plant autumn crop in September-October, spring crop in February-March.",
      fertilization: "Apply 250-300 kg N, 60-80 kg P, and 60 kg K per hectare. Apply N in 3 splits: at planting, 45 days, and 90 days. Use organic manures for better soil health.",
      irrigation: "Heavy water requirement. Irrigate at 7-10 day intervals. Critical stages: germination, tillering, and grand growth period. Reduce irrigation during maturation.",
      pestManagement: "Major pests: borers, termites, and white grubs. Diseases: red rot, smut, and wilt. Use resistant varieties, crop rotation, and integrated pest management.",
      harvesting: "Harvest when cane matures (Brix reading 18-20%). Cut close to ground. Remove trash and top. Transport to mill within 24 hours of cutting."
    }
  },
    {
    id: "onion",
    name: "Onion",
    image: "/crops/onion.jpg",
    category: "Vegetables",
    season: ["Winter", "Summer", "Monsoon"],
    soilType: ["Sandy Loam", "Loamy"],
    region: ["All Regions"],
    marketPrice: 27,
    priceUnit: "per kg",
    timeToHarvest: "90-150 days",
    estimatedYield: "20-25 tonnes/hectare",
    description: "Onions are essential culinary vegetables with year-round demand. They have good storage potential and can be grown in different seasons for continuous supply.",
    difficulty: "Medium",
    guide: {
      soilPreparation: "Prepare fine tilth by plowing and harrowing. Add 15-20 tonnes FYM. Form raised beds (1.2m wide) or flat beds. Soil pH should be 6.0-7.5.",
      climate: "Cool weather (13-24°C) during vegetative growth; warm, dry weather for bulb development. Long days (12-14 hours) favor bulbing. Excess moisture causes rotting.",
      seedSelection: "Popular varieties: Pusa Red, N-53, Agrifound Dark Red. For kharif: Agrifound Dark Red, Baswant-780. Seed rate: 8-10 kg/hectare. Transplant 6-week-old seedlings.",
      sowingTechniques: "Transplant at 15x10 cm spacing on raised beds. Plant at proper depth with bulb base just below soil surface. Apply light irrigation immediately after transplanting.",
      fertilization: "Apply 100-120 kg N, 50-60 kg P, and 80-100 kg K per hectare. Apply all P and K at transplanting. Split N in 2-3 doses during growth period.",
      irrigation: "Light, frequent irrigations. Critical stages: transplanting, bulb initiation, and bulb development. Stop irrigation 15-20 days before harvest for better storage.",
      pestManagement: "Watch for thrips (most damaging), onion fly, and cutworms. Diseases: purple blotch, stemphylium blight, and downy mildew. Use IPM and resistant varieties.",
      harvesting: "Harvest when 50-75% tops fall over naturally. Cure in field for 3-5 days. Cut tops leaving 2.5 cm neck. Grade and store in well-ventilated structures."
    }
  },
    {
    id: "maize",
    name: "Maize (Corn)",
    image: "/crops/maize.jpg",
    category: "Cereals",
    season: ["Monsoon", "Winter", "Spring"],
    soilType: ["Loamy", "Sandy Loam"],
    region: ["All Regions"],
    marketPrice: 23,
    priceUnit: "per kg",
    timeToHarvest: "80-110 days",
    estimatedYield: "4-8 tonnes/hectare",
    description: "Maize is a versatile cereal used for food, feed, and industrial purposes. It adapts to various climates and provides quick returns with proper management.",
    difficulty: "Easy",
    guide: {
      soilPreparation: "Plow field 2-3 times to achieve good tilth. Apply 10-15 tonnes FYM during land preparation. Form ridges 60-75 cm apart for better drainage and root development.",
      climate: "Warm season crop requiring 20-30°C temperature. Cannot tolerate frost. Requires good sunshine and moderate rainfall (50-75 cm). Sensitive to waterlogging.",
      seedSelection: "Use hybrid seeds for higher yields. Popular hybrids: DHM-117, HQPM-1, Vivek Hybrid-9. Seed rate: 20-25 kg/hectare. Treat seeds with fungicide and insecticide.",
      sowingTechniques: "Sow at 60x20 cm spacing for grain, 45x20 cm for fodder. Plant 5-7 cm deep. Sow kharif crop with monsoon onset, rabi crop in October-November.",
      fertilization: "Apply 150-180 kg N, 60-80 kg P, and 40-60 kg K per hectare. Apply full P and K at sowing. Split N: 1/3 at sowing, 1/3 at knee-high, 1/3 at tasseling.",
      irrigation: "Critical stages: knee-high, tasseling, silking, and grain filling. Provide 4-6 irrigations based on soil and weather. Avoid water stress during flowering.",
      pestManagement: "Major pests: stem borer, fall armyworm, and aphids. Diseases: downy mildew, leaf blight, and stalk rot. Use resistant varieties and balanced fertilization.",
      harvesting: "Harvest when husks turn brown and kernels are hard. Check moisture (20-25% for hand harvesting, 18-20% for machine). Dry to 12-13% for safe storage."
    }
  }
]

export const cropCategories = ["All", "Cereals", "Vegetables", "Cash Crops", "Fruits", "Pulses"]
export const seasons = ["All", "Summer", "Monsoon", "Winter", "Spring", "Autumn"]
export const soilTypes = ["All", "Loamy", "Sandy Loam", "Clay", "Black Cotton Soil", "Clay Loam"]
export const regions = ["All", "Northern Plains", "Central Region", "Southern Region", "Eastern Region", "Western Region", "Hills", "Coastal Areas", "All Regions"]

export const weatherConditions = [
  { condition: "Hot & Dry", suitable: ["cotton", "maize", "wheat"] },
  { condition: "Hot & Humid", suitable: ["rice", "sugarcane", "tomato"] },
  { condition: "Cool & Dry", suitable: ["wheat", "potato", "onion"] },
  { condition: "Moderate", suitable: ["tomato", "onion", "maize", "potato"] },
  { condition: "Rainy", suitable: ["rice", "maize", "cotton", "sugarcane"] }
]
