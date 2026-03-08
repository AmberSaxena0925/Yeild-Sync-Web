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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { crops, cropCategories } from "@/lib/crop-data"
import {
  TrendingUp,
  TrendingDown,
  ArrowUpDown,
  Search,
  Leaf,
  BarChart3,
  ArrowRight,
} from "lucide-react"

export default function MarketPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none")

  const filteredAndSortedCrops = useMemo(() => {
    let result = [...crops]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (crop) =>
          crop.name.toLowerCase().includes(query) ||
          crop.category.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (category !== "All") {
      result = result.filter((crop) => crop.category === category)
    }

    // Sort by price
    if (sortOrder === "asc") {
      result.sort((a, b) => a.marketPrice - b.marketPrice)
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.marketPrice - a.marketPrice)
    }

    return result
  }, [searchQuery, category, sortOrder])

  const averagePrice =
    filteredAndSortedCrops.reduce((sum, crop) => sum + crop.marketPrice, 0) /
    (filteredAndSortedCrops.length || 1)

  const highestPrice = Math.max(
    ...filteredAndSortedCrops.map((c) => c.marketPrice),
    0
  )
  const lowestPrice = Math.min(
    ...filteredAndSortedCrops.map((c) => c.marketPrice),
    0
  )

  const toggleSort = () => {
    if (sortOrder === "none") setSortOrder("desc")
    else if (sortOrder === "desc") setSortOrder("asc")
    else setSortOrder("none")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/50 py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <BarChart3 className="h-4 w-4" />
                Market Intelligence
              </div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Crop Market Prices
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Compare current market prices and plan your crops for maximum profitability
              </p>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="border-b border-border bg-card py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="border-border">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-1/10 text-chart-1">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Highest Price
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      ₹{highestPrice.toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Average Price
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      ₹{averagePrice.toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                    <TrendingDown className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lowest Price</p>
                    <p className="text-2xl font-bold text-foreground">
                      ₹{lowestPrice.toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Market Table */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 gap-3">
                <div className="relative flex-1 max-w-xs">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search crops..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by price:</span>
                <Button
                  variant={sortOrder !== "none" ? "default" : "outline"}
                  size="sm"
                  onClick={toggleSort}
                >
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  {sortOrder === "desc"
                    ? "High to Low"
                    : sortOrder === "asc"
                    ? "Low to High"
                    : "Default"}
                </Button>
              </div>
            </div>

            {/* Table */}
            <Card className="border-border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[250px]">Crop</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Season</TableHead>
                      <TableHead>Time to Harvest</TableHead>
                      <TableHead className="text-right">Market Price</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAndSortedCrops.map((crop) => (
                      <TableRow key={crop.id} className="hover:bg-muted/30">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <Leaf className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {crop.name}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{crop.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {crop.season.slice(0, 2).map((s) => (
                              <Badge
                                key={s}
                                variant="outline"
                                className="text-xs"
                              >
                                {s}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {crop.timeToHarvest}
                        </TableCell>
                        <TableCell className="text-right">
                          <span className="text-lg font-semibold text-primary">
                            ₹{crop.marketPrice}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {" "}
                            {crop.priceUnit}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/crops/${crop.id}`}>
                              View Guide
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {filteredAndSortedCrops.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center mt-4">
                <Leaf className="mb-4 h-12 w-12 text-muted-foreground/50" />
                <h3 className="mb-2 text-lg font-medium text-foreground">
                  No crops found
                </h3>
                <p className="max-w-sm text-muted-foreground">
                  Try adjusting your search or category filter.
                </p>
              </div>
            )}

            <p className="mt-4 text-sm text-muted-foreground text-center">
              Showing {filteredAndSortedCrops.length} of {crops.length} crops
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
