import { Card, CardContent } from "@/components/ui/card"
import { Sprout, CloudRain, BarChart3, Map, Filter, BookMarked } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Complete Crop Guides",
      description: "Detailed step-by-step instructions covering soil preparation, sowing, fertilization, irrigation, pest management, and harvesting."
    },
    {
      icon: <CloudRain className="h-8 w-8" />,
      title: "Weather-Based Recommendations",
      description: "Get personalized crop suggestions based on current and forecasted weather conditions in your region."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Market Price Tracking",
      description: "Real-time market prices with sorting options to help you plan your crops for maximum profitability."
    },
    {
      icon: <Filter className="h-8 w-8" />,
      title: "Advanced Filtering",
      description: "Filter crops by type, season, soil type, region, and market price to find the perfect match for your farm."
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Regional Suitability",
      description: "Find crops perfectly suited to your geographical region with localized growing recommendations."
    },
    {
      icon: <BookMarked className="h-8 w-8" />,
      title: "Expert Knowledge Base",
      description: "Access proven farming techniques and best practices compiled from agricultural experts."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Everything You Need for Successful Farming
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive tools and information designed specifically for modern farmers
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
