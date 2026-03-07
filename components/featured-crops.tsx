import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CropCard } from "@/components/crop-card"
import { crops } from "@/lib/crop-data"
import { ArrowRight } from "lucide-react"

export function FeaturedCrops() {
  const featuredCrops = crops.slice(0, 4)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Popular Crops
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Explore our most searched crops with complete growing guides
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/crops">
              View All Crops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCrops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      </div>
    </section>
  )
}
