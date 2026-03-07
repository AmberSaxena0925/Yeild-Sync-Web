"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"
import {
  ShoppingCart,
  Plus,
  Minus,
  X,
  Trash2,
  IndianRupee,
  ArrowRight,
} from "lucide-react"

export function CartSidebar() {
  const { state, removeFromCart, updateQuantity, clearCart, setCartOpen, getTotalPrice } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId)
  }

  const handleClearCart = () => {
    clearCart()
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 1000 ? 0 : 50
  const tax = subtotal * 0.05 // 5% tax
  const total = subtotal + shipping + tax

  return (
    <Sheet open={state.isOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart ({state.items.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col">
          {state.items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground/30" />
              <h3 className="mb-2 text-lg font-medium">Your cart is empty</h3>
              <p className="mb-4 text-muted-foreground">
                Add some products to get started!
              </p>
              <Button onClick={() => setCartOpen(false)} asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <ScrollArea className="flex-1">
                <div className="space-y-4 p-4">
                  {state.items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-20 w-20 rounded-lg object-cover bg-muted"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {item.product.brand}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 p-0"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 p-0"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="font-medium text-sm">
                              {formatPrice(
                                (item.product.discount 
                                  ? item.product.price * (1 - item.product.discount / 100)
                                  : item.product.price) * item.quantity
                              )}
                            </p>
                            {item.product.discount && (
                              <p className="text-xs text-muted-foreground line-through">
                                {formatPrice(item.product.price * item.quantity)}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge 
                            variant={item.product.inStock ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {item.product.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                            onClick={() => handleRemoveItem(item.product.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Cart Summary */}
              <div className="border-t border-border p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : formatPrice(shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (5%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {subtotal < 1000 && (
                  <p className="text-xs text-muted-foreground">
                    Add {formatPrice(1000 - subtotal)} more for free shipping!
                  </p>
                )}

                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    onClick={() => setCartOpen(false)}
                    asChild
                  >
                    <Link href="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setCartOpen(false)}
                      asChild
                    >
                      <Link href="/shop">Continue Shopping</Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleClearCart}
                      className="px-3"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}