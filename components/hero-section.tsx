import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, CloudSun, TrendingUp, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://media.gettyimages.com/id/1365689821/photo/closeup-shot-of-spinach-growing-on-a-farm.jpg?s=612x612&w=0&k=20&c=6yd_HtIABvzM2m6S2eV6ERgKVwUKLhRmOVzdRHgrka4="
          alt="Farm Background"
          className="w-full h-full object-cover blur-md"
        />
      </div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-900/30 -z-10"></div>

      <div className="container mx-auto px-4">

        {/* White Blur Container */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl p-8 md:p-12">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

            {/* Left Content */}
            <div className="space-y-6">

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Grow Smarter, <span className="text-green-600">Harvest Better</span>
              </h1>

              <p className="max-w-xl text-lg text-gray-700 leading-relaxed">
                Your complete digital partner for successful farming. Access crop guides,
                weather recommendations, and real-time market prices all in one place.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">

                <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/crops">
                    Explore Crops
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  <Link href="/weather">
                    <CloudSun className="mr-2 h-5 w-5" />
                    Weather Advisor
                  </Link>
                </Button>

              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-4">

                <FeatureCard
                  icon={<BookOpen className="h-6 w-6" />}
                  title="Growing Guides"
                  description="Step-by-step instructions for every crop"
                />

                <FeatureCard
                  icon={<CloudSun className="h-6 w-6" />}
                  title="Weather Smart"
                  description="Crop recommendations based on weather"
                  highlighted
                />

              </div>

              <div className="space-y-4 pt-8">

                <FeatureCard
                  icon={<TrendingUp className="h-6 w-6" />}
                  title="Market Prices"
                  description="Real-time pricing and trends"
                  highlighted
                />

                <FeatureCard
                  icon={<Leaf className="h-6 w-6" />}
                  title="Expert Advice"
                  description="Best practices from farming experts"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  highlighted = false
}: {
  icon: React.ReactNode
  title: string
  description: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-5 transition-all ${
        highlighted
          ? "border-green-600 bg-green-600 text-white shadow-lg"
          : "border-green-200 bg-white/80 backdrop-blur-md hover:border-green-400 hover:shadow-md"
      }`}
    >
      <div className={`mb-3 ${highlighted ? "text-white" : "text-green-600"}`}>
        {icon}
      </div>

      <h3 className={`mb-1 font-semibold ${highlighted ? "text-white" : "text-gray-800"}`}>
        {title}
      </h3>

      <p className={`text-sm ${highlighted ? "text-green-100" : "text-gray-600"}`}>
        {description}
      </p>
    </div>
  )
}