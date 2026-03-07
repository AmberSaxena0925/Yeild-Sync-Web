"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useCart } from "@/lib/cart-context"
import { products, productCategories, priceRanges, sortOptions } from "@/lib/product-data"
import {
  Search,
  ShoppingCart,
  Star,
  Filter,
  Heart,
  TrendingUp,
  Sparkles,
  IndianRupee,
  ChevronRight,
} from "lucide-react"

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubcategory, setSelectedSubcategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)
  const { addToCart, getTotalItems } = useCart()

  const currentCategory = productCategories.find(cat => cat.name === selectedCategory)

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    // Subcategory filter
    if (selectedSubcategory !== "All") {
      result = result.filter((product) => product.subcategory === selectedSubcategory)
    }

    // Price filter
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "featured":
      default:
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
        break
    }

    return result
  }, [searchQuery, selectedCategory, selectedSubcategory, priceRange, sortBy])

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-200 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <ShoppingCart className="h-4 w-4" />
                Agricultural E-Commerce Store
              </div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Farming Products & Equipment
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Quality seeds, fertilizers, tools, and equipment for modern farming
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="border-b border-border bg-card py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Desktop Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Categories</SelectItem>
                    {productCategories.map((cat) => (
                      <SelectItem key={cat.name} value={cat.name}>
                        {cat.icon} {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {currentCategory && (
                  <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Subcategories</SelectItem>
                      {currentCategory.subcategories.map((sub) => (
                        <SelectItem key={sub} value={sub}>
                          {sub}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Mobile Filter Trigger */}
                <Sheet open={showFilters} onOpenChange={setShowFilters}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <Filter className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      {/* Price Range */}
                      <div>
                        <h3 className="mb-4 font-medium">Price Range</h3>
                        <div className="space-y-3">
                          <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            max={10000}
                            step={100}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{formatPrice(priceRange[0])}</span>
                            <span>{formatPrice(priceRange[1])}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Desktop Sidebar Filters */}
              <aside className="hidden w-64 shrink-0 lg:block">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-semibold">Filters</h3>
                    
                    {/* Price Range */}
                    <div className="mb-6">
                      <h4 className="mb-4 font-medium">Price Range</h4>
                      <div className="space-y-3">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={10000}
                          step={100}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{formatPrice(priceRange[0])}</span>
                          <span>{formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Filters */}
                    <div>
                      <h4 className="mb-4 font-medium">Quick Filters</h4>
                      <div className="space-y-2">
                        {[
                          { label: "Bestsellers", value: "bestseller" },
                          { label: "New Arrivals", value: "new" },
                          { label: "On Sale", value: "discount" },
                        ].map((filter) => (
                          <div key={filter.value} className="flex items-center space-x-2">
                            <Checkbox id={filter.value} />
                            <label
                              htmlFor={filter.value}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {filter.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              {/* Products */}
              <div className="flex-1">
                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-muted-foreground">
                    Showing {filteredAndSortedProducts.length} products
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredAndSortedProducts.map((product) => (
                    <Card key={product.id} className="group border-border hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="relative mb-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-48 w-full rounded-lg object-cover bg-muted"
                          />
                          {product.isNew && (
                            <Badge className="absolute left-2 top-2 bg-green-500">
                              <Sparkles className="mr-1 h-3 w-3" />
                              New
                            </Badge>
                          )}
                          {product.isBestseller && (
                            <Badge className="absolute left-2 top-2 bg-orange-500">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              Bestseller
                            </Badge>
                          )}
                          {product.discount && (
                            <Badge className="absolute right-2 top-2 bg-red-500">
                              {product.discount}% OFF
                            </Badge>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute right-2 top-12 h-8 w-8 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-muted-foreground">{product.brand}</p>
                            <h3 className="line-clamp-2 font-medium text-sm">
                              <Link 
                                href={`/products/${product.id}`}
                                className="hover:text-primary transition-colors"
                              >
                                {product.name}
                              </Link>
                            </h3>
                          </div>

                          <div className="flex items-center gap-1">
                            {renderStars(product.rating)}
                            <span className="text-xs text-muted-foreground">
                              ({product.reviews})
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {product.discount ? (
                              <>
                                <span className="font-semibold text-primary">
                                  {formatPrice(product.price * (1 - product.discount / 100))}
                                </span>
                                <span className="text-sm text-muted-foreground line-through">
                                  {formatPrice(product.price)}
                                </span>
                              </>
                            ) : (
                              <span className="font-semibold text-primary">
                                {formatPrice(product.price)}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <Badge 
                              variant={product.inStock ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {product.inStock ? `In Stock (${product.stock})` : "Out of Stock"}
                            </Badge>
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(product)}
                              disabled={!product.inStock}
                              className="h-8 px-3"
                            >
                              <ShoppingCart className="mr-1 h-3 w-3" />
                              Add
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* No Results */}
                {filteredAndSortedProducts.length === 0 && (
                  <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
                    <ShoppingCart className="mb-4 h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mb-2 text-lg font-medium text-foreground">
                      No products found
                    </h3>
                    <p className="max-w-sm text-muted-foreground">
                      Try adjusting your search or filters to find what you're looking for.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}