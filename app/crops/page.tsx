"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CropCard } from "@/components/crop-card"
import { CropFilters } from "@/components/crop-filters"
import { crops } from "@/lib/crop-data"
import { Leaf } from "lucide-react"

export default function CropsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [season, setSeason] = useState("All")
  const [soilType, setSoilType] = useState("All")
  const [region, setRegion] = useState("All")
  const [priceSort, setPriceSort] = useState("none")

  const filteredCrops = useMemo(() => {
    let result = [...crops]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (crop) =>
          crop.name.toLowerCase().includes(query) ||
          crop.description.toLowerCase().includes(query) ||
          crop.category.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (category !== "All") {
      result = result.filter((crop) => crop.category === category)
    }

    // Season filter
    if (season !== "All") {
      result = result.filter((crop) => crop.season.includes(season))
    }

    // Soil type filter
    if (soilType !== "All") {
      result = result.filter((crop) => crop.soilType.includes(soilType))
    }

    // Region filter
    if (region !== "All") {
      result = result.filter(
        (crop) =>
          crop.region.includes(region) || crop.region.includes("All Regions")
      )
    }

    // Price sorting
    if (priceSort === "low-to-high") {
      result.sort((a, b) => a.marketPrice - b.marketPrice)
    } else if (priceSort === "high-to-low") {
      result.sort((a, b) => b.marketPrice - a.marketPrice)
    }

    return result
  }, [searchQuery, category, season, soilType, region, priceSort])

  const clearFilters = () => {
    setSearchQuery("")
    setCategory("All")
    setSeason("All")
    setSoilType("All")
    setRegion("All")
    setPriceSort("none")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-background to-muted/50 py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                Crop Catalog
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                Explore our comprehensive collection of crops with detailed growing guides
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Sidebar Filters */}
              <aside className="lg:w-72 shrink-0">
                <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
                  <h2 className="mb-4 text-lg font-semibold text-foreground">
                    Filter & Sort
                  </h2>
                  <CropFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    category={category}
                    setCategory={setCategory}
                    season={season}
                    setSeason={setSeason}
                    soilType={soilType}
                    setSoilType={setSoilType}
                    region={region}
                    setRegion={setRegion}
                    priceSort={priceSort}
                    setPriceSort={setPriceSort}
                    onClearFilters={clearFilters}
                  />
                </div>
              </aside>

              {/* Crop Grid */}
              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-muted-foreground">
                    Showing{" "}
                    <span className="font-medium text-foreground">
                      {filteredCrops.length}
                    </span>{" "}
                    {filteredCrops.length === 1 ? "crop" : "crops"}
                  </p>
                </div>

                {filteredCrops.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredCrops.map((crop) => (
                      <CropCard key={crop.id} crop={crop} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
                    <Leaf className="mb-4 h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mb-2 text-lg font-medium text-foreground">
                      No crops found
                    </h3>
                    <p className="max-w-sm text-muted-foreground">
                      Try adjusting your filters or search query to find what you{"'"}re looking for.
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
