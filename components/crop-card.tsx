import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp, Leaf } from "lucide-react"
import type { Crop } from "@/lib/crop-data"

interface CropCardProps {
  crop: Crop
}

export function CropCard({ crop }: CropCardProps) {
  const difficultyColor = {
    Easy: "bg-chart-1 text-primary-foreground",
    Medium: "bg-accent text-accent-foreground",
    Hard: "bg-destructive text-destructive-foreground"
  }

  return (
    <Link href={`/crops/${crop.id}`}>
      <Card className="group h-full overflow-hidden border-border transition-all duration-300 hover:border-primary hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={crop.image}
            alt={crop.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <Badge className={difficultyColor[crop.difficulty]}>
              {crop.difficulty}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-card/90 text-foreground">
              {crop.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {crop.name}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
            {crop.description}
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{crop.timeToHarvest}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3.5 w-3.5" />
              <span className="font-semibold text-primary">
                ₹{crop.marketPrice} {crop.priceUnit}
              </span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {crop.season.slice(0, 2).map((season) => (
              <Badge key={season} variant="outline" className="text-xs">
                {season}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
