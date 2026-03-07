import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { crops } from "@/lib/crop-data"
import {
  ArrowLeft,
  Clock,
  TrendingUp,
  Leaf,
  MapPin,
  Layers,
  Cloud,
  Sprout,
  Droplets,
  Bug,
  Scissors,
  Wheat,
  Shovel,
  FlaskConical,
} from "lucide-react"

interface CropPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return crops.map((crop) => ({
    id: crop.id,
  }))
}

export default async function CropDetailPage({ params }: CropPageProps) {
  const { id } = await params
  const crop = crops.find((c) => c.id === id)

  if (!crop) {
    notFound()
  }

  const guideSteps = [
    {
      icon: <Shovel className="h-5 w-5" />,
      title: "Soil Preparation",
      content: crop.guide.soilPreparation,
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Climate & Weather",
      content: crop.guide.climate,
    },
    {
      icon: <Wheat className="h-5 w-5" />,
      title: "Seed Selection",
      content: crop.guide.seedSelection,
    },
    {
      icon: <Sprout className="h-5 w-5" />,
      title: "Sowing Techniques",
      content: crop.guide.sowingTechniques,
    },
    {
      icon: <FlaskConical className="h-5 w-5" />,
      title: "Fertilization",
      content: crop.guide.fertilization,
    },
    {
      icon: <Droplets className="h-5 w-5" />,
      title: "Irrigation",
      content: crop.guide.irrigation,
    },
    {
      icon: <Bug className="h-5 w-5" />,
      title: "Pest & Disease Management",
      content: crop.guide.pestManagement,
    },
    {
      icon: <Scissors className="h-5 w-5" />,
      title: "Harvesting",
      content: crop.guide.harvesting,
    },
  ]

  const difficultyColor = {
    Easy: "bg-chart-1 text-primary-foreground",
    Medium: "bg-accent text-accent-foreground",
    Hard: "bg-destructive text-destructive-foreground",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/50 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/crops">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Crops
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Crop Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <Image
                  src={crop.image}
                  alt={crop.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Crop Info */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className={difficultyColor[crop.difficulty]}>
                    {crop.difficulty}
                  </Badge>
                  <Badge variant="secondary">{crop.category}</Badge>
                </div>

                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  {crop.name}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {crop.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-border">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Market Price
                        </p>
                        <p className="font-semibold text-foreground">
                          ₹{crop.marketPrice} {crop.priceUnit}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Time to Harvest
                        </p>
                        <p className="font-semibold text-foreground">
                          {crop.timeToHarvest}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Layers className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Est. Yield
                        </p>
                        <p className="font-semibold text-foreground">
                          {crop.estimatedYield}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Regions</p>
                        <p className="font-semibold text-foreground text-sm">
                          {crop.region.slice(0, 2).join(", ")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Best Seasons
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {crop.season.map((s) => (
                        <Badge key={s} variant="outline">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Suitable Soil Types
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {crop.soilType.map((soil) => (
                        <Badge key={soil} variant="outline">
                          {soil}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growing Guide Section */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
              Complete Growing Guide
            </h2>

            <Tabs defaultValue="step-by-step" className="w-full">
              <TabsList className="mb-6 w-full justify-start overflow-x-auto">
                <TabsTrigger value="step-by-step">Step-by-Step Guide</TabsTrigger>
                <TabsTrigger value="quick-reference">Quick Reference</TabsTrigger>
              </TabsList>

              <TabsContent value="step-by-step" className="space-y-4">
                {guideSteps.map((step, index) => (
                  <Card key={step.title} className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          {step.icon}
                          <span className="text-foreground">{step.title}</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed pl-13">
                        {step.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="quick-reference">
                <div className="grid gap-4 md:grid-cols-2">
                  {guideSteps.map((step) => (
                    <Card key={step.title} className="border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <span className="text-primary">{step.icon}</span>
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                          {step.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
