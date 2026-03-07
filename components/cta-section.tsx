import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CloudSun } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Ready to Grow Your Farm{"'"}s Potential?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Start making data-driven farming decisions today. Get personalized crop recommendations based on your local weather conditions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link href="/weather">
                <CloudSun className="mr-2 h-5 w-5" />
                Get Weather Recommendations
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/crops">
                Browse All Crops
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
