"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { Menu, X, Leaf, ShoppingCart, User, LogOut } from "lucide-react"
import { Menu, X, Leaf, ShoppingCart, Search } from "lucide-react"
import { crops } from "@/lib/crop-data"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const { getTotalItems, toggleCart } = useCart()
  const { user, logout, isAuthenticated } = useAuth()

  useEffect(() => {
    try {
      setLoggedIn(localStorage.getItem("isLoggedIn") === "true")
    } catch {
      setLoggedIn(false)
    }
  }, [])

  const filteredCrops = crops
    .filter(
      (crop) =>
        crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crop.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 5)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setShowSearchResults(e.target.value.length > 0)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (filteredCrops.length > 0) {
      window.location.href = `/crops/${filteredCrops[0].id}`
    }
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/crops", label: "Crop Types" },
    { href: "/shop", label: "Shop" },
    { href: "/weather", label: "Weather" },
    { href: "/market", label: "Market Prices" },
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
          <div className="relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search crops..."
                  className="w-64 pl-9"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery && setShowSearchResults(true)}
                />
              </div>
            </form>
            {showSearchResults && filteredCrops.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                {filteredCrops.map((crop) => (
                  <Link
                    key={crop.id}
                    href={`/crops/${crop.id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                    onClick={() => {
                      setShowSearchResults(false)
                      setSearchQuery("")
                    }}
                  >
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-8 h-8 rounded object-cover"
                    />
                    <div>
                      <div className="font-medium text-sm">{crop.name}</div>
                      <div className="text-xs text-muted-foreground">{crop.category}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {showSearchResults && searchQuery && filteredCrops.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-50 p-4 text-center text-sm text-muted-foreground">
                No crops found matching "{searchQuery}"
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={toggleCart} className="relative">
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                {getTotalItems()}
              </Badge>
            )}
          </Button>
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="sm" asChild className="gap-2">
                <Link href="/profile">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user?.fullName}</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={logout} className="gap-2">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </>
          ) : (
          {!loggedIn && (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">
                  Login
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </>
          )}
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
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search crops..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => searchQuery && setShowSearchResults(true)}
                  />
                </div>
              </form>

              {showSearchResults && filteredCrops.length > 0 && (
                <div className="mt-2 bg-white border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredCrops.map((crop) => (
                    <Link
                      key={crop.id}
                      href={`/crops/${crop.id}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                      onClick={() => {
                        setShowSearchResults(false)
                        setSearchQuery("")
                        setIsMenuOpen(false)
                      }}
                    >
                      <img
                        src={crop.image}
                        alt={crop.name}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <div>
                        <div className="font-medium text-sm">{crop.name}</div>
                        <div className="text-xs text-muted-foreground">{crop.category}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {showSearchResults && searchQuery && filteredCrops.length === 0 && (
                <div className="mt-2 bg-white border border-border rounded-lg shadow-lg p-4 text-center text-sm text-muted-foreground">
                  No crops found matching "{searchQuery}"
                </div>
              )}
            </div>
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
              {isAuthenticated ? (
                <>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    {user?.fullName}
                  </Button>
                  <Button variant="outline" onClick={logout} className="w-full justify-start gap-2">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                
              {!loggedIn && (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/login">
                      Login
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
      
      <CartSidebar />
    </header>
  )
}
