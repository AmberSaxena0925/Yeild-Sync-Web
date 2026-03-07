"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { crops, weatherConditions } from "@/lib/crop-data"
import {
  CloudSun,
  Thermometer,
  Droplets,
  Wind,
  Leaf,
  ArrowRight,
  Sun,
  Cloud,
  CloudRain,
} from "lucide-react"

const weatherIcons: Record<string, React.ReactNode> = {
  "Hot & Dry": <Sun className="h-8 w-8 text-accent" />,
  "Hot & Humid": <CloudRain className="h-8 w-8 text-chart-4" />,
  "Cool & Dry": <Cloud className="h-8 w-8 text-muted-foreground" />,
  "Moderate": <CloudSun className="h-8 w-8 text-primary" />,
  "Rainy": <CloudRain className="h-8 w-8 text-chart-4" />,
}

export default function WeatherPage() {
  const [selectedWeather, setSelectedWeather] = useState<string>("")

  const getRecommendedCrops = () => {
    if (!selectedWeather) return []
    const condition = weatherConditions.find(
      (w) => w.condition === selectedWeather
    )
    if (!condition) return []
    return crops.filter((crop) => condition.suitable.includes(crop.id))
  }

  const recommendedCrops = getRecommendedCrops()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/50 py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <CloudSun className="h-4 w-4" />
                Weather-Based Advisor
              </div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Get Crop Recommendations Based on Weather
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Select your current or expected weather conditions to discover the best crops for your farm
              </p>
            </div>
          </div>
        </section>

        {/* Weather Selection */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="border-border mb-10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-primary" />
                    Select Weather Condition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedWeather} onValueChange={setSelectedWeather}>
                    <SelectTrigger className="w-full md:w-80">
                      <SelectValue placeholder="Choose weather condition" />
                    </SelectTrigger>
                    <SelectContent>
                      {weatherConditions.map((condition) => (
                        <SelectItem key={condition.condition} value={condition.condition}>
                          {condition.condition}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {selectedWeather && (
                    <div className="mt-6 flex items-center gap-4 rounded-lg bg-muted p-4">
                      {weatherIcons[selectedWeather]}
                      <div>
                        <p className="font-semibold text-foreground">
                          {selectedWeather} Conditions
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {recommendedCrops.length} crops recommended for this weather
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Weather Info Cards */}
              {!selectedWeather && (
                <div className="mb-10">
                  <h2 className="mb-6 text-xl font-semibold text-foreground">
                    Available Weather Conditions
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {weatherConditions.map((condition) => (
                      <Card
                        key={condition.condition}
                        className="border-border cursor-pointer transition-all hover:border-primary hover:shadow-md"
                        onClick={() => setSelectedWeather(condition.condition)}
                      >
                        <CardContent className="flex items-center gap-4 p-4">
                          {weatherIcons[condition.condition]}
                          <div>
                            <p className="font-semibold text-foreground">
                              {condition.condition}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {condition.suitable.length} suitable crops
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Crops */}
              {selectedWeather && recommendedCrops.length > 0 && (
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-foreground">
                    Recommended Crops for {selectedWeather} Weather
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {recommendedCrops.map((crop) => (
                      <Card key={crop.id} className="border-border hover:border-primary transition-colors">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                              <Leaf className="h-7 w-7 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground">
                                {crop.name}
                              </h3>
                              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                                {crop.description}
                              </p>
                              <div className="mt-3 flex flex-wrap items-center gap-2">
                                <Badge variant="secondary">
                                  {crop.timeToHarvest}
                                </Badge>
                                <Badge variant="outline">
                                  ${crop.marketPrice} {crop.priceUnit}
                                </Badge>
                              </div>
                              <Button
                                variant="link"
                                asChild
                                className="mt-2 h-auto p-0 text-primary"
                              >
                                <Link href={`/crops/${crop.id}`}>
                                  View Growing Guide
                                  <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {selectedWeather && recommendedCrops.length === 0 && (
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <CloudSun className="mb-4 h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mb-2 text-lg font-medium text-foreground">
                      No specific recommendations
                    </h3>
                    <p className="max-w-sm text-muted-foreground">
                      We don{"'"}t have specific crop recommendations for this weather condition yet.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="border-t border-border bg-muted/30 py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-xl font-semibold text-foreground">
                Weather Farming Tips
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="border-border">
                  <CardContent className="p-5">
                    <Thermometer className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="mb-2 font-medium text-foreground">
                      Temperature Matters
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Most crops have optimal temperature ranges. Monitor daily temperatures and choose crops accordingly.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <Droplets className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="mb-2 font-medium text-foreground">
                      Water Requirements
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Match crop water needs with available rainfall or irrigation capacity for best results.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <Wind className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="mb-2 font-medium text-foreground">
                      Seasonal Planning
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Plan your crop calendar based on seasonal weather patterns in your region.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
