import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">
                FarmDirect <span className="text-primary">Connect</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering farmers with smart crop information, weather-based recommendations, and market connections.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/crops" className="text-sm text-muted-foreground hover:text-primary">
                  Crop Catalog
                </Link>
              </li>
              <li>
                <Link href="/weather" className="text-sm text-muted-foreground hover:text-primary">
                  Weather Advisor
                </Link>
              </li>
              <li>
                <Link href="/market" className="text-sm text-muted-foreground hover:text-primary">
                  Market Prices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/crops" className="text-sm text-muted-foreground hover:text-primary">
                  Growing Guides
                </Link>
              </li>
              <li>
                <Link href="/weather" className="text-sm text-muted-foreground hover:text-primary">
                  Seasonal Advice
                </Link>
              </li>
              <li>
                <Link href="/market" className="text-sm text-muted-foreground hover:text-primary">
                  Price Trends
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  Help Center
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Farmer Community
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FarmDirect Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
