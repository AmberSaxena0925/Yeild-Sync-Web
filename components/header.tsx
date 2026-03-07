"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { Menu, X, Leaf, ShoppingCart } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems, toggleCart } = useCart()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/crops", label: "Crop Types" },
    { href: "/shop", label: "Shop" },
    { href: "/weather", label: "Weather" },
    { href: "/market", label: "Market Prices" },
    { href: "/chat", label: "AI Assistant" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground md:text-xl">
            Yield <span className="text-primary">Sync</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" onClick={toggleCart} className="relative">
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                {getTotalItems()}
              </Badge>
            )}
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">
              Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" onClick={toggleCart} className="w-full justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart ({getTotalItems()})
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/login">
                  Login
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
      
      <CartSidebar />
    </header>
  )
}
