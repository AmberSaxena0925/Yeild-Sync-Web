"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { cropCategories, seasons, soilTypes, regions } from "@/lib/crop-data"
import { Search, SlidersHorizontal, X } from "lucide-react"

interface CropFiltersProps {
  searchQuery: string
  setSearchQuery: (value: string) => void
  category: string
  setCategory: (value: string) => void
  season: string
  setSeason: (value: string) => void
  soilType: string
  setSoilType: (value: string) => void
  region: string
  setRegion: (value: string) => void
  priceSort: string
  setPriceSort: (value: string) => void
  onClearFilters: () => void
}

export function CropFilters({
  searchQuery,
  setSearchQuery,
  category,
  setCategory,
  season,
  setSeason,
  soilType,
  setSoilType,
  region,
  setRegion,
  priceSort,
  setPriceSort,
  onClearFilters,
}: CropFiltersProps) {
  const hasActiveFilters =
    searchQuery ||
    category !== "All" ||
    season !== "All" ||
    soilType !== "All" ||
    region !== "All" ||
    priceSort !== "none"

  const FilterControls = () => (
    <div className="space-y-5">
      <div>
        <Label htmlFor="category" className="text-sm font-medium mb-2 block">
          Crop Category
        </Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger id="category" className="w-full">
            <SelectValue placeholder="Select category" />
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

      <div>
        <Label htmlFor="season" className="text-sm font-medium mb-2 block">
          Season
        </Label>
        <Select value={season} onValueChange={setSeason}>
          <SelectTrigger id="season" className="w-full">
            <SelectValue placeholder="Select season" />
          </SelectTrigger>
          <SelectContent>
            {seasons.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="soilType" className="text-sm font-medium mb-2 block">
          Soil Type
        </Label>
        <Select value={soilType} onValueChange={setSoilType}>
          <SelectTrigger id="soilType" className="w-full">
            <SelectValue placeholder="Select soil type" />
          </SelectTrigger>
          <SelectContent>
            {soilTypes.map((soil) => (
              <SelectItem key={soil} value={soil}>
                {soil}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="region" className="text-sm font-medium mb-2 block">
          Region
        </Label>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger id="region" className="w-full">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="priceSort" className="text-sm font-medium mb-2 block">
          Sort by Price
        </Label>
        <Select value={priceSort} onValueChange={setPriceSort}>
          <SelectTrigger id="priceSort" className="w-full">
            <SelectValue placeholder="Sort by price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Default</SelectItem>
            <SelectItem value="low-to-high">Price: Low to High</SelectItem>
            <SelectItem value="high-to-low">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          className="w-full"
          onClick={onClearFilters}
        >
          <X className="mr-2 h-4 w-4" />
          Clear All Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search crops..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Open filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Filter Crops</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterControls />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block">
        <FilterControls />
      </div>
    </div>
  )
}
